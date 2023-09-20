import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #9786f6;
  -webkit-box-shadow: 0px 4px 12px -2px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 4px 12px -2px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 4px 12px -2px rgba(0, 0, 0, 0.38);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    width: 300px;
    height: 36px;
    font-size: 18px;
    border-color: transparent;
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 36px;
    border-color: transparent;
    cursor: pointer;
  }
`;

export const Icon = styled(ImSearch)`
  width: 30px;
  height: 30px;
  color: #b8b8bb;
`;
