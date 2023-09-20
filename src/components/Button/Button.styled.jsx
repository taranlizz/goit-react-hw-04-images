import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const ButtonEl = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: #9786f6;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #9786f6;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #9786f6;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #9786f6;
  }

  &:active {
    transform: scale(0.9);
  }
`;
