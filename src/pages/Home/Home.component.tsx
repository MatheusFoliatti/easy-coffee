import React from 'react'
import { useState } from 'react'

import * as UserService from '../../services/Users'

import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Input from '../../components/atoms/Input'
import {useUser} from '../../context/User'

const Home = () => {
  const {state, dispatch} = useUser()
  const [cpf, setCpf] = useState<string>('')
  console.log(state)
  const handleSubmit = (cpf: string) => {
    UserService.getByCpf(cpf)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'ADD_USER',
          payload: response,
        })
      })
  }
  
  return (
    <Container 
      fullHeight
      fullCentered
    >
      <Paper>
        <Typography>Bem Vindo!</Typography>
        <Input 
          type='text'
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <br/>
        <Button
          type='button'
          onClick={() => handleSubmit(cpf)}
        >
          Entrar
        </Button>
      </Paper>
    </Container>
  )}

export default Home