import type React from 'react'
import { FormattedMessage } from 'react-intl'
import { DEFAULT_PROPS } from '../constants/initialState'


interface ContainerFormProps {
  handleOpen: () => void
}

const CSS_HANDLES = [
  'formLeadBannerContainerArg',
  'containerBlockInfoForm',
  'titleInfoForm',
  'subTitleInfoForm',
  'buttonOpenModal'
] as const

const ContainerForm: React.FC<ContainerFormProps> = ({
  handleOpen
}) => { 
  

  
  return (
  <div
    className={CSS_HANDLES[0]}
    style={{ backgroundColor: DEFAULT_PROPS.backgroundContainer || '#e95b2f' }}
  >
    <div className={CSS_HANDLES[1]}>
      <p className={CSS_HANDLES[2]}>
        <FormattedMessage
          id='form/container.title'
          defaultMessage="¡Hola! Soy un desarrollador web con experiencia en React y TypeScript."
        />
      </p>
      <p className={CSS_HANDLES[3]}>
        <FormattedMessage
          id='form/container.subtitle'
          defaultMessage="Por favor, complete el formulario y me pondré en contacto contigo lo antes posible."
        />
      </p>
      <button
        type="button"
        className={CSS_HANDLES[4]}
        onClick={handleOpen}
      >
        <FormattedMessage
          id='form/container.textButton'
          defaultMessage="Contactame"
        />
      </button>
    </div>
  </div>
)
}
export default ContainerForm