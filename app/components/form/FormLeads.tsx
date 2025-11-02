'use client'

import type React from 'react'
import { Suspense, useState } from 'react'

import * as LazyComponents from './components/lazyComponents'
import type { LeadRegisterPropsArg } from './typings/interfaces'
import { STATUS } from './typings/interfaces'
import { useFormLead } from './config/useFormLead'
import { schemaForm } from './schema/schemaForm'
import './FormLeads.css'
import FormContent from './components/FormContent'
import LoadingFallback from './components/LoadingFallback'
import { Feedback } from './components/lazyComponents'
import { CountryCode, DEFAULT_PROPS } from './constants/initialState'

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

const FormLeads = ({
  dataEntity,
  canonicalUrl = DEFAULT_PROPS.canonicalUrl
}: LeadRegisterPropsArg) => {
  const [country] = useState<CountryCode>('ARG') // Si solo usas ARG, puedes dejarlo fijo

  const formHook = useFormLead({ canonicalUrl, dataEntity, country })
  const [isLoading] = useState(false)

  const renderContent = () => {
    if (formHook.formState.status === STATUS.FINISH) {
      return (
        <Feedback
          handleClose={formHook.handleClose}
          title="store/form.feedback.title"
          text="store/form.feedback.text"
        />
      )
    }

    return (
      <FormContent
        formHook={formHook}
        currentCountry={country}
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

FormLeads.schema = schemaForm

export default FormLeads
