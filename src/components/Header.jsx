import Button from "./styles/Button.styled";
import StyledHeader from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Button bg>Apply Courses</Button>
        <Button color>Talk to Adviser</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
