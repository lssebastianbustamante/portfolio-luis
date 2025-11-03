import type React from 'react'
import { FormattedMessage } from 'react-intl'
import { Close } from '../icons'
import { useIntl } from 'react-intl'

interface FeedbackProps {
  handleClose: () => void
  response?: {
    Nombre?: string
    email?: string
    [key: string]: any
  }
}
const CSS_HANDLES = [
  'containerBlockFeedback',
  'fallbackLeadTitle',
  'formLeadButtonClose',
  'feedbackLeadSubtitle',
  'buttonFeedback'
] as const

const Feedback: React.FC<FeedbackProps> = ({ 
  handleClose, 
  response
   }) => {

const intl = useIntl()
  // Provide default values if response is undefined
  const safeResponse = response || {}
  const userName = safeResponse.Nombre || 'usuario'
  return (
    <div className={CSS_HANDLES[0]}>
      <h2 className={CSS_HANDLES[1]}>
        <FormattedMessage
          id="form/form.feedback.title"
          defaultMessage="¡Gracias {name} por contactarme!"
          values={{ name: userName }}
        />
      </h2>
      <div className={`${CSS_HANDLES[1]} mb4`}>
        <p className="f4 lh-copy">
          <FormattedMessage
            id="form/form.feedback.message"
            defaultMessage="He recibido tu mensaje."
          />
        </p>
        <p className="f5 lh-copy">
          <FormattedMessage
            id="form/form.feedback.followUp"
            defaultMessage="Me pondré en contacto contigo a la brevedad para hablar sobre tu proyecto."
          />
        </p>
      </div>
      <button
        type="button"
        className={CSS_HANDLES[2]}
        onClick={handleClose}
        aria-label={intl.formatMessage({
          id: "form/form.feedback.ariaLabel",
          defaultMessage: "Cerrar modal"
        })}
      >
      <Close color="#EAAB5E" />
    </button>
      <button
        type="button"
        onClick={handleClose}
        className={CSS_HANDLES[4]}
      >
        <FormattedMessage
          id="form/form.feedback.closeButton"
          defaultMessage="Cerrar"
        />
      </button>
    </div>
  )
}
export default Feedback
