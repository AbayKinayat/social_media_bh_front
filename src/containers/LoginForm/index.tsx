import type { FC } from 'react'
import { Col, Row } from 'react-grid-system';
import { useNavigate } from 'react-router-dom';
import { Button, Input, InputPassword } from '../../components'
import { useAppSelector, useLogin } from '../../hooks';

const LoginForm: FC = () => {

    const { authLoading, authSuccess } = useAppSelector(state => state.auth);
    const [formik] = useLogin();
    const navigate = useNavigate();

    if (authSuccess)
        navigate("/")

    return (
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <Col xs={12} style={{ marginBottom: 20 }}>
                    <Input
                        label="Электронная почта"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
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
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Col>
                <Col xs={12}>
                    <Button
                        btnsize="large"
                        loading={authLoading}
                        block
                        type="submit"
                    >
                        Авторизация
                    </Button>
                </Col>
            </Row>
        </form>
    )
}

export default LoginForm