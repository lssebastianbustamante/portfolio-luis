import { useMemo } from 'react';
import Logger, { createLogger } from '../utils/logger';

/**
 * Hook para usar el logger en componentes React
 * @param context Contexto del logger (opcional, por defecto 'APP')
 * @returns Instancia del logger
 */
export function useLogger(context?: string) {
  const logger = useMemo(() => {
    return createLogger(context || 'APP');
  }, [context]);

  return logger;
}

export default useLogger;
