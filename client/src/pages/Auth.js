import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useLocation, NavLink, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const actionUser = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            history(SHOP_ROUTE);
        } catch (e){
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: 'calc(100vh - 54px)'}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        placeholder="Введите ваш email..."
                        className="mt-3"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        placeholder="Введите ваш пароль..."
                        className="mt-3"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row>
                        <div className="d-flex align-items-center justify-content-between mt-3 flex-row">
                            {isLogin ?
                                <div className="d-flex gap-2" style={{width: 'auto'}}>
                                    Нет аккаунта? <NavLink className="link-form" to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                                </div>
                                :
                                <div className="d-flex gap-2" style={{width: 'auto'}}>
                                    Есть аккаунт? <NavLink className="link-form" to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }

                            <Button
                                className="btn-purple"
                                style={{width: 'auto'}}
                                variant={"outline-success"}
                                onClick={actionUser}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Card>

        </Container>
    );
});

export default Auth;