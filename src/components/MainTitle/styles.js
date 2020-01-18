import styled from 'styled-components';
import { Link } from 'gatsby';
import { darken } from 'polished';
import ReactRotatingText from 'react-rotating-text';


export const Container = styled.div`
  height: 500px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled(Link)`
  height: 200px;
  width: 700px;
  background: #5B2D89;
  border-radius: 10px;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 0.2s background;

  &:hover {
    background: ${darken(0.02, '#5B2D89')}
  }
`

export const BoxTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #fff;
`;

export const BoxTypist = styled(ReactRotatingText)`
  font-size: 36px;
  margin-top: 15px;
`
;