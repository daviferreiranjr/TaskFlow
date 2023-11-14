import styled, { css } from 'styled-components'

export const Container = styled.div`
text-align: left;
div {
    margin-bottom: 10px;
    span {
        color: var(--red);
    }
}
`;
export const InputContainer = styled.div`
background-color: var(--white);
border-radius: 10px;
border: 2px solid var(--orange);
color: var(--black);
width: 100%;
display: flex;
transition: 0.4s;
padding: 1rem;

${(props) => props.isErrored && css`
    border-color: var(--red);
    svg {
        color: var(--red);
    }
`}

::placeholder {
        color: var(--black)
    }

input {
    background-color: transparent;
    align-items: center;
    flex: 1;
    border: none;
}
svg {
    margin-right: 16px;
}
`