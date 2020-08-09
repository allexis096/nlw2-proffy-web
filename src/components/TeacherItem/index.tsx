import React, { useCallback } from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { TeacherItemArticle, Header, Footer } from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
};

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = useCallback(() => {
    api.post('connections', {
      user_id: teacher.id,
    })
  }, [teacher.id]);

  return (
    <TeacherItemArticle>
      <Header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>

      <p>{teacher.bio}</p>

      <Footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </Footer>
    </TeacherItemArticle>
  )
}

export default TeacherItem;