'use client'

import type React from 'react'
import { Suspense, useState, useEffect } from 'react'

import * as LazyComponents from './components/lazyComponents'
import type { LeadRegisterPropsArg } from './typings/interfaces'
import { STATUS } from './typings/interfaces'
import { useFormLead } from './config/useFormLead'
import { schemaForm } from './schema/schemaForm'
import './FormLeads.css'
import FormContent from './components/FormContent'
import LoadingFallback from './components/LoadingFallback'
import { Feedback } from './components/lazyComponents'
import { CountryCode, DEFAULT_PROPS, loadDistricts } from './constants/initialState'

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
  canonicalUrl = DEFAULT_PROPS.canonicalUrl,
  tiposDeNegocio = DEFAULT_PROPS.tiposDeNegocio
}: LeadRegisterPropsArg) => {
  const [country] = useState<CountryCode>('ARG') // Si solo usas ARG, puedes dejarlo fijo

  const formHook = useFormLead({ canonicalUrl, dataEntity, country })
  const [dataDistricts, setDataDistricts] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        setIsLoading(true)
        const districts = await loadDistricts(country)
        setDataDistricts(districts)
      } catch (error) {
        console.error('Error cargando distritos:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDistricts()
  }, [country])

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

    if (isLoading) {
      return <LoadingFallback />
    }

    return (
      <FormContent
        formHook={formHook}
        tiposDeNegocio={tiposDeNegocio}
        currentCountry={country}
        dataDistricts={dataDistricts}
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
