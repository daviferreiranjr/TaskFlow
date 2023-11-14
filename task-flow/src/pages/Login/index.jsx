import { Container, Content } from "./styles"
import SignImage from '../../assets/taskFlow.avif'
import { Input } from "../../components/Input"
import { Link, useNavigate} from  'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify';

export const Login = () =>{

const navigate = useNavigate(); 
 
const handleNavigateDashboard = () => {
        navigate('/dashboard');
}

 const schema = yup.object().shape({
        username: yup.string().required('Campo obrigatório!'),
        password: yup.string().required('Por favor, insira sua senha')
 })

 const { 
   register, 
   handleSubmit, 
   formState: { errors },
  } = useForm({
        resolver: yupResolver(schema),
  })

  const onSubmitFunction = ({ username, password }) => {
        const user = { username, password }
        api.post('Auth', user)
        .then((response) => {
        const { token } = response.data
        localStorage.setItem('@TaskFlow:token', token)
        toast.success('Logado com sucesso')
        handleNavigateDashboard()
        })
        .catch(() => toast.error('Erro logar na conta. Tente novamente!'))
  }
    
    return(
    <Container>
      <Content>
        <img src={SignImage} alt="imageTaskFlow" />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>Login</h1>
                <Input register={register} name='username' error={errors.username?.message} icon={FiUser} label='Usuário' placeholder= 'Seu nome de usuário aqui'/>
                <Input register={register} name='password' error={errors.password?.message} icon={FiLock} label='Senha' placeholder= 'Uma senha bem segura' type='password'/>
                <button type="submit">Entrar</button>
                <p>Não tem uma conta? Faça seu <Link to='/register'>registro</Link></p>
        </form>
      </Content>
    </Container>
    )
}