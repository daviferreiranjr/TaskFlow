import styled from 'styled-components'

export const Container = styled.div`

display: flex;
flex-direction: column;
padding: 50px 38px;
text-align: center;
`;

export const InputContainer = styled.form`
flex: 1;
margin-top: 32px;
padding: 0 38px;

section {
    display: flex;
    > div {
        max-width: 80%;
        flex: 1;
        margin-right: 16px;
    }

    button {
        max-width: 20%;
        height: 50px;
        margin: 0;
        align-self: center;
    }
}
`

export const TasksContainer = styled.div`
    padding: 0 38px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;

    div {
        margin-top: 16px;
        margin-right: 32px;
    }
`
