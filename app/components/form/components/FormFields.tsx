import type React from 'react'
import { FormattedMessage } from 'react-intl'


import type {
  FormFieldConfig,
  InputClickHandlers,
  SelectOption
} from '../typings/interfaces'



import LoadingFallback from './LoadingFallback'
import { FORM_FIELDS} from '../constants'
import FormField from './FormField'

type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
type SelectChangeHandler = (option: SelectOption | null) => void
type HandleInvalid = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => void

export interface FieldChangeHandlers {
  inputchange: InputChangeHandler
  selectchange: SelectChangeHandler
  handleInvalid: HandleInvalid
}

export interface FormFieldsProps {
  formData: Record<string, string>
  errors: Record<string, string>
  createChangeHandlers: (fieldName: string) => FieldChangeHandlers
  createInputClickHandler: (fieldName: string) => InputClickHandlers
  handleBlur: (
    fieldName: string
  ) => (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  isValidFormToSubmit: () => boolean
  formState: {
    isSubmitting: boolean
  }
}

const CSS_HANDLES = [
  'formLeadForm',
  'formLeadSubmitBtn',
  'formLeadError',
  'formLeadErrorGeneral'
] as const

const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  errors,
  createChangeHandlers,
  createInputClickHandler,
  handleSubmit,
  isValidFormToSubmit,
  formState
}) => {



  // Conditional render para estado de carga
  if (formState.isSubmitting) {
    return <LoadingFallback />
  }

const fields: FormFieldConfig[] = [...FORM_FIELDS];

  return (
    <div className={CSS_HANDLES[0]}>
      {fields.map((field: FormFieldConfig) => {
        return (
          <FormField
            key={field.name}
            {...field}
            value={formData[field.name]}
            error={errors[field.name] ? { type: errors[field.name] } : undefined}
            onChange={createChangeHandlers(field.name)}
            maxLength={field.maxLength}
            minLength={field.minLength}
            required={field.required}
            min={field.type === 'number' ? field.minLength : undefined}
            max={field.type === 'number' ? field.maxLength : undefined}
            pattern={field.pattern}
            onClick={createInputClickHandler(field.name)}
            onBlur={createChangeHandlers(field.name).handleInvalid}
          />
        )
      })}

      <button
        type="submit"
        className={CSS_HANDLES[1]}
        disabled={!isValidFormToSubmit()}
        onClick={(e) => {
          e.preventDefault()
          handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
        }}
      >
        <FormattedMessage id="form/form-submit" defaultMessage="CONFIRMAR" />
      </button>

      {errors.submit && (
        <p
          className={`${CSS_HANDLES[2]} ${CSS_HANDLES[3]}`}
        >
          {errors.submit}
        </p>
      )}
    </div>
  )
}

export default FormFields
