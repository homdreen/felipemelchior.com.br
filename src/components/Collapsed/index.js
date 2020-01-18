import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Dock from 'react-dock'

import Expanded from '../Expanded';

import { 
  Container,
  ProfileLink,
  Avatar,
  LogoText,
  MenuGroup,
  MenuItem,
  MenuLink,
  CallToAction
} from './styles';

import { Home, Person, Code, Search, Email } from 'styled-icons/material';

export default function Collapsed() {
  const [visible, setVisible] = useState(false)

  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container onClick={() => setVisible(!visible)}>

      <ProfileLink to="/">
        <Avatar fixed={avatarImage.childImageSharp.fixed} />
        <LogoText>FHM</LogoText>
      </ProfileLink>

      <MenuGroup>
        <MenuItem>
          <MenuLink to="/" title="Home" activeClassName="active">
            <Home />
          </MenuLink> 
        </MenuItem>
        
        <MenuItem>
          <MenuLink to="/about" title="Sobre mim" activeClassName="active">
            <Person />
          </MenuLink> 
        </MenuItem>
        
        <MenuItem>
          <MenuLink to="/blog" title="Blog" activeClassName="active">
            <Code />
          </MenuLink> 
        </MenuItem>
        
        <MenuItem>
          <MenuLink to="/search" title="Pesquisar artigos" activeClassName="active">
            <Search />
          </MenuLink> 
        </MenuItem>

        <MenuItem>
          <MenuLink to="/contact" title="Contato" activeClassName="active">
            <Email />
          </MenuLink> 
        </MenuItem>
      
      </MenuGroup>

      <CallToAction>Clique para abrir</CallToAction>

      <Dock position="left" fluid="true" dockStyle={{ background: '#5B2D89' }} isVisible={visible}>
        <Expanded />
      </Dock>

    </Container>
  );
}
