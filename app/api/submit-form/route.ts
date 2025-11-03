import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const apiKey = process.env.API_KEY?.replace(/^['"]|['"]$/g, '');
    
    console.log('API Key from env:', apiKey ? '***' + apiKey.slice(-4) : 'No encontrada');
    console.log('Datos del formulario:', JSON.stringify(formData, null, 2));
    
    if (!apiKey) {
      console.error('❌ API_KEY no está configurada en las variables de entorno');
      return NextResponse.json(
        { 
          error: 'Error de configuración del servidor',
          details: 'API_KEY no configurada'
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
    
    console.log('Enviando solicitud a:', apiUrl);
    
    console.log('Headers:', {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
      'X-API-Key': '***' + apiKey.slice(-4)
    });
    console.log('Body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'X-API-Key': apiKey
      },
      body: JSON.stringify(requestBody)
    });

    const responseText = await response.text();
    console.log('Respuesta de la API:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: responseText
    });

    if (!response.ok) {
      throw new Error(`Error en la API (${response.status}): ${response.statusText}\n${responseText}`);
    }

    try {
      const data = responseText ? JSON.parse(responseText) : {};
      return NextResponse.json(data);
    } catch (e) {
      console.error('Error al analizar la respuesta JSON:', e);
      return NextResponse.json(
        { 
          error: 'Respuesta inesperada del servidor',
          details: responseText
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ Error al procesar el formulario:', error);
    return NextResponse.json(
      { 
        error: 'Error al procesar el formulario',
        details: error instanceof Error ? error.message : 'Error desconocido',
        stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined
      },
      { status: 500 }
    );
  }
}
