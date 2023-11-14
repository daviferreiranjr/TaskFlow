import { Container, Content } from "./styles"
import SignImage from '../../assets/taskFlow.avif'
import { Input } from "../../components/Input"
import { Link, useNavigate } from  'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify';

export const Register = ({ authenticated }) =>{

const navigate = useNavigate(); 
 
const handleNavigateLogin = () => {
        navigate('/login');
};

const handleNavigateDashboard = () => {
  navigate('/dashboard');
};

 const schema = yup.object().shape({
        username: yup.string().required('Campo obrigatório!'),
        name: yup.string().required('Campo obrigatório!'),
        password: yup.string().min(8, 'Por favor, insira uma senha forte').required('Campo obrigatório!')
 })

 const { 
   register, 
   handleSubmit, 
   formState: { errors },
  } = useForm({
        resolver: yupResolver(schema),
  })

  const onSubmitFunction = ({ name, username, password }) => {
        const user = { name, username, password }
        api.post('Auth/SignIn', user)
        .then(() => {
        toast.success('Conta criada com sucesso')
        handleNavigateLogin()
        })
        .catch((err) => toast.error('Erro ao criar a conta. Tente novamente!'))
  }

  if (authenticated) {
    handleNavigateDashboard()
  }
    
    return(
    <Container>
      <Content>
        <img src={SignImage} alt="imageTaskFlow" />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>Cadastro</h1>
                <Input register={register} name='username' error={errors.username?.message} icon={FiUser} label='Usuário' placeholder= 'Seu nome de usuário aqui'/>
                <Input register={register} name='name' error={errors.name?.message} icon={FiUser} label='Nome' placeholder= 'Seu nome completo'/>
                <Input register={register} name='password' error={errors.password?.message} icon={FiLock} label='Senha' placeholder= 'Uma senha bem segura' type='password'/>
                <button type="submit">Enviar</button>
                <p>Já tem uma conta? Faça seu <Link to='/login'>login</Link></p>
        </form>
      </Content>
    </Container>
    )
}