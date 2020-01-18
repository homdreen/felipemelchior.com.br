import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Security, DateRange, LibraryBooks, ArrowForwardIos } from 'styled-icons/material';
import { Dev } from 'styled-icons/fa-brands';

import { 
  Container,
  SectionTitle,
  PostList,
  PostWrapper,
  Continue,
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
  const { allMarkdownRemark: { edges: LatestPosts }} = useStaticQuery(graphql`
    query LatestPosts {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 2) {
        edges {
          node {
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `);

  return (
    <Container>
      <SectionTitle>Últimos posts do blog</SectionTitle>

      <PostList>
        {LatestPosts.map(({
          node: { frontmatter: { category, date, description, title },
           timeToRead }, 
          }) => (
          <PostWrapper key={title}>
            <Tag>
              {category === 'InfoSec' ? (<Security />) : (<Dev />) }
            </Tag>
            <PostTitle>{title}</PostTitle>
            <PostInfo>
              <PostDate>
                <DateRange />
                {date}
              </PostDate>
              <PostTimeToRead>
                <LibraryBooks />
                {timeToRead} minutos de leitura
              </PostTimeToRead>
            </PostInfo>
            <PostDescription>{description}</PostDescription>
            <Continue to="/about">
              continuar lendo...
            </Continue>
          </PostWrapper>
        ))}

        <GoToBlog to="/blog">
          <ArrowForwardIos />
          <GoToBlogText>Todos os posts</GoToBlogText>
        </GoToBlog>
      </PostList>

      
    </Container>
  );
}