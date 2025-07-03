import type React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.extraLarge};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.main};
`;

interface SectionProps {
  children: React.ReactNode;
}
const Section = ({ children }: SectionProps) => {
  return <Wrap>{children}</Wrap>;
};

export default Section;
