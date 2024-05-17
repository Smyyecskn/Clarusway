import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2rem 0rem;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Logo = styled.img`
  width: 200px;
  padding: 4rem 0rem;
`;
export const Div = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export default StyledHeader;
