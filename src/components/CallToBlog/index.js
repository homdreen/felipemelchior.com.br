import React from 'react';

import { Security, DateRange, LibraryBooks, ArrowForwardIos } from 'styled-icons/material';
import { Dev } from 'styled-icons/fa-brands';

import { 
  Container,
  SectionTitle,
  PostList,
  PostWrapper,
  Tag,
  PostTitle,
  PostInfo,
  PostDate,
  PostTimeToRead,
  PostDescription,
  GoToBlog,
  GoToBlogText
 } from './styles';

export default function CallToBlog() {
  return (
    <Container>
      <SectionTitle>Últimos posts do blog</SectionTitle>

      <PostList>
        <PostWrapper>
          <Tag>
            <Security />
          </Tag>
          <PostTitle>Como instalar um waf?</PostTitle>
          <PostInfo>
            <PostDate>
              <DateRange />
              05/01/2020
            </PostDate>
            <PostTimeToRead>
              <LibraryBooks />
              3 minutos de leitura
            </PostTimeToRead>
          </PostInfo>
          <PostDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</PostDescription>
        </PostWrapper>

        <PostWrapper>
          <Tag>
            <Dev />
          </Tag>
          <PostTitle>Uso dos React Hooks</PostTitle>
          <PostInfo>
            <PostDate>
              <DateRange />
              05/01/2020
            </PostDate>
            <PostTimeToRead>
              <LibraryBooks />
              3 minutos de leitura
            </PostTimeToRead>
          </PostInfo>
          <PostDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</PostDescription>
        </PostWrapper>

      
        <GoToBlog>
          <ArrowForwardIos />
          <GoToBlogText>Todos os posts</GoToBlogText>
        </GoToBlog>
      </PostList>

      
    </Container>
  );
}