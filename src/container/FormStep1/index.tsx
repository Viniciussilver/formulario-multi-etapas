import React from 'react'

import * as C from './styles'

export const FormStep1 = () => {
  return (
    <C.Container>
      <div className='info'>
        <p>Passo 1/3</p>

        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abixo com seu nome</p>
      </div>

      <label>
        Seu nome completo
        <input type='text' />
      </label>

      <button>Próximo</button>
    </C.Container>
  )
}
