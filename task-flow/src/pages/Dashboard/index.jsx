import { Container, InputContainer, TasksContainer } from "./styles"
import { Input } from "../../components/Input"
import { useForm } from 'react-hook-form'
import { FiEdit2 } from "react-icons/fi"
import { MdOutlineLogout } from "react-icons/md";
import { Card } from "../../components/Card"
import { useEffect, useState } from "react"
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"


export const Dashboard = () =>{
const [ tasks, setTasks ] = useState([])
const [token] = useState(localStorage.getItem('@TaskFlow:token') || '');
const { register, handleSubmit } = useForm()
const navigate = useNavigate(); 

const handleNavigateHome = () => {
  navigate('/');
};

const loadTasks = () => {
    api.get('ToDo', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => setTasks(response.data))
    .catch((err) => console.log(err))
}

useEffect(() => {
    loadTasks()
}, [])

const onSubmit = ({ title, description }) => {
    const newTask = { title, description };
  
    api.post('ToDo', newTask, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        loadTasks();
        toast.success('Tarefa cadastrada com sucesso')
      })
      .catch(err => {
        console.error('Erro ao enviar tarefa:', err);
      });
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`ToDo/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
      loadTasks()
      toast.success('Tarefa exluída com sucesso')
    } catch (error) {
        toast.error('Erro ao excluir tarefa:')
    }
  };

  const Logout = () => {  
      localStorage.removeItem('@TaskFlow:token');
      handleNavigateHome()
  }

return(
    <Container>
            <h1>Task Flow</h1>
            <MdOutlineLogout className="logout" onClick={Logout}/>
            <InputContainer onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <Input icon={FiEdit2} placeholder='Título da tarefa' register={register} name='title'/>
                    <Input icon={FiEdit2} placeholder='Descrição da tarefa' register={register} name='description'/>
                    <button type="submit">Adicionar</button>
                </section>
            </InputContainer>
            <TasksContainer>
                {tasks.map((task) => (
                    <Card key={task.id} title={task.title} description={task.description} date={task.date} tasks={tasks} setTasks={setTasks} onClick= {() => handleDelete(task.id)}/>
                ))}
            </TasksContainer>
    </Container>
)
}