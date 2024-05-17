import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import StyledHeader, { Div, Logo, Nav, Image } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" />
          <Div>
            <Button color="true">Apply Courses</Button>
            <Button bg="true">Talk to Adviser</Button>
          </Div>
        </Nav>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <Button bg="true">Start Your New Carier</Button>
          <Image src="./images/hero.jpg"></Image>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
