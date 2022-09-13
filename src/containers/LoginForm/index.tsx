import React from 'react'
import { Col, Row } from 'react-grid-system';
import { Button, Input, InputPassword } from '../../components'

const LoginForm: React.FC = () => {

    const onSubmit = () => {
        
    }

    return (
        <form>
            <Row>
                <Col xs={12} style={{ marginBottom: 20 }}>
                    <Input
                        label="Электронная почта"
                    />
                </Col>
                <Col xs={12} style={{ marginBottom: 20 }}>
                    <InputPassword
                        label="Пароль"
                    />
                </Col>
                <Col xs={12}>
                    <Button
                        btnsize="large"
                        block
                    >
                        Авторизация
                    </Button>
                </Col>
            </Row>
        </form>
    )
}

export default LoginForm