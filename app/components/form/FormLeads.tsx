'use client'

import type React from 'react'
import { Suspense, useState, useEffect } from 'react'

import * as LazyComponents from './components/lazyComponents'
import { STATUS } from './typings/interfaces'
import { useFormLead } from './config/useFormLead'
import { useErrorMessage } from './hook/useErrorMessage'
import './FormLeads.css'
import FormContent from './components/FormContent'
import LoadingFallback from './components/LoadingFallback'
import { Feedback } from './components/lazyComponents'
import { DEFAULT_PROPS } from './constants/initialState'
import { FORM_FIELDS } from './constants'

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  try {
    return <>{children}</>
  } catch (error) {
    console.error('Error en FormLeads:', error)
    return <div>Error al cargar el formulario</div>
  }
}

const CSS_HANDLES = [
  'formLeadBannerContainerArg',
  'popupStyles',
  'popupContentStyles',
] as const

const FormLeads: React.FC= () => {

  const { getErrorMessage } = useErrorMessage()
  const formHook = useFormLead(FORM_FIELDS, getErrorMessage)
  

  const renderContent = () => {
    if (formHook.formState.status === STATUS.FINISH) {
      return (
        <Feedback
          handleClose={formHook.handleClose}
          response={formHook.formResponse}
        />
      )
    }

    return (
      <FormContent
        formHook={formHook}
      />
    )
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className={CSS_HANDLES[0]}>
        <Suspense fallback={<LoadingFallback />}>
          <LazyComponents.ContainerForm handleOpen={formHook.handleOpen} />
        </Suspense>
        {formHook.formState.isOpen && (
          <div className={CSS_HANDLES[1]}>
            <div className={CSS_HANDLES[2]}>
              <Suspense fallback={<LoadingFallback />}>
                <ErrorBoundary>{renderContent()}</ErrorBoundary>
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default FormLeads
