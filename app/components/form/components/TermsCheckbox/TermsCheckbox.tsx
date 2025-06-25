
import { FormattedMessage } from "react-intl"
import type { FormFieldProps } from "../../typings/interfaces"




const CSS_HANDLES = [
  'formLeadCheckbox',
  'formLeadCheckboxContainer',
  'formLeadCheckmark',
  'formLeadCheckmarkError',
  'formLeadCheckboxText',
  'formLeadCheckboxLink',
  'formLeadError'
] as const

const TermsCheckbox: React.FC<FormFieldProps> = ({
  name,
  type,
  value,
  error,
  onChange,
  onClick,
  required
}) => {


  return (
    <label className={CSS_HANDLES[0]}>
      <div className={CSS_HANDLES[1]}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onBlur={onChange?.handleInvalid}
          onClick={onClick?.handleInputClick(name)}
          required={required}
        />
        <span
          className={`${CSS_HANDLES[2]} ${
            error ? CSS_HANDLES[3] : ''
          }`}
        />
      </div>
      <div className={CSS_HANDLES[4]}>
        <FormattedMessage
          id="form/form.text.tyc"
          defaultMessage="Acepto el tratamiento de mis Datos Personales de conformidad con la"
        />{' '}
        <a
          className={CSS_HANDLES[5]}
          href="/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage
            id="form/form.privacyPolicy.tyc"
            defaultMessage="Política de Privacidad"
          />
        </a>{' '}
        <FormattedMessage id="form/form.and.tyc" defaultMessage="y los" />{' '}
        <a
          className={CSS_HANDLES[5]}
          href="/terms-and-conditions"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage
            id="form/form.termsAndConditions.tyc"
            defaultMessage="Términos de Uso"
          />
        </a>{' '}
        <FormattedMessage
          id="form/form.ofThePlatform.tyc"
          defaultMessage="de la plataforma."
        />
      </div>
      {error && <p className={CSS_HANDLES[6]}>{error}</p>}
    </label>
  )
}

export default TermsCheckbox