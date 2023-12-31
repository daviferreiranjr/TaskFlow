import styled from 'styled-components'

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;
`;

export const Content = styled.div`
max-width: 400px;
h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0,25);
    font-size: 2.5rem;
}
span {
    color: #c85311;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    } 

.sign {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;

    :hover {
        background-color: var(--vanilla);
    }
}

`
