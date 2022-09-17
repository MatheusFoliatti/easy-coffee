import React from 'react'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Input from '../../components/atoms/Input'
import Paper from '../../components/atoms/Paper'

const Home = () => (
  <Container fullHeight fullCentered>    
    <Paper>
      <h1>Home</h1>
      <p> Random Text Lorem Ipsum</p>

      <Button>
        Login
      </Button> 
      <Input/>

    </Paper>

  </Container>
)

export default Home