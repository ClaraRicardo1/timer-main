import styled from "@emotion/styled";

export const Wrapper = styled.main`
  background-color: var(--primary-color-dark);
  min-height: 100vh;

  display: grid;
  grid-tamplate-rows: 1fr 4rem;

  // flex-direction: column;
  align-items: center;
  // justify-content: center;

  footer {
    text-align: center;
  }
`;

export const Main = styled.div`
  // min-width: 30.4375rem;
  
  width: min(100%, 30.4375rem);
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 4.6875rem;
    color: var(--primary-color);
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    color: var(--white);
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  .inputContainer{
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
