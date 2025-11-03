import type React from 'react'
import { memo } from 'react'
import * as LazyComponents from './lazyComponents'



interface FormContentProps {
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
formHook: any
}

const FormContent = memo(({ formHook }: FormContentProps) => {

  return (
    <LazyComponents.FormLeadsModal

      handleClose={formHook.handleClose}
      onModalClose={formHook.handleClose}
      isOpen={formHook.formState.isOpen}
    >
      <LazyComponents.FormFields
        formData={formHook.formData}
        errors={formHook.errors}
        createChangeHandlers={formHook.createChangeHandlers}
        createInputClickHandler={formHook.createInputClickHandler}
        handleBlur={formHook.handleBlur}
        handleSubmit={formHook.handleSubmit}
        isValidFormToSubmit={formHook.isValidFormToSubmit}
        formState={formHook.formState}
        key={'ARG'} // Agregar la clave aquí para forzar la re-renderización
      />
    </LazyComponents.FormLeadsModal>
  )
})

FormContent.displayName = 'FormContent'

export default FormContent