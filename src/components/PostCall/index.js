import React from 'react';


import { Security, DateRange, LibraryBooks, ArrowForwardIos } from 'styled-icons/material';
import { Dev } from 'styled-icons/fa-brands';

import { Container, Tag, PostTitle, PostInfo, PostDate, PostTimeToRead, PostDescription, Continue } from './styles'

export default function PostCall() {
  return (
    <Container>
      <Tag>
        {/* {category === 'InfoSec' ? (<Security />) : (<Dev />) } */}
        <Security />
      </Tag>
      <PostTitle>Uso dos React Hooks</PostTitle>
      <PostInfo>
        <PostDate>
          <DateRange />
          01 de janeiro de 2020
        </PostDate>
        <PostTimeToRead>
          <LibraryBooks />
          7 minutos de leitura
        </PostTimeToRead>
      </PostInfo>
      <PostDescription>Lorem lorem lorem lorem lorem</PostDescription>
      <Continue to="/about">
        continuar lendo...
      </Continue>
    </Container>
  )
}