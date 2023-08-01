import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ Direction }) => Direction || "none"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ content }) => content || "center"};
  width: ${({ width }) => width || "none"};
  height: ${({ height }) => height || "none"};
  background-color: ${({ bg }) => bg || "none"};
  color: ${({ color }) => color || "black"};
`;
export const Margin = styled.div`
  margin-top: ${({ margin }) => margin || "none"};
  font-size: ${({ fontSize }) => fontSize || "none"};
  color: ${({ color }) => color || "none"};
  cursor: ${({ cursor }) => cursor || "none"};
`;
export const Button = styled.button`
  border: ${({ border }) => border || "none"};
  color: ${({ color }) => color || "white"};
  background-color: ${({ Bgcolor }) => Bgcolor || "none"};
  width: ${({ width }) => width || "4rem"};
  height: ${({ height }) => height || "2rem"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  font-size: ${({ fontSize }) => fontSize || "none"};
  cursor: pointer;
`;
export const FormModal = styled.div`
  background-color: white;
  border-radius: 18px;
  height: ${({ height }) => height || "100%"};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop || "none"};
`;
export const InnerForm = styled.div`
  width: 90%;
  height: 90%;
  font-family: "Poppins", sans-serif;
  margin-top: ${({ marginTop }) => marginTop || "none"};
`;
export const FontFamily = styled.div`
  font-family: ${({ fontFamily }) => fontFamily || "'Poppins', sans-serif"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  margin-left: ${({ margin }) => margin || "1rem"};
  font-weight: ${({ Weight }) => Weight || "500"};
  color: ${({ color }) => color || "white"};
  padding-top: ${({paddingTop}) => paddingTop || "3px"};
`;
