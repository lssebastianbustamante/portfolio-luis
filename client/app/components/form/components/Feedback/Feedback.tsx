import type React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

import { Close } from '../icons'


 const messages = defineMessages({
  feedbackTitle: {
    id: 'form/feedback.title',
    defaultMessage: 'Title'
  },
  feedbackText: {
    id: 'form/feedback.text',
    defaultMessage: 'Subtitle'
  },
  modalCloseButton: {
    id: 'form/modal.closeButton',
    defaultMessage: 'Cerrar'
  }
      })

interface FeedbackProps {
  handleClose: () => void
  title: string
  text: string
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
  text = messages.feedbackText.id,
  title = messages.feedbackTitle.id, 
   }) => {


  return (
    <div className={CSS_HANDLES[0]}>
      <h2 className={CSS_HANDLES[1]}>
        <FormattedMessage
          id={messages.feedbackTitle.id}
          defaultMessage="Title"
        />
      </h2>
      <button
        type="button"
        className={CSS_HANDLES[2]}
        onClick={handleClose}
        aria-label="Cerrar modal"
      >
        <Close color="#EAAB5E" />
      </button>
      <p className={CSS_HANDLES[3]}>
        <FormattedMessage
          id={messages.feedbackText.id}
          defaultMessage="Subtitle"
        />  
      </p>
      <button
        type="button"
        onClick={handleClose}
        className={CSS_HANDLES[4]}
      >
        <FormattedMessage
          id={messages.modalCloseButton.id}
          defaultMessage="Cerrar"
        />
      </button>
    </div>
  )
}
export default Feedback
