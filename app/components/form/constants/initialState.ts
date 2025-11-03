

export const INITIAL_FORM_STATE = {
  isSubmitting: false,
  hasSubmitted: false,
  isOpen: false,
  status: 'IDLE'
}

export const DEFAULT_PROPS = {
  backgroundContainer: '#e95b2f'
} as const

export const FIELD_TYPES = {
  TEXT: 'text' as const,
  EMAIL: 'email' as const,
  TEL: 'tel' as const,
  NUMERIC: 'numeric' as const,
  SELECT: 'select' as const,
  CHECKBOX: 'checkbox' as const,
} as const;

const BASE_STATE = {
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
}

export const initialStateFields = { ...BASE_STATE }

export interface InitialStateFieldsInterface {
  FORM_FIELDS: {
    telefono: string;
    nombre: string;
    email: string;
    mensaje: string;
  }
}