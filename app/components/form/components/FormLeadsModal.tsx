import type React from 'react'

import { Close } from './icons'


import { defineMessages, FormattedMessage } from 'react-intl'

interface FormLeadsModalProps {
  children: React.ReactNode
  isOpen: boolean
  handleClose: () => void
  onModalClose: () => void
}

const CSS_HANDLES = [
  'popupContentContainer',
  'popupContentHeader',
  'formLeadTitle',
  'formLeadButtonClose',
  'formLeadSubtitle'
] as const



      const messages = defineMessages({
        modalTitle: {
          id: 'form/modal.title',
          defaultMessage: 'Title',
        },
        modalSubtitle: {
          id: 'form/modal.subTitle',
          defaultMessage: 'Subtitle',
        },
      })

const FormLeadsModal: React.FC<FormLeadsModalProps> = ({
  children,
  isOpen,
  handleClose
}) => {

  if (!isOpen) return null

  return (
    <div className={CSS_HANDLES[0]}>
      <div className={CSS_HANDLES[1]}>
        <h2 className={CSS_HANDLES[2]}>
          <FormattedMessage
            id={messages.modalTitle.id}
            defaultMessage="Title"
          />
        </h2>
        <button
          type="button"
          className={CSS_HANDLES[3]}
          onClick={handleClose}
          aria-label="Cerrar modal"
        >
          <Close color="#EAAB5E" />
        </button>
        <p className={CSS_HANDLES[4]}>
          <FormattedMessage
            id={messages.modalSubtitle.id}
            defaultMessage="Subtitle"
          />
        </p>
      </div>

      {children}
    </div>
  )
}

export default FormLeadsModal
