import { FormattedMessage } from "react-intl"
import Select from 'react-select'

import { usePlaceholderMessage } from "../../hook/usePlaceholderMessage"
import type { FormFieldProps, SelectOption } from "../../typings/interfaces"
import { colourStyles } from "../../utils"




const CSS_HANDLES = [
  'formLeadLabel',
  'formLeadinputWrapper',
  'formLeadError'
] as const


const SelectField: React.FC<FormFieldProps> = ({
    name,
    value,
    error,
    onChange,
    required,
    label,
    options
  }) => {

    if (!options?.length && name !== 'distrito') {
      return (
        <div className={CSS_HANDLES[1]}>
          <label className={CSS_HANDLES[0]} htmlFor={name}>
            <FormattedMessage
              id={label}
              defaultMessage="Seleccione una opción"
            />
          </label>
          <p className={CSS_HANDLES[2]}>
            <FormattedMessage
              id={label}
              defaultMessage="No hay opciones disponibles"
            />
          </p>
        </div>
      )
    }
  
    // Encontrar la opción seleccionada
    const selectedOption = options?.find((option) => option.value === value)
  
  
  
  
  
    return (
      <div className={CSS_HANDLES[1]}>
        <label className={CSS_HANDLES[0]} htmlFor={name}>
          <FormattedMessage id={label} defaultMessage="Seleccione una opción" />
        </label>
        <Select
          styles={colourStyles}
          options={options}
          value={selectedOption || null}
          onChange={(option, _actionMeta) => onChange?.selectchange(option as SelectOption)}
          onBlur={onChange?.handleInvalid}
          placeholder={usePlaceholderMessage(name)}
          required={required}
          key={`${name}-${value}`} // Forzar re-render cuando cambia el valor
        />
        {error && <p className={CSS_HANDLES[2]}>{
         error.type && error.params?.value
          }</p>}
      </div>
    )
  }

  export default SelectField