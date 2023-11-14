import GlobalStyles from './styles/global'
import { Router } from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <ToastContainer />
    <GlobalStyles />
    <Router />
    </>
  )
}

export default App
