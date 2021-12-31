import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;
