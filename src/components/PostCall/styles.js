import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 20px;
  padding: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tag = styled.div`
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  color: var(--sidebarBackground);
  transition: color 0.5s;

  &:hover {
    color: #7159c1;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: var(--sidebarBackground);
    margin: 5px auto; 
  }
`;

export const PostTitle = styled.h1`
  font-size: 36px;
  margin-top: 20px;
  text-align: center;
`;

export const PostInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const PostDate = styled.span`
  display: flex;
  align-items: center;

  svg {
    color: var(--sidebarBackground);
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;


export const PostTimeToRead = styled.span`
  margin-left: 15px;
  display: flex;
  align-items: center;

  svg {
    color: var(--sidebarBackground);
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;

export const PostDescription = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.4;
`;

export const Continue = styled(Link)`
  text-decoration: none;
  align-self: stretch;
  text-align: center;
  margin-top: auto;
  font-size: 16px;
  font-weight: bold;
  color: #7159c1;
  transition: color 0.5s;

  &:hover, &:link, &:visited, &:active {
    color: var(--sidebarBackground);
  }

`