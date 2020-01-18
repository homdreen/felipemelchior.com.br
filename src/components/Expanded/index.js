import React from 'react';

import Profile from '../Profile';

import { Home, Person, Code, Search, Email } from 'styled-icons/material';

import { Container, MenuGroup, MenuItem, MenuLink, IconWrapper, MenuItemText } from './styles';

export default function Expanded() {
  return (
    <Container>
      <Profile />
    
      <MenuGroup>

        <MenuItem>
          <MenuLink to="/" activeClassName="active">
            <IconWrapper>
              <Home />
            </IconWrapper>
            <MenuItemText>Home</MenuItemText>
          </MenuLink> 
        </MenuItem>

        <MenuItem>
          <MenuLink to="/about" activeClassName="active">
            <IconWrapper>
              <Person />
            </IconWrapper>
            <MenuItemText>Sobre mim</MenuItemText>
          </MenuLink> 
        </MenuItem>
        
        <MenuItem>
          <MenuLink to="/blog" activeClassName="active">
            <IconWrapper>
              <Code />
            </IconWrapper>
            <MenuItemText>Blog</MenuItemText>
          </MenuLink> 
        </MenuItem>
        
        <MenuItem>
          <MenuLink to="/search" activeClassName="active">
            <IconWrapper>
              <Search />
            </IconWrapper>
            <MenuItemText>Pesquisar artigos</MenuItemText>
          </MenuLink> 
        </MenuItem>

        <MenuItem>
          <MenuLink to="/contact" activeClassName="active">
            <IconWrapper>
              <Email />
            </IconWrapper>
            <MenuItemText>Contato</MenuItemText>
          </MenuLink> 
        </MenuItem>

      
      </MenuGroup>

    </Container>
  );
}