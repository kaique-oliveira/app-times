import { Container, SubTitle, Title } from "./styles";

type props = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
