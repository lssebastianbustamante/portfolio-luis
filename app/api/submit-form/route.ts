import { NextResponse } from 'next/server';
import { createLogger } from '../../utils/logger';

const logger = createLogger('API:SubmitForm');

export async function POST(request: Request) {
  const requestId = Math.random().toString(36).substring(2, 9);
  const startTime = Date.now();
  
  try {
    const formData = await request.json();
    const apiKey = process.env.API_KEY?.replace(/^['"]|['"]$/g, '');
    
    logger.info(`[${requestId}] Inicio de solicitud de formulario`, {
      method: request.method,
      url: request.url,
      hasApiKey: !!apiKey,
      formData: {
        hasEmail: !!formData.email,
        hasName: !!formData.nombre,
        hasPhone: !!formData.telefono,
        hasMessage: !!formData.mensaje
      }
    });
    
    if (!apiKey) {
      const errorMsg = 'API_KEY no está configurada en las variables de entorno';
      logger.error(`[${requestId}] ${errorMsg}`);
      return NextResponse.json(
        { 
          error: 'Error de configuración del servidor',
          details: 'API_KEY no configurada',
          requestId
        },
        { status: 500 }
      );
    }

    const apiUrl = 'https://luis-platzi.app.n8n.cloud/webhook/portfolio-form';
    const requestBody = {
      ...formData,
      source: 'portfolio-contact-form',
      createdAt: new Date().toISOString()
    };

    logger.debug(`[${requestId}] Enviando solicitud a API externa`, {
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'X-API-Key': '***' + apiKey.slice(-4)
      },
      body: {
        ...requestBody,
        // No registrar datos sensibles
        email: requestBody.email ? '***@***' : undefined,
        telefono: requestBody.telefono ? '***' : undefined
      }
    });

    const startApiCall = Date.now();
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'X-API-Key': apiKey,
        'X-Request-ID': requestId
      },
      body: JSON.stringify(requestBody)
    });

    const responseTime = Date.now() - startApiCall;
    const responseText = await response.text();
    
    logger.info(`[${requestId}] Respuesta de la API recibida`, {
      status: response.status,
      statusText: response.statusText,
      responseTime: `${responseTime}ms`,
      headers: Object.fromEntries(
        Array.from(response.headers.entries())
          .filter(([key]) => !key.toLowerCase().includes('key'))
      )
    });

    if (!response.ok) {
      const error = new Error(`Error en la API (${response.status}): ${response.statusText}`);
      logger.error(`[${requestId}] ${error.message}`, {
        response: {
          status: response.status,
          statusText: response.statusText,
          body: responseText
        },
        requestId
      });
      
      throw error;
    }

    try {
      const data = responseText ? JSON.parse(responseText) : {};
      logger.info(`[${requestId}] Solicitud completada exitosamente`, {
        responseTime: `${Date.now() - startTime}ms`,
        requestId
      });
      
      return NextResponse.json({
        ...data,
        requestId
      });
    } catch (e) {
      const error = e as Error;
      logger.error(`[${requestId}] Error al analizar la respuesta JSON`, {
        error: error.message,
        stack: error.stack,
        responseText,
        requestId
      });
      
      return NextResponse.json(
        { 
          error: 'Respuesta inesperada del servidor',
          details: responseText,
          requestId
        },
        { status: 500 }
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    logger.error(`[${requestId}] Error al procesar el formulario`, {
      error: errorMessage,
      stack: errorStack,
      responseTime: `${Date.now() - startTime}ms`,
      requestId
    });
    
    return NextResponse.json(
      { 
        error: 'Error al procesar el formulario',
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined,
        requestId
      },
      { status: 500 }
    );
  }
}
