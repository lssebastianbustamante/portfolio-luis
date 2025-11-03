import { FieldType } from '../typings/interfaces'

export const COMMON_FIELDS = {
    nombre: {
        name: 'nombre',
        type: 'text' as FieldType,
        label: 'form/form.label.nombre',
        required: true,
        pattern: '[a-zA-Z ]*',
        minLength: 5,
        maxLength: 50
    },
    email: {
        name: 'email',
        type: 'email' as FieldType,
        label: 'form/form.label.email',
        required: true,
    },
    telefono: {
        name: 'telefono',
        type: 'number' as FieldType,
        label: 'form/form.label.telefono',
        required: true,
        pattern: '\\d{10}*',
        maxLength: 9999999999,
        minLength: 999999999
    },
    mensaje: {
        name: 'mensaje',
        type: 'textarea' as FieldType,
        label: 'form/form.label.mensaje',
        required: false,
        minLength: 0,
        maxLength: 500
    }
}