import React from 'react'
import { Col, Row } from 'react-grid-system'

import { Button, Input, InputPassword } from '../../components'

const RegistrationForm: React.FC = () => {
  const onSubmit = () => {

  }

  return (
    <form onSubmit={onSubmit} >
      <Row>
        <Col xs={6} style={{ marginBottom: 20 }}>
          <Input
            label="Фамилия"
            name="lastName"
          />
        </Col>
        <Col xs={6} style={{ marginBottom: 20 }}>
          <Input
            label="Имя"
            name="firstName"
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <Input
            label="Электронная почта"
            name="email"
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <InputPassword
            label="Пароль"
            name="email"
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <InputPassword
            label="Повторите пароль"
            name="email"
          />
        </Col>
        <Col xs={12}>
          <Button
            btnsize="large"
            block
            type='submit'
          >
            Зарегистрироваться
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default RegistrationForm