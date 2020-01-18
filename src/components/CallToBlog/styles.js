import styled from 'styled-components';
import { darken } from 'polished';

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
  text-decoration: none;
  border-radius: 10px;
  margin-right: 15px;
  transition: background 0.5s;

  &:hover {
    background: ${darken(0.08, '#fff')};
  }
`;

export const Tag = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  color: var(--sidebarBackground);
  
`;
export const PostTitle = styled.h1`
  font-size: 36px;
  margin-top: 20px;
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
  display: flex;
  align-items: center;
  margin-left: 15px;

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

export const GoToBlog = styled.div`
  flex: 0.5;
  height: auto;
  min-height: 250px;
  background: #fff;
  border-radius: 10px;
  text-decoration: none;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  transition: background 0.5s;

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
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: var(--sidebarBackground);
`;