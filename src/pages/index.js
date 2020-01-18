import React from "react"
import styled from 'styled-components';

import Layout from "../components/Layout"
import SEO from "../components/seo"

import MainTitle from '../components/MainTitle'
import CallToBlog from '../components/CallToBlog'


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <MainTitle/>
      <CallToBlog />
    </Container>
  </Layout>
)

export default IndexPage
