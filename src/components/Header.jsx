import Button from "../components/styles/Button.styled";
import Headerstyle, { Logo, Nav } from "../components/styles/Header.styled";

const Header = () => {
  return (
    <Headerstyle>
      <Nav>
        <Logo src="./images/logo.png" />
        <div>
          <Button color="#A62440">Apply Courses</Button>
          <Button bg="#A62440">Talk To Adviser</Button>
        </div>
      </Nav>
    </Headerstyle>
  );
};

export default Header;
