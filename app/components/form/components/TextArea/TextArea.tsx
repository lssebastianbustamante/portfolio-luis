import { FormattedMessage } from "react-intl"
import { usePlaceholderMessage } from "../../hook/usePlaceholderMessage"
import { useErrorMessage } from "../../hook/useErrorMessage"
import type { FormFieldProps } from "../../typings/interfaces"

const CSS_HANDLES = [
  'formLeadinputWrapper',
  'formLeadLabel',
  'formLeadInput',
  'formLeadInputError',
  'formLeadError'
] as const

const TextArea: React.FC<FormFieldProps> = (props) => {
  const {
    name,
    value,
    error,
    onChange,
    label,
    required,
    minLength,
    maxLength,
  } = props

  const { getErrorMessage } = useErrorMessage()

  return (
    <div className={CSS_HANDLES[0]}>
      <label className={CSS_HANDLES[1]} htmlFor={name}>
        <FormattedMessage id="form/form.label.mensaje" defaultMessage={'Ingrese su ' + name} />
      </label>
      <textarea
        className={`${CSS_HANDLES[2]} ${error ? CSS_HANDLES[3] : ''}`}
        id={name}
        name={name}
        value={value ?? ''}
        onChange={
          onChange
            ? (e) => {
                onChange.inputchange(
                  e as React.ChangeEvent<HTMLTextAreaElement>
                )
              }
            : undefined
        }
        onBlur={onChange?.handleInvalid as any}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        style={{ height: '100px' }}
        placeholder={usePlaceholderMessage(name)}
        rows={9}
      />
      {error && (
        <p className={CSS_HANDLES[4]}>
          {getErrorMessage(name, error.type, {
            value,
            minLength,
            maxLength,
            type: 'textarea',
          } as any)}
        </p>
      )}
    </div>
  )
}

export default TextArea
