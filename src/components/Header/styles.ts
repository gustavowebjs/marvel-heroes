import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  justify-content: center;
  & div p {
    margin: 0;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
  }
  > ul {
    padding-left: 0;
    border-top: solid 1px #810000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > ul a {
    margin: 10px;
    color: #eeebdd;
    text-decoration: none;
    display: block;
    padding: 5px 30px;
    font-size: 20px;
    border: solid 3px #eeebdd;
    margin-top: 10px;
    &:hover {
      border-color: #810000;
    }
  }
  & ul a li {
    display: block;
  }
`;
