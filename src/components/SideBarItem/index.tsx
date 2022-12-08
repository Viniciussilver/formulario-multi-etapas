import * as C from './styles'

import Profile from '../../assets/profile.svg'
import Book from '../../assets/book.svg'
import Mail from '../../assets/mail.svg'

import { useForm } from '../../contexts/FormContext'

export const SideBar = () => {
  const {
    state: { currentStep },
  } = useForm()
  return (
    <C.Container>
      <C.ContainerItem>
        <div className='box-description'>
          <h4>Pessoal</h4>
          <p>Se identifique</p>
        </div>
        <C.BoxImg isActive={true}>
          <img src={Profile} />
        </C.BoxImg>
        <C.Point isActive={true}></C.Point>
      </C.ContainerItem>
      <C.ContainerItem>
        <div className='box-description'>
          <h4>Profissional</h4>
          <p>Seu nível</p>
        </div>
        <C.BoxImg isActive={currentStep >= 2}>
          <img src={Book} />
        </C.BoxImg>
        <C.Point isActive={currentStep >= 2}></C.Point>
      </C.ContainerItem>
      <C.ContainerItem>
        <div className='box-description'>
          <h4>Contatos</h4>
          <p>Como te chamar</p>
        </div>
        <C.BoxImg isActive={currentStep === 3}>
          <img src={Mail} />
        </C.BoxImg>
        <C.Point isActive={currentStep >= 2}></C.Point>
      </C.ContainerItem>
    </C.Container>
  )
}
