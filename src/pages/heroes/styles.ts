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
  max-height: 300px;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.6);
  @media (max-width: 500px) {
    height: 500px;
  }
`;

export const WrapperDetails = styled.div`
  min-height: 300px;
  width: auto;
  padding: 20px;
  border-radius: 20px;
  border: solid 1px #333;
  > h4 {
    margin: 0;
    padding: 0;
  }
  > p {
    font-size: 16px;
    color: #666;
    margin: 0;
  }
  > ul {
    padding: 0;
  }
  > ul li img {
    height: 80px;
    width: 80px !important;
    border-radius: 40px;
    margin-right: 10px;
  }
  > ul li {
    background-color: #222;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
`;

export const SingPageRow = styled.div`
  display: grid;
  margin-bottom: 150px;
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

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonTab = styled.button`
  margin-left: 5px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 18px;
  border-left: none;
  border-right: none;
  border-top: none;
  font-weight: 500;
  border-radius: 5px;
  border: solid 2px #810000;
  background: transparent;
  color: #fff;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: filter 0.2;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`;
