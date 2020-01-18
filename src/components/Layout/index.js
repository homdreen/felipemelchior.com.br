import React from "react"
import PropTypes from "prop-types"

import Collapsed from '../Collapsed';

import { GlobalStyles } from '../../styles/global';
import { Container, CollapsedAside, Main } from './styles';

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <CollapsedAside>
        <Collapsed />
      </CollapsedAside>
      <Main>{children}
      </Main> 
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

