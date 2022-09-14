import React from 'react'
import { Col, Row } from 'react-grid-system'

import { Button, Input, InputPassword } from '../../components'
import { useRegistration } from '../../hooks'

const RegistrationForm: React.FC = () => {

  const [formik] = useRegistration();

  return (
    <form onSubmit={formik.handleSubmit} >
      <Row>
        <Col xs={6} style={{ marginBottom: 20 }}>
          <Input
            label="Фамилия"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.lastName)}
            helperText={formik.errors.lastName}
          />
        </Col>
        <Col xs={6} style={{ marginBottom: 20 }}>
          <Input
            label="Имя"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.firstName)}
            helperText={formik.errors.firstName}
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <Input
            label="Электронная почта"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <InputPassword
            label="Пароль"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password}
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <InputPassword
            label="Повторите пароль"
            name="passwordRepeat"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.passwordRepeat)}
            helperText={formik.errors.passwordRepeat}
          />
        </Col>
        <Col xs={12}>
          <Button
            btnsize="large"
            type='submit'
            block
          >
            Зарегистрироваться
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default RegistrationForm