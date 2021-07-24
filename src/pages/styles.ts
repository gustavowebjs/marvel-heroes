import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const CardList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
