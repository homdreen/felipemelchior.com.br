import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 10px;
  font-weight: bold; 
  color: var(--textColor);
  font-size: 28px;
`;

export const Description = styled.p`
  margin-top: 10px;
  color: rgba(255,255,255,0.7);
  font-size: 24px;
  text-align: center;
  line-height: 1.3;
`;