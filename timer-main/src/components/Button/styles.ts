import styled from "@emotion/styled";

export const Container = styled.button`
    background-color: var(--tertiary-color-dark);

    border: none;
    width: 291px;

    padding: 1.125rem 7.125rem;
    border-radius: 999px;

    font-size: 1rem;
    font-weigth: 600;
    color: var(--white);
    text-transformer: uppercase;

    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.125);
    }
`;