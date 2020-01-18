import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'gatsby';

export const Container = styled.div`
  height: 100%;
  background: #7159c1;
  padding: 30px 50px;
`;

export const SectionTitle = styled.h1`
  font-size: 36px;
  margin: 0 auto;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const PostWrapper = styled.div`
  flex: 1;
  height: auto;
  min-height: 250px;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-right: 15px;
  transition: background 0.5s;

  &:hover {
    background: ${darken(0.08, '#fff')};
  }
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
  text-decoration: none;

`;

export const PostInfo = styled.div`
  display: flex;
  margin-top: 5px;
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

export const GoToBlog = styled(Link)`
  flex: 0.5;
  height: auto;
  min-height: 250px;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-decoration: none;

  transition: background 0.5s, color 0.5s;

  &:hover, &:link, &:visited, &:active {
    color: var(--sidebarBackground);
  }

  &:hover {
    background: ${darken(0.08, '#fff')};
  }

  svg {
    margin: 0 auto;
    color: var(--sidebarBackground);
    width: 72px;
    height: 72px;
  }

  &:hover {
    svg {
      -webkit-animation: rotate-center 0.6s ease-in-out both;
      animation: rotate-center 0.6s ease-in-out both;
    }
  }

  @-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
`;

export const GoToBlogText = styled.p`
  text-decoration: none;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: var(--sidebarBackground);
`;

export const Continue = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #7159c1;
  transition: color 0.5s;

  &:hover, &:link, &:visited, &:active {
    color: var(--sidebarBackground);
  }

`