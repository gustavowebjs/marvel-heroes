import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;
`;

export const ContentCard = styled.div`
  border-radius: 20px;
  transition: box-shadow 0.5s ease-in-out;
  &:hover {
    -webkit-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.8);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.8);
  }
`;

export const HeaderList = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
  text-align: center;
  background-color: #ce1212;
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
`;

export const Thumbnail = styled.div`
  width: 100%;
  border-start-end-radius: 20px;
  border-start-start-radius: 20px;
  background-size: cover;
  background-position: center;
  min-height: 250px;
  background-color: #efefef;
  object-fit: cover;
`;
