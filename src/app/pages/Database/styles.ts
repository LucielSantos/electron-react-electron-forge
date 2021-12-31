import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-top: 1rem;
  }
`;

export const Section = styled.div`
  margin-top: 3rem;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`;

export const Ul = styled.ul`
  margin-top: 3rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;

  span {
    margin-left: auto;
    font-weight: 600;
    cursor: pointer;
  }
`;
