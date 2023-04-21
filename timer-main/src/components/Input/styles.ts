import styled from "@emotion/styled";

export const Container = styled.input`
    width: 100%;
    background=color: var(--white);
    border: none;

    padding: 1.25rem 1.75rem;
    border-radius: 999px;

    font-size:1.25rem;
    line-height: 1.465rem;

    &::placeholder {
        color: var(--gray);
    }
`;
