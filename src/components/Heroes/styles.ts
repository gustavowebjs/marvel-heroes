import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  border-right: solid 5px transparent;
  border-bottom: solid 5px transparent;
  text-align: center;
  &:hover {
    border-right: solid 5px #810000;
    border-bottom: solid 5px #810000;
  }
`;
export const HeaderList = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 20px;
  text-align: center;
  background-color: #ce1212;
`;

export const Thumbnail = styled.img`
  width: 100%;
  background-size: cover;
  background-position: center;
  min-height: 250px;
  background-color: #efefef;
  object-fit: cover;
`;
