import styled from 'styled-components'


export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;

form {
    margin: 80px;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 { 
        margin-bottom: 32px;
    }

    p { 
        margin-top: 0px;
    }

    a {
        font-weight: bold;
        color: var(--orange);
    }
}
`;






