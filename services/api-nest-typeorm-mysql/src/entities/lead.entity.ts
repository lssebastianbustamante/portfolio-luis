// services/api-nest-typeorm-mysql/src/leads/entities/lead.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('leads')
export class Lead {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string

  @Column()
  email: string

  @Column({ nullable: true })
  telefono: string

  @Column({ type: 'text', nullable: true })
  mensaje: string

  @Column({ default: 'ARG' })
  pais: string

  @Column({ nullable: true })
  provincia: string

  @Column({ nullable: true })
  distrito: string

  @Column({ nullable: true })
  direccion: string

  @Column({ nullable: true })
  tipoNegocio: string

  @Column({ default: 'portfolio-form' })
  source: string

  @Column({ 
    type: 'enum', 
    enum: ['new', 'contacted', 'qualified', 'closed'],
    default: 'new'
  })
  status: string

  @CreateDateColumn()
  createdAt: Date
}