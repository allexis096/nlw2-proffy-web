import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

// import './styles.css';
import { PageHeaderDiv, TopBarContainer, HeaderContent } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children, title, description }) => {
  return (
    <PageHeaderDiv>
        <TopBarContainer>
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </TopBarContainer>

        <HeaderContent className="headerForm">
          <strong>{title}</strong>
          { description && <p>{description}</p> }
          {children}
        </HeaderContent>
      </PageHeaderDiv>
  );
}

export default PageHeader;