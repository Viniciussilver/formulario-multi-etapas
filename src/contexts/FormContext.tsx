import { createContext, ReactNode, useContext, useReducer } from 'react'

type FormProviderProps = {
  children: ReactNode
}

type State = {
  currentStep: number
  level: 0 | 1
  name: string
  email: string
  github: string
}

type Action = {
  type: string
  payload: any
}

const initialData: State = {
  currentStep: 1,
  level: 0,
  name: '',
  email: '',
  github: '',
}

type ContextType = {
  state: State
  dispatch: (action: Action) => void
}

const FormContext = createContext<ContextType | undefined>(undefined)

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setCurrentStep':
      return { ...state, currentStep: action.payload }
    case 'setName':
      return { ...state, name: action.payload }
    case 'setLevel':
      return { ...state, level: action.payload }
    case 'setEmail':
      return { ...state, email: action.payload }
    case 'setGithub':
      return { ...state, github: action.payload }
    default:
      return state
  }
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useForm = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('Deu merda!')
  }

  return context
}
