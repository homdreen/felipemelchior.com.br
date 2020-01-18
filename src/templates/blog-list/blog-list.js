import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout'; 
import SEO from '../../components/seo'; 

import { ContentWrapper } from './styles';

export const query = graphql`
  query PostList {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`;

export default function BlogList({ data }) {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
        <ContentWrapper>
          <p>teste</p>
        </ContentWrapper>

      {/* <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div> */}
    </Layout>
  )
}

// BlogList.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.shape({
//         category: PropTypes.string,
//         date: PropTypes.string,
//         description: PropTypes.string,
//         title: PropTypes.string,
//       }),
//       html: PropTypes.string
//     })
//   }).isRequired
// }