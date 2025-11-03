import type { Props, ActionMeta, GroupBase } from 'react-select';

// Tipos
export type InputMode = 'text' | 'email' | 'tel' | 'numeric'
export type FieldType =
  | 'text'
  | 'email'
  | 'select'
  | 'checkbox'
  | 'number'
  | 'textarea'

export type ErrorType = FormErrors

export interface FormFieldConfig {
  name: string;
  type: FieldType;
  label: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
}

export interface InputClickHandlers {
  handleInputClick: (name: string) => (e: React.MouseEvent<HTMLInputElement>) => void;
}

type FieldError = {
  type: string;
  params?: { min?: number; max?: number; value?: string };
};
// Props
export interface FormFieldProps {
  label: string
  name: string
  type: FieldType
  value: string
  error?: any
  onChange?: {
    inputchange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    selectchange: (option: SelectOption) => void
    handleInvalid: (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  }
  onSelect?: SelectOption
  options?: SelectOption[]
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onBlur?: any
  onClick?: {
    handleInputClick: (name: string) => (e: React.MouseEvent<HTMLInputElement>) => void
  };
  onInvalid?: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  pattern?: string
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  placeholder?: string
}
export interface CssHandles {
  [key: string]: string;
}

export interface SelectOption {
  label?: string;
  value?: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  styles?: any;
  disabled?: boolean;
}

export interface BaseFormData {
  nombre?: string;
  email?: string;
  mensaje?: string;
  telefono?: string;
}



export type FormData = BaseFormData

export interface SelectChangeEvent {
  label: string;
  value: string;
}

export type OnSelectChange = (
  newValue: SelectChangeEvent,
  actionMeta: ActionMeta<SelectOption>
) => void;

export type SelectProps = Props<SelectOption, false, GroupBase<SelectOption>>;



export interface FormErrors {
  error: string;
  message: string;
  [key: string]: string;
}

export enum STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FINISH = 'FINISH',
  ERROR = 'ERROR'
}

export interface FormState {
  isSubmitting: boolean;
  hasSubmitted: boolean;
  isOpen: boolean;
  status: STATUS;
}