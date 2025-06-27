// services/gateway/src/routes/leads.ts
import { Router } from 'express'
import { connect } from 'nats'

const router = Router()

router.post('/leads', async (req, res) => {
  try {
    const nc = await connect({ servers: process.env.NATS_URL })
    
    // Publicar a NATS para procesamiento distribuido
    await nc.publish('leads.new', JSON.stringify({
      ...req.body,
      timestamp: new Date().toISOString()
    }))
    
    // También guardar directamente
    // Enviar a API Express para almacenamiento inmediato
    
    res.json({ success: true, message: 'Lead procesado' })
    
  } catch (error) {
    res.status(500).json({ error: 'Error procesando lead' })
  }
})

export default router