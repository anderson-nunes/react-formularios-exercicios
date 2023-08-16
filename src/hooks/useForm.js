import { useState } from "react"


const useForm = (inicialState) => {

  const [form, setForm] = useState(inicialState)

  const onchangeInputs = (event) => {

    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const clearInputs = () => {
    setForm(inicialState)
  }

  return { form, onchangeInputs, clearInputs }
}

export default useForm