import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';
import { Container, Title, Description } from './styles';

export default function Profile() {
  const { site: { siteMetadata: { title, description } } } = useStaticQuery(graphql`
    query SiteData{
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Container>
      <Avatar />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

Profile.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  })
}
