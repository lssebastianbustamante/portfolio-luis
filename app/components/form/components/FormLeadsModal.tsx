import type React from 'react'

import { Close } from './icons'


import { FormattedMessage } from 'react-intl'

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
            id="form/modal.title"
            defaultMessage="Title"
          />
        </h2>
        <button
          type="button"
          className={CSS_HANDLES[3]}
          onClick={handleClose}
          aria-label="Cerrar modal"
        >
          <Close/>
        </button>
        <p className={CSS_HANDLES[4]}>
          <FormattedMessage
            id="form/modal.subTitle"
            defaultMessage="Subtitle"
          />
        </p>
      </div>

      {children}
    </div>
  )
}

export default FormLeadsModal
