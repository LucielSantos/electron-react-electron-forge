import styled from "styled-components";

export const StyledButton = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.7rem 1.3rem;
  border-radius: 50rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.3s;
  font-size: 14px;

  :hover {
    filter: brightness(80%);
  }
`;
