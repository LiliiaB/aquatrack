import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';

const FirstPage = () => {
  return (
    <Container>
      <Title>Water tracker</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
