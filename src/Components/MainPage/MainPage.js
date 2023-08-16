import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../hooks/useForm'

function MainPage() {

  const { form, onchangeInputs, clearInputs } = useForm({

    nome: "",
    modulos: "",
    tecnolofias: "",
    responsavel: "",
  })

  // regex "^(?!1$|2$)\d+$)" valor acima de 2
  // "^(?:[3-9]|1\d|2\d)$"

  console.log(form)

  const enviarCadastro = (e) => {
    e.preventDefault()
    if (form.modulos > 2 && form.responsavel.length > 5) {
      clearInputs()
      alert("Cadastro realizado com sucesso")
    } else {
      alert('Revise o número de módulos ou a quantidade de letras no campo responsavel')
    }
  }

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={enviarCadastro}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          name='nome'
          id="nome"
          value={form.nome}
          onChange={onchangeInputs}
          placeholder='Digite o nome do curso'
          type='text'
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          name='modulos'
          id="modulos"
          value={form.modulos}
          onChange={onchangeInputs}
          type='number'
          placeholder='Número de Módulos'
          pattern=""
          required
          min={3}
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          name='tecnologias'
          id="tecnologias"
          value={form.tecnologias}
          onChange={onchangeInputs}
          placeholder='Tecnologias abordadas'
          type='text'
          required
        />

        <label htmlFor="responsavel">Responsável: </label>
        <Input
          name='responsavel'
          id="responsavel"
          value={form.responsavel}
          onChange={onchangeInputs}
          type='text'
          required
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
