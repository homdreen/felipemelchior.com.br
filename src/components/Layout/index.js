import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Profile from '../Profile';

import { Container, Main } from './styles';

export default function Layout({ children }) {
  return (
    <Container>
      <aside>
        <Profile />
      </aside>
      <Main>{children}</Main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

