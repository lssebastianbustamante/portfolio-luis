
import { usePlaceholderMessage } from "../../hook/usePlaceholderMessage"
import {  getInputMode } from "../../utils"
import type {  FormFieldProps } from "../../typings/interfaces"

import { FormattedMessage } from "react-intl"


const CSS_HANDLES = [
  'formLeadinputWrapper',
  'formLeadLabel',
  'formLeadInput',
  'formLeadInputError',
  'formLeadError'
] as const

   

const BaseInput: React.FC<FormFieldProps> = (props) => {

  const {
      name,
      type,
      value,
      error,
      onChange,
      onClick,
      pattern,
      required,
      minLength,
      maxLength,
      min,
      max,
      label,
    } = props

    const errorValues = {
      max: max,
      min: min,
      value: value,
      pattern: pattern,
      minLength: minLength,
      maxLength: maxLength,
      type: type,
    }
    
  
    const errorMessage = error ? error?.type : ''

   
    return (
      <div className={CSS_HANDLES[0]}>
        <label className={CSS_HANDLES[1]} htmlFor={name}>
          
            <FormattedMessage
              id={label}
              defaultMessage={'Ingrese su ' + name}
            />
         
        </label>
        <input
          className={`${CSS_HANDLES[2]} ${
            error ? CSS_HANDLES[3]: ''
          }`}
          id={name}
          name={name}
          type={type}
          pattern={pattern}
          value={value ?? ''}
          onChange={
            onChange
              ? (e) => {
                  onChange.inputchange(e as React.ChangeEvent<HTMLInputElement>)
                }
              : undefined
          }
          onClick={onClick?.handleInputClick(name)}
          onBlur={onChange?.handleInvalid}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          min={type === 'number' ? minLength : undefined}
          max={type === 'number' ? maxLength : undefined}
          placeholder={usePlaceholderMessage(name)}
          inputMode={getInputMode(type)}
        />
        {errorMessage && (
          <p className={CSS_HANDLES[4]} style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px' }}>
            {errorMessage}
          </p>
        )}
      </div>
    )
  }

  export default BaseInput