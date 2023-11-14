import { Container, Content } from "./styles"
import { useNavigate } from 'react-router-dom'

export const Home = () =>{

const navigate = useNavigate(); 

const handleNavigateLogin = () => {
    navigate('/login');
}

const handleNavigateRegister = () => {
    navigate('/register');
}

return(
    <Container>
        <Content>
            <h1>Task Flow</h1>
            <span>Organize-se de forma fácil e rápida!</span>

            <div className="sign">
                <button onClick={() => handleNavigateLogin()}>Login</button>
                <button onClick={() => handleNavigateRegister()}>Cadastro</button>
            </div>
        </Content>
    </Container>
)



}