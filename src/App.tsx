import React from 'react'

import { Header } from './components/Header'
import { SideBar } from './components/SideBarItem'
import { FormStep1 } from './container/FormStep1'

import { useForm } from './contexts/FormContext'

import * as C from './styles'

const App = () => {
  const {
    state: { currentStep },
  } = useForm()

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <SideBar />
          {currentStep === 1 && <FormStep1 />}
        </C.Steps>
      </C.Area>
    </C.Container>
  )
}

export default App
