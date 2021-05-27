import React from 'react';
import BookCard from '../../components/BookCard';

import { Container } from './styles';

const LandingPage = () => {

  return (
    <Container>
      <BookCard title="Test"/>
      <BookCard title="Test2"/>
      <BookCard title="Test3"/>

      
    </Container>
  );
};

export default LandingPage;