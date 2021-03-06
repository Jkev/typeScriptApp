import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';


class App extends React.Component {
  public render(){
    return (
      <Container>
        <Card>
        <Title>Iniciar Sesión</Title>
        <Input placeholder='Correo' label='Correo' />
        <Input placeholder='Contraseña' label='Contraseña' />
        <Button>Enviar</Button>
        </Card>
      </Container>
      
    );
  }
  
}

export default App;
