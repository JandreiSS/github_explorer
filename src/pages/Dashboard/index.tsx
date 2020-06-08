import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form >
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/48030570?s=460&u=4ddc080a215961917dd266d0e612e1a34fe917dd&v=4"
            alt="Jandrei Sartori Spancerski"
          />

          <div>
            <strong>JandreiSS/GoBarber</strong>
            <p>Aqui vai a descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/48030570?s=460&u=4ddc080a215961917dd266d0e612e1a34fe917dd&v=4"
            alt="Jandrei Sartori Spancerski"
          />

          <div>
            <strong>JandreiSS/GoBarber</strong>
            <p>Aqui vai a descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/48030570?s=460&u=4ddc080a215961917dd266d0e612e1a34fe917dd&v=4"
            alt="Jandrei Sartori Spancerski"
          />

          <div>
            <strong>JandreiSS/GoBarber</strong>
            <p>Aqui vai a descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
