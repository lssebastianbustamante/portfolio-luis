type LogLevel = 'error' | 'warn' | 'info' | 'debug' | 'trace';
type LogLevels = Record<LogLevel, boolean>;

class Logger {
  private static instance: Logger;
  private levels: LogLevels;
  private context: string;

  private constructor(context: string = 'APP') {
    this.context = context.toUpperCase();
    this.levels = this.initializeLogLevels();
  }

  public static getLogger(context: string = 'APP'): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(context);
    }
    return Logger.instance;
  }

  private initializeLogLevels(): LogLevels {
    // Obtener el nivel de log del entorno o usar 'info' como predeterminado
    const logLevel = (typeof window !== 'undefined' 
      ? (process.env.NEXT_PUBLIC_LOG_LEVEL || 'info')
      : (process.env.LOG_LEVEL || 'info')
    ).toLowerCase() as LogLevel;
    
    const levels: LogLevel[] = ['error', 'warn', 'info', 'debug', 'trace'];
    const levelIndex = levels.indexOf(logLevel);
    
    return levels.reduce((acc, level, index) => ({
      ...acc,
      [level]: index <= levelIndex
    }), {} as LogLevels);
  }

  private shouldLog(level: LogLevel): boolean {
    return this.levels[level] === true;
  }

  private formatMessage(level: string, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    let formattedMessage = `[${timestamp}] [${level.toUpperCase()}] [${this.context}] ${message}`;
    
    if (data) {
      try {
        const isError = data instanceof Error;
        const dataToLog = isError 
          ? { message: data.message, stack: data.stack }
          : data;
        
        formattedMessage += `\n${JSON.stringify(dataToLog, null, 2)}`;
      } catch (e) {
        formattedMessage += ` [Error al formatear datos: ${e}]`;
      }
    }
    
    return formattedMessage;
  }

  public error(message: string, error?: any): void {
    if (this.shouldLog('error')) {
      console.error(this.formatMessage('ERROR', message, error));
    }
  }

  public warn(message: string, data?: any): void {
    if (this.shouldLog('warn')) {
      console.warn(this.formatMessage('WARN', message, data));
    }
  }

  public info(message: string, data?: any): void {
    if (this.shouldLog('info')) {
      console.info(this.formatMessage('INFO', message, data));
    }
  }

  public debug(message: string, data?: any): void {
    if (this.shouldLog('debug')) {
      console.debug(this.formatMessage('DEBUG', message, data));
    }
  }

  public trace(message: string, data?: any): void {
    if (this.shouldLog('trace')) {
      console.trace(this.formatMessage('TRACE', message, data));
    }
  }

  public log(level: LogLevel, message: string, data?: any): void {
    if (typeof window === 'undefined') {
      // Server-side logging
      switch (level) {
        case 'error': return this.error(message, data);
        case 'warn': return this.warn(message, data);
        case 'info': return this.info(message, data);
        case 'debug': return this.debug(message, data);
        case 'trace': return this.trace(message, data);
        default: this.info(message, data);
      }
    } else {
      // Client-side logging (browser)
      const formattedMessage = `[${this.context}] ${message}`;
      
      // Only log if level is enabled
      if (!this.shouldLog(level)) return;
      
      // Use appropriate console method based on level
      switch (level) {
        case 'error':
          console.error(formattedMessage, data || '');
          break;
        case 'warn':
          console.warn(formattedMessage, data || '');
          break;
        case 'info':
          console.info(formattedMessage, data || '');
          break;
        case 'debug':
        case 'trace':
          console.debug(formattedMessage, data || '');
          break;
        default:
          console.log(formattedMessage, data || '');
      }
    }
  }
}

export default Logger;

export const createLogger = (context: string) => Logger.getLogger(context);

// Exportar instancia global para uso rápido
export const logger = Logger.getLogger();
