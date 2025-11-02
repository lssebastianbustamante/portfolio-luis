import type React from 'react'
import { useState, useCallback } from 'react'


import type { FormData, FormErrors, FormState, SelectOption } from '../typings/interfaces'
import { STATUS } from '../typings/interfaces'

import { updateFieldError, validateRequiredFields } from '../utils'


import type { ValidationErrorType } from '../hook/useErrorMessage'
import { useErrorMessage } from '../hook/useErrorMessage'

import { FORM_FIELDS_ARG, FORM_FIELDS_COL, initialStateFields, REQUIRED_FIELDS_ARG, REQUIRED_FIELDS_COL, REQUIRED_FIELDS_PE } from '../constants'
import { CountryCode } from '../constants/initialState'
type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
type SelectChangeHandler = (option: SelectOption) => void;
type HandleInvalid = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => void
interface FieldChangeHandlers {
    inputchange: InputChangeHandler;
    selectchange: SelectChangeHandler;
    handleInvalid: HandleInvalid
}

// Definición de tipos para los manejadores
interface InputClickHandlers {
    handleInputClick: (name: string) => (e: React.MouseEvent<HTMLInputElement>) => void;
}

const ERROR_DEFAULT = {
    message: '',
    error: ''
}

export interface FormLeadConfig {
    canonicalUrl: string;
    dataEntity: string;
    country: CountryCode;
}

const isValidCountry = (country: string): country is CountryCode => {
    return ['ARG', 'COL', 'PER'].includes(country);
};




