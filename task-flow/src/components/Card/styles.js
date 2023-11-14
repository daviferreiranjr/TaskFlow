import styled from 'styled-components'

export const Container = styled.div`

background-color: var(--white);
border-radius: 8px;
display: flex;
flex-direction: column;
width: 250px;
height: 250px;
padding: 16px;
gap: 1rem;
border: 1px solid var(--orange);
color: var(--black);

button {
    align-self: flex-end;
}

svg {
    font-size: 1.1rem;
    color: var(--orange);
    margin-right: 4px;
}
`;