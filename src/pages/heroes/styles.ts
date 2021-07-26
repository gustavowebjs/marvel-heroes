import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const CardList = styled.div`
  display: grid;
  justify-content: center;
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

export const ImageSingle = styled.div`
  width: 100%;
  height: 80%;
  background-color: #fff;
  background-size: cover;
  border-radius: 10px;
`;
export const TitleSingle = styled.div`
  font-weight: 700;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
`;

export const WrapperImage = styled.div`
  background-color: #ce1212;
  min-height: 300px;
  padding: 20px;
  border-radius: 10px;
`;
export const WrapperDetails = styled.div`
  min-height: 300px;
  width: auto;
  padding: 20px;
  border-radius: 20px;
  border: solid 1px #333;
`;

export const SingPageRow = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 0.3fr 0.7fr;
  @media (max-width: 800px) {
    grid-template-columns: 0.5fr 0.5fr;
    margin: 10px;
  }
  @media (max-width: 500px) {
    margin: 10px;

    grid-template-columns: 1fr;
  }
`;
