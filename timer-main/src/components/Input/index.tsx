import { Container } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
}

export default function Input({type, placeholder}: InputProps) {
  return <Container type={type} placeholder= {placeholder} />;
}
