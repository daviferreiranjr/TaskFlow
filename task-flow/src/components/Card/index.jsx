import { FiClipboard, FiCalendar } from "react-icons/fi"
import { Container } from "./styles"
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatDate = dateString => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy', { locale: ptBR });
  };

export const Card = ({ title, description, date, onClick}) => {
    const formattedDate = formatDate(date);

    return(
        <Container>
            <span>
                <FiClipboard/> {title}
            </span>
            <time>
                <FiCalendar/> {formattedDate}
            </time>
            <p>{description}</p>
            <button onClick={onClick}>Exluir</button>
        </Container>
    )
}