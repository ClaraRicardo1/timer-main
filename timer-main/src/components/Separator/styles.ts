import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    gap: 1rem;

    .sep {
        background-color: var(--primary-color);
        height: 0.25rem;
        border-radius: 1rem;
    }
`;

