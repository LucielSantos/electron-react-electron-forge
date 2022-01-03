import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-top: 1rem;
  }
`;

export const Section = styled.div`
  margin-top: 3rem;

  code {
    font-size: 16px;
  }
`;

export const Messages = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin-bottom: 1rem;
  }

  span {
    background-color: ${({ theme }) => theme.colors.foreground};
    padding: 0.5rem 1rem;
    border-radius: 10rem;
    display: flex;
    align-items: center;
  }
`;