export const useFormLead = (
    { canonicalUrl,
        dataEntity,
        country = 'ARG' }: FormLeadConfig
) => {



    const { getErrorMessage } = useErrorMessage()
    const [formState, setFormState] = useState<FormState>({
        isSubmitting: false,
        hasSubmitted: false,
        isOpen: false,
        status: STATUS.IDLE
    })

    if (!isValidCountry(country)) {
        throw new Error(`Invalid country code: ${country}`)
    }

    const [formData, setFormData] = useState<FormData>(initialStateFields[country])
    const [errors, setErrors] = useState<FormErrors>(ERROR_DEFAULT)

    const handleOpen = useCallback(() => {
        window.location.hash = canonicalUrl
        setFormState((prev: FormState) => ({ ...prev, isOpen: true }))
    }, [canonicalUrl])

    const resetForm = () => {
        setFormState({
            isSubmitting: false,
            hasSubmitted: false,
            isOpen: false,
            status: STATUS.IDLE
        });

        setFormData(initialStateFields[country] as unknown as FormData);

        setErrors(ERROR_DEFAULT);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const handleClose = useCallback(() => {
        resetForm()
        window?.history.pushState(
            null,
            document.title,
            window.location.pathname + window.location.search
        )
    }, [])



    const handleBlur = useCallback((fieldName: string) => () => {
        if (!formData[fieldName as keyof typeof formData]) {
            setErrors((prev: FormErrors) => ({
                ...prev,
                error: prev.error,
                message: prev.message,
                [fieldName]: ''
            }));
        } else {
            setErrors((prev: FormErrors) => {
                const { [fieldName]: _, ...rest } = prev;
                return {
                    ...rest,
                    error: prev.error,
                    message: prev.message,
                    [fieldName]: ''
                };
            });
        }
    }, [formData]);

    const validateAndUpdateField = useCallback((
        fieldName: string,
        _value: string,
        validity?: ValidityState
    ) => {
        const fields = country === 'ARG' ? FORM_FIELDS_ARG : country === 'COL' ? FORM_FIELDS_COL : country === 'PER' ? FORM_FIELDS_COL : FORM_FIELDS_ARG

        if (!validity) {
            return true
        }

        const field = fields.find(f => f.name === fieldName)
        const { maxLength, minLength } = field as { maxLength?: number; minLength?: number }
        let errorType: ValidationErrorType | undefined
        const params = { min: minLength, max: maxLength }

        if (validity.valueMissing) {
            errorType = 'required'
        } else if (validity.rangeOverflow) {
            errorType = 'rangeOverflow'
        } else if (validity.rangeUnderflow) {
            errorType = 'rangeUnderflow'
        } else if (validity.tooShort) {
            errorType = 'minLength'
        } else if (validity.tooLong) {
            errorType = 'maxLength'
        } else if (validity.typeMismatch || validity.patternMismatch) {
            errorType = 'pattern'
        }

        const message = errorType ? getErrorMessage(fieldName, errorType, params) : ''

        setErrors((prev: FormErrors) => updateFieldError(prev, fieldName, message))

        return !message
    }, [getErrorMessage, country])

    const createChangeHandlers = useCallback(
        (fieldName: string): FieldChangeHandlers => ({
            inputchange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const { value, validity } = e.target

                setFormData((prev: FormData) => ({ ...prev, [fieldName]: value }))
                validateAndUpdateField(fieldName, value, validity)
            },
            selectchange: (option: SelectOption | null) => {
                // Si la opción es null, limpiar el campo
                if (!option) {
                    setFormData((prev: FormData) => ({ ...prev, [fieldName]: '' }))
                    setErrors((prev: FormErrors) => ({ ...prev, [fieldName]: '' }))
                    return
                }

                const value = option.value
                if (!value) return

                setFormData((prev: FormData) => ({ ...prev, [fieldName]: value }))
                validateAndUpdateField(fieldName, value)

                setErrors((prev: FormErrors) => updateFieldError(prev, fieldName, ''))
            },
            handleInvalid: (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                e.preventDefault()
                validateAndUpdateField(
                    fieldName,
                    e.target.value,
                    e.target.validity
                )
            }
        }),

        [validateAndUpdateField]
    )

    const createInputClickHandler = useCallback(
        (): InputClickHandlers => ({
            handleInputClick: (_name: string) => (_e: React.MouseEvent<HTMLInputElement>) => {
                // No-op: ya no se maneja tyc
            }
        }),
        []
    );

    const isValidFormToSubmit = useCallback((): boolean => {
        const phoneField = country === 'ARG' ? 'telefono' : 'celular'
        const requiredFields = new Set<string>(['nombre', 'email', phoneField])
        const requiredFieldsValid = Array.from(requiredFields).every((fieldName: string) => {
            const value = formData[fieldName as keyof typeof formData]
            const hasValue = Boolean(value)
            const hasNoError = !errors[fieldName]
            return hasValue && hasNoError
        })
        return requiredFieldsValid &&
            !formState.isSubmitting &&
            !formState.hasSubmitted
    }, [formData, errors, formState, country])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formState.hasSubmitted || formState.isSubmitting) return

        const phoneField = country === 'ARG' ? 'telefono' : 'celular'
        const requiredFields = new Set<string>(['nombre', 'email', phoneField])

        const sanitizedFormData = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [key, value ?? ''])
        ) as Record<string, string>;

        const validationResult = validateRequiredFields(sanitizedFormData, Array.from(requiredFields))

        if (!validationResult.isValid) {
            setErrors((prev: FormErrors) => ({
                ...prev,
                submit: 'Por favor, completa todos los campos obligatorios.',
            }))
            return
        }

        // Validar cada campo individualmente
        const isValid = Array.from(requiredFields).every((field: string) =>
            validateAndUpdateField(field, formData[field as keyof typeof formData] as string)
        )
        console.log('Validación de campos:', isValid)
        // Validar el formulario completo
        console.log('Validación del formulario:', isValidFormToSubmit())
        if (!isValid) {
            setErrors((prev: FormErrors) => ({
                ...prev,
                submit: 'Por favor, completa todos los campos obligatorios.'
            }))
            return
        }

        try {
            setFormState((prev: FormState) => ({
                ...prev,
                isSubmitting: true,
                status: STATUS.LOADING
            }))

            let finalResponse: Response | null = null
            const maxRetries = 2
            for (let attempt = 0; attempt <= maxRetries; attempt++) {
                const controller = new AbortController()
                const timeoutId = setTimeout(() => controller.abort(), 15000)
                try {
                    const response = await fetch(`https://luis-platzi.app.n8n.cloud/webhook/portfolio-form`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json, text/plain, */*'
                        },
                        body: JSON.stringify({
                            email: (formData as any).email ?? '',
                            nombre: (formData as any).nombre ?? '',
                            telefono: (formData as any).telefono ?? '',
                            mensaje: (formData as any).mensaje ?? '',
                            createdAt: new Date().toISOString(),
                            source: 'portfolio-contact-form'
                        }),
                        signal: controller.signal
                    })
                    clearTimeout(timeoutId)
                    if (response.ok) {
                        finalResponse = response
                        break
                    }
                    if (attempt === maxRetries) {
                        throw new Error('Error al enviar el formulario')
                    }
                } catch (err) {
                    clearTimeout(timeoutId)
                    if (attempt === maxRetries) {
                        throw err
                    }
                }
            }

            if (!finalResponse) {
                throw new Error('Error al enviar el formulario')
            }

            let parsed: unknown = null
            const raw = await finalResponse.text()
            try {
                parsed = raw ? JSON.parse(raw) : null
            } catch {
                parsed = raw
            }
            
            setFormState((prev: FormState) => ({
                ...prev,
                hasSubmitted: true,
                status: STATUS.FINISH
            }))
            
        } catch (error) {
            console.error('Error:', error)
            setFormState((prev: FormState) => ({ ...prev, status: STATUS.ERROR }))
        } finally {
            setFormState((prev: FormState) => ({ ...prev, isSubmitting: false }))
        }
    }

    // Efecto de reseteo de distrito eliminado: ya no existen provincia/distrito

    return {
        formData,
        formState,
        errors,
        createChangeHandlers,
        handleBlur,
        handleOpen,
        handleClose,
        handleSubmit,
        isValidFormToSubmit,
        resetForm,
        createInputClickHandler
    }
}

