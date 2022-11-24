import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'#fff'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color:'#fff', gap:'10px'}}>
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button variant={'outline-light'}>Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'#fff'}}>
                        <Button onClick={() => user.setIsAuth(true)} variant={'outline-light'}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;