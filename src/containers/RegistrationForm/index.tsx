import React from 'react'
import { Col, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import { Button, Input, InputPassword } from '../../components'
import { useAppSelector, useRegistration } from '../../hooks'

const RegistrationForm: React.FC = () => {
  const { authLoading, authSuccess } = useAppSelector(state => state.auth);
  const navigate = useNavigate();

  if (authSuccess) // Оптимизация
    navigate("/")

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
            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Col>
        <Col xs={6} style={{ marginBottom: 20 }}>
          <Input
            label="Имя"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <Input
            label="Электронная почта"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <InputPassword
            label="Пароль"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Col>
        <Col xs={12} style={{ marginBottom: 20 }}>
          <InputPassword
            label="Повторите пароль"
            name="passwordRepeat"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.passwordRepeat && formik.errors.passwordRepeat)}
            helperText={formik.touched.passwordRepeat && formik.errors.passwordRepeat}
          />
        </Col>
        <Col xs={12}>
          <Button
            btnsize="large"
            type='submit'
            loading={authLoading}
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