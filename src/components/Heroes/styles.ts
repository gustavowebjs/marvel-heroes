import styled from 'styled-components';

export const Card = styled.div`
  border: solid 1px #333;
  width: 100%;
  min-width: 25%;
  text-align: center;
  &:hover {
    border-right: solid 4px #ce1212;
    border-bottom: solid 4px #ce1212;
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
  object-fit: cover;
`;
