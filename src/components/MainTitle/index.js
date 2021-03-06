import React from 'react';

import { Container, Box, BoxTitle, BoxTypist } from './styles';

export default function MainTitle() {
  return (
    <Container>
      <Box to="/about">
        <BoxTitle>Felipe Homrich Melchior</BoxTitle>
        <BoxTypist color='#DAD0E3' items={['Hello World', 'Portfólio', 'Blog', 'Segurança da Informação', 'Desenvolvimento de Aplicações', 'Node.js', 'React', 'React Native', 'Python', 'Freelance']}/>
      </Box>
    </Container>
  );
}
