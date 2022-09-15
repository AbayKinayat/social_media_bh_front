import React from 'react'
import { Col, Row } from 'react-grid-system';
import { Button, Input, InputPassword } from '../../components'
import { useAppSelector } from '../../hooks';

const LoginForm: React.FC = () => {

    const { authLoading, authSuccess } = useAppSelector(state => state.auth);

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
                        loading={authLoading}
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