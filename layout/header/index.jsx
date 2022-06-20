import React from 'react'
import { StyledContainer } from './../../components/styled/index';
import { JobTitle, Name, Title } from './styles';

const Header = () => {
  return (
    <Header>
        <StyledContainer>
            <Title>Online žurnal</Title>
            <Name>Merdan Jumayew</Name>
            <JobTitle>Halypa mugallym</JobTitle> 
        </StyledContainer>
    </Header>
  )
}

export default Header