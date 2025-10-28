import type React from 'react'
import { useState, useCallback, useEffect } from 'react'


import type { ArgentinaFormData, ColombiaFormData, FormData, FormErrors, FormState, PeruFormData, SelectOption } from '../typings/interfaces'
import { STATUS } from '../typings/interfaces'

import { updateFieldError, validateRequiredFields } from '../utils'


import type { ValidationErrorType } from '../hook/useErrorMessage'
import { useErrorMessage } from '../hook/useErrorMessage'

import { FORM_FIELDS_ARG, FORM_FIELDS_COL, initialStateFields, REQUIRED_FIELDS_ARG, REQUIRED_FIELDS_COL, REQUIRED_FIELDS_PE } from '../constants'
import { CountryCode, InitialStateFieldsInterface } from '../constants/initialState'






type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
type SelectChangeHandler = (option: SelectOption) => void;
type HandleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => void
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



interface AddressFormatter {
    [key: string]: (formData: FormData) => string;
}

class AddressFormattingError extends Error {
    constructor(country: string, message?: string) {
        super(`Error formateando dirección para ${country}: ${message}`);
        this.name = 'AddressFormattingError';
    }
}

const ADDRESS_FORMATTERS: AddressFormatter = {
    ARG: (formData: ArgentinaFormData) => {
        if (!('calle' in formData)) {
            throw new AddressFormattingError('Argentina', 'Formato de dirección no válido');
        }
        return `${formData.calle} ${formData.altura}, ${formData.localidad}, ${formData.provincia}, ${formData.codigoPostal}, Argentina`;
    },
    COL: (formData: ColombiaFormData) => {
        if (!('ciudad' in formData)) {
            throw new AddressFormattingError('Colombia', 'Formato de dirección no válido');
        }
        return `${formData.ciudad}, ${formData.provincia}, Colombia`;
    },
    PER: (formData: PeruFormData) => {
        if (!('distrito' in formData)) {
            throw new AddressFormattingError('Perú', 'Formato de dirección no válido');
        }
        return `${formData.distrito}, ${formData.provincia}, Perú`;
    }
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

        setFormData(initialStateFields[country] as InitialStateFieldsInterface[typeof country]);

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
            // Validación específica para selects
            const field = fields.find(f => f.name === fieldName)

            if (field?.type === 'select') {
                const isValid = _value && _value.length > 0
                if (!isValid) {
                    const message = getErrorMessage(fieldName, 'required')
                    setErrors((prev: FormErrors) => updateFieldError(prev, fieldName, message))
                    return false
                }
                // Limpiar error si es válido
                setErrors((prev: FormErrors) => updateFieldError(prev, fieldName, ''))
                return true
            }
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
            inputchange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const { value, validity } = e.target

                setFormData((prev: FormData) => ({ ...prev, [fieldName]: value }))
                validateAndUpdateField(fieldName, value, validity)
            },
            selectchange: (option: SelectOption | null) => {
                // Si la opción es null, limpiar los campos relacionados
                if (!option) {
                    if (fieldName === 'provincia') {
                        setFormData((prev: FormData) => ({
                            ...prev,
                            provincia: '',
                            distrito: ''
                        }))
                        // Limpiar errores relacionados
                        setErrors((prev: FormErrors) => ({
                            ...prev,
                            provincia: '',
                            distrito: ''
                        }))
                    } else {
                        setFormData((prev: FormData) => ({ ...prev, [fieldName]: '' }))
                        setErrors((prev: FormErrors) => ({ ...prev, [fieldName]: '' }))
                    }
                    return
                }

                const value = option.value
                if (!value) return

                if (fieldName === 'provincia') {
                    setFormData((prev: FormData) => ({
                        ...prev,
                        provincia: value,
                        distrito: '' // Resetear distrito
                    }))
                    validateAndUpdateField('provincia', value)
                } else {
                    setFormData((prev: FormData) => ({ ...prev, [fieldName]: value }))
                    validateAndUpdateField(fieldName, value)
                }

                setErrors((prev: FormErrors) => updateFieldError(prev, fieldName, ''))
            },
            handleInvalid: (e: React.InvalidEvent<HTMLInputElement>) => {
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
            handleInputClick: (name: string) => (e: React.MouseEvent<HTMLInputElement>) => {
                const target = e.currentTarget;
                if (name === 'tyc') {
                    const newValue = target.value === 'false' ? 'true' : 'false';
                    setFormData((prev: FormData) => ({
                        ...prev,
                        [name]: newValue // Ahora manejamos tyc como string
                    }));
                }
            }
        }),
        []
    );

    const isValidFormToSubmit = useCallback((): boolean => {
        const requiredFields = country === 'ARG'
            ? REQUIRED_FIELDS_ARG
            : country === 'COL'
                ? REQUIRED_FIELDS_COL
                : country === 'PER'
                    ? REQUIRED_FIELDS_PE
                    : REQUIRED_FIELDS_ARG

        // Verificar específicamente provincia y distrito cuando corresponda
        const validateField = (fieldName: string) => {
            const value = formData[fieldName as keyof typeof formData]
            const hasValue = Boolean(value)
            const hasNoError = !errors[fieldName]

            if (fieldName === 'distrito' && country === 'PER') {
                return formData.provincia ? (hasValue && hasNoError) : true
            }

            return hasValue && hasNoError
        }

        const requiredFieldsValid = requiredFields.every(validateField)
        const termAndConditions = formData.tyc === 'true'; // Comparamos strings

        return requiredFieldsValid &&
            !formState.isSubmitting &&
            !formState.hasSubmitted &&
            termAndConditions
    }, [formData, errors, formState, country])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formState.hasSubmitted || formState.isSubmitting) return

        const requiredFields = country === 'ARG' ? REQUIRED_FIELDS_ARG : country === 'COL' ? REQUIRED_FIELDS_COL : country === 'PER' ? REQUIRED_FIELDS_PE : REQUIRED_FIELDS_ARG

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
        const isValid = requiredFields.every((field: string) =>
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

            // Enviar a tu API Express a través de rewrites (Next.js)
            const response = await fetch(`/api/express/api/v1/leads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    createdAt: new Date().toISOString(),
                    source: 'portfolio-contact-form'
                })
            })

            if (!response.ok) {
                throw new Error('Error al enviar el formulario')
            }

            const result = await response.json()
            
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

    useEffect(() => {
        if (country === 'PER' && !formData.provincia) {
            setFormData((prev: FormData) => ({ ...prev, distrito: '' }))
        }
    }, [country, formData.provincia])

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

