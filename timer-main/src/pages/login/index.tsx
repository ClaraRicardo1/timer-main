import { Button } from "@/components/Button";
import { Form, Header, Main, Wrapper } from "./styles";
import Input from '@/components/Input'
import { Separator } from "@/components/Separator";

export default function Login() {
  return (
    <Wrapper>
      <Main>
        <Header>
          <h1>Timer</h1>
          <p>Seja o senhor do seu próprio tempo</p>
        </Header>

        <Form>
          <div className="inputContainer">
            <Input type= "email"placeholder="Email"></Input>
            <Input type="password"placeholder="Senha"></Input>
          </div>
          <Separator /> 

          <Button />
        </Form>
      </Main>
      <footer>Desenvolvida por UX Software</footer>
    </Wrapper>
  );
}
