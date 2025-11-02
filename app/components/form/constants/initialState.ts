 

export const INITIAL_FORM_STATE = {
  isSubmitting: false,
  hasSubmitted: false,
  isOpen: false,
  status: 'IDLE'
}

export const DEFAULT_PROPS = {
  backgroundContainer: '#e95b2f',
  canonicalUrl: '',
  tiposDeNegocio: 'Kiosco, Almacén, Supermercado, otros'
} as const

export const INITIAL_COORDINATES = {
  latitud: 0,
  longitud: 0
}

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
  mensaje: '',
}

export const initialStateFields = {
  ARG: {
    ...BASE_STATE,
  },
  COL: {
    ...BASE_STATE,
    ciudad: ''
  },
  PER: {
    ...BASE_STATE
  }
}

export const DEFAULT_SELLER = 'Sin distribuidor en la dirección ingresada'

export type CountryCode = 'ARG' | 'COL' | 'PER';
export type CountryLanguage = 'es-AR' | 'es-CO' | 'es-PE';
export interface InitialStateFieldsInterface {
  ARG: {
    cuit: string;
    tipoNegocio: string;
    telefono: string;
    calle: string;
    altura: string;
    codigoPostal: string;
    localidad: string;
    nombre: string;
    email: string;
    tyc: string;
  };
  COL: {
    ciudad: string;
    nombre: string;
    email: string;
    celular: string;
    tyc: string;
  };
  PER: {
    nombre: string;
    email: string;
    celular: string;
    tyc: string;
  };
}