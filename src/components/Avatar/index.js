import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Image } from './styles'

export default function Avatar() {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  
  return (
    <Image fixed={avatarImage.childImageSharp.fixed} />
  );
}
