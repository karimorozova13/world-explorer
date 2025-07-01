import styled from "styled-components";

const Heading = styled.h1`
  font-size: 35px;
  color: teal;
  text-align: center;
`;
interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return <Heading>{title}</Heading>;
};

export default Title;
