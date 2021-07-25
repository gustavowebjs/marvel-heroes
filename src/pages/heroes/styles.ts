import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const CardList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  margin: 10px;
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Total = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 300;
  margin-left: 10px;
`;
