import styled from "styled-components";

import ToggleBtn from "./ToggleBtn";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

interface HeaderProps {
  toggleTheme: () => void;
}
const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <Wrap>
      <ToggleBtn toggleTheme={toggleTheme} />
    </Wrap>
  );
};

export default Header;
