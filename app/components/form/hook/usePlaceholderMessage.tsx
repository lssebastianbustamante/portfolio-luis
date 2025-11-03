import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  placeHolderName: {
    id: 'form/form.placeholder.nombre',
    defaultMessage: 'Nombre'
  },
  placeHolderPhone: {
    id: 'form/form.placeholder.telefono',
    defaultMessage: 'Teléfono'
  },
  placeHolderEmail: {
    id: 'form/form.placeholder.email',
    defaultMessage: 'Email'
  },
  placeHolderCelphone: {
    id: 'form/form.placeholder.celular',
    defaultMessage: 'Celular'
  },
  placeHolderMessage: {
    id: 'form/form.placeholder.mensaje',
    defaultMessage: 'Ingrese su mensaje'
  }
})

export const usePlaceholderMessage = (fieldName: string) => {
  const intl = useIntl()
  if (!fieldName) return ''
  switch (fieldName) {
    case 'nombre':
      return intl.formatMessage(messages.placeHolderName)
        case 'telefono':
      return intl.formatMessage(messages.placeHolderPhone)
    case 'email':
      return intl.formatMessage(messages.placeHolderEmail)
      case 'celular':
      return intl.formatMessage(messages.placeHolderCelphone)
    case 'mensaje':
      return intl.formatMessage(messages.placeHolderMessage)
    default:
      return ''
  }
}