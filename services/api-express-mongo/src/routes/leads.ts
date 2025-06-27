// services/api-express-mongo/src/routes/leads.ts
import { Router } from 'express'
import Lead from '../models/Lead'

const router = Router()

// Crear nuevo lead
router.post('/leads', async (req, res) => {
  try {
    const leadData = req.body
    
    // Validaciones básicas
    if (!leadData.nombre || !leadData.email) {
      return res.status(400).json({
        error: 'Nombre y email son requeridos'
      })
    }

    const newLead = new Lead(leadData)
    const savedLead = await newLead.save()
    
    res.status(201).json({
      success: true,
      data: savedLead,
      message: 'Lead creado exitosamente'
    })
    
  } catch (error) {
    console.error('Error creando lead:', error)
    res.status(500).json({
      error: 'Error interno del servidor'
    })
  }
})

// Obtener todos los leads
router.get('/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 })
    res.json({
      success: true,
      data: leads
    })
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo leads' })
  }
})

export default router