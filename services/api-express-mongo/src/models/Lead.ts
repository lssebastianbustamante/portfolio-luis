// services/api-express-mongo/src/models/Lead.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface ILead extends Document {
  nombre: string
  email: string
  telefono?: string
  mensaje?: string
  pais: string
  provincia?: string
  distrito?: string
  direccion?: string
  tipoNegocio?: string
  source: string
  createdAt: Date
  status: 'new' | 'contacted' | 'qualified' | 'closed'
}

const LeadSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String },
  mensaje: { type: String },
  pais: { type: String, default: 'ARG' },
  provincia: { type: String },
  distrito: { type: String },
  direccion: { type: String },
  tipoNegocio: { type: String },
  source: { type: String, default: 'portfolio-form' },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'closed'], default: 'new' },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model<ILead>('Lead', LeadSchema)