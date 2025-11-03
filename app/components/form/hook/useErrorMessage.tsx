import { useIntl } from 'react-intl'
import { useCallback } from 'react'

export type ValidationErrorType =
  | 'required'
  | 'pattern'
  | 'minLength'
  | 'maxLength'
  | 'typeMismatch'
  | 'rangeOverflow'
  | 'rangeUnderflow'
  | 'selectEmpty'

export const useErrorMessage = () => {
  const intl = useIntl();

  const getErrorMessage = useCallback(
    (
      fieldName: string,
      errorType?: ValidationErrorType,
      params?: { min?: number; max?: number; value?: string }
    ): string => {
      if (!fieldName || !errorType) return '';
      // Errores required (incluyendo tyc)
      if (errorType === 'required') {
        return intl.formatMessage(
          { id: 'form/form.error.required' },
          { fieldName: intl.formatMessage({ id: `form/form.label.${fieldName}`, defaultMessage: fieldName }) }
        );
      }

      // Errores de select vacío
      if (errorType === 'selectEmpty') {
        return intl.formatMessage(
          { id: 'form/form.error.selectEmpty' },
          { fieldName: intl.formatMessage({ id: `form/form.label.${fieldName}`, defaultMessage: fieldName }) }
        );
      }

      // Errores de longitud mínima/máxima
      if (errorType === 'minLength') {
        console.log( errorType        )
        return intl.formatMessage(
          { id: 'form/form.error.minLength' },
          {
            fieldName: intl.formatMessage({ id: `form/form.label.${fieldName}`, defaultMessage: fieldName }),
            minLength: params?.min
          }
        );
      }
      if (errorType === 'maxLength') {
        return intl.formatMessage(
          { id: 'form/form.error.maxLength' },
          {
            fieldName: intl.formatMessage({ id: `form/form.label.${fieldName}`, defaultMessage: fieldName }),
            max: params?.max
          }
        );
      }

      // Errores de overflow/underflow específicos
      if (errorType === 'rangeOverflow') {
        return intl.formatMessage(
          { id: `form/form.error.${fieldName}.rangeOverflow` },
          {
            fieldName: intl.formatMessage({ id: `form/form.label.${fieldName}`, defaultMessage: fieldName }),
            min: params?.min,
            max: params?.max
          }
        );
      }
      if (errorType === 'rangeUnderflow') {
        return intl.formatMessage(
          { id: `form/form.error.${fieldName}.rangeUnderflow` },
          {
            fieldName: intl.formatMessage({ id: `form/form.label.${fieldName}`, defaultMessage: fieldName }),
            min: params?.min
          }
        );
      }

      // Errores de patrón o tipo
      if (errorType === 'pattern' || errorType === 'typeMismatch') {
        return intl.formatMessage(
          { id: `form/form.error.${fieldName}` },
          { fieldName: intl.formatMessage({ id: `form/form.label.${fieldName}`, defaultMessage: fieldName }) }
        );
      }

      // Fallback vacío
      return '';
    },
    [intl]
  );

  return { getErrorMessage, intl };
};
