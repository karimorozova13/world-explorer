import styled from "styled-components";
const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: %{({theme})=> theme.spacing;.small};
`;

interface HeaderProps {
  toggleTheme: () => void;
}
const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <Wrap>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Wrap>
  );
};

export default Header;
