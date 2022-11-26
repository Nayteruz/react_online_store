import "./styles.css"
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useContext, useEffect, useState} from "react";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            check().then(data=>{
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(()=> setLoading(false))
        }, 1)

    }, [])

    if (loading){
        return (
            <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
                <Spinner animation={"grow"} style={{width:'25vw', height:'25vw'}}/>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
