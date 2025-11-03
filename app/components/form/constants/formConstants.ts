import { COMMON_FIELDS } from './commonFields'

export const REQUIRED_FIELDS = [
    'nombre',
    'localidad',
    'telefono',
    'email'
] as const;

export const ERROR_DEFAULT = {
    message: '',
    error: ''
} as const;

export const FORM_FIELDS = [
    COMMON_FIELDS.nombre,
    COMMON_FIELDS.email,
    COMMON_FIELDS.telefono,
    COMMON_FIELDS.mensaje,
]
