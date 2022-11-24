import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation, NavLink} from "react-router-dom";

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;


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
                    />
                    <Form.Control
                        placeholder="Введите ваш пароль..."
                        className="mt-3"
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
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Card>

        </Container>
    );
};

export default Auth;