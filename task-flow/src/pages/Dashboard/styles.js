import styled from 'styled-components'

export const Container = styled.div`

display: flex;
flex-direction: column;
padding: 50px 38px;
text-align: center;

.logout {
    margin-left: 38px;
    color: var(--orange);
    cursor: pointer;
}
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

    @media only screen and (max-width: 600px) {
    flex-direction: column;

    > div {
        max-width: 100%;
        flex: 1;
        margin-right: 16px;
        margin: 0;

    }
    
    button{
        max-width: 100%;
        margin-top: 10px;
    }
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
