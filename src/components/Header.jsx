import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import StyledHeader, { Div, Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
      <Nav>
        <Logo src="./images/logo.png" />
        <Div>
          <Button bg="true">Apply Courses</Button>
          <Button color="true">Talk to Adviser</Button>
        </Div>
      </Nav>
      <div>
        <h1></h1>
      </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
