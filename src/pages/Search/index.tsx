import React from 'react';
import axios from 'axios';
import Button from 'core/components/Button';
import Input from '../Search/components/Input';
import UserTags from '../Search/components/UserTags';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import { User } from 'core/types/User';
import { datePT_BR } from 'core/utils/formatDate';

import './styles.scss';

const Search = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userResponse, setUserResponse] = React.useState<User>();
  const [userName, setUserName] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (userName !== '') {
      axios
        .get(`https://api.github.com/users/${userName}`)
        .then((response) => setUserResponse(response.data))
        .catch((error) => {
          console.warn(error);
          setUserResponse(undefined);
          alert('Usuário não encontrado');
        })
        .finally(() => {
          setIsLoading(false);
          setUserName('');
        });
    } else {
      alert('Digite um usuário para pesquisar');
    }
  };

  return (
    <main className="search-container">
      <section className="search-user">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search" className="search-title">
            Encontre um perfil Github
          </label>
          <input
            value={userName}
            type="text"
            id="search"
            placeholder="Usuário Github"
            onChange={(e) => setUserName(e.target.value)}
          />

          <Button text="Encontrar" />
        </form>
      </section>
      {userResponse && (
        <section className="result-area">
          <div className="info">
            <div className="img-user">
              {isLoading ? (
                <ImageLoader />
              ) : (
                <>
                  <img
                    src={userResponse.avatar_url}
                    alt="Foto de Perfil do Github"
                  />
                  <a
                    href={`https://github.com/${userResponse.login}`}
                    title="Ir para Github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button text="Ver Perfil" />
                  </a>
                </>
              )}
            </div>
            <div className="about-user">
              {isLoading ? (
                <InfoLoader />
              ) : (
                <>
                  <div className="user-follows">
                    <UserTags
                      fieldName="Repositórios Públicos:"
                      userData={userResponse.public_repos}
                    />
                    <UserTags
                      fieldName="Seguidores:"
                      userData={userResponse.followers}
                    />
                    <UserTags
                      fieldName="Seguindo:"
                      userData={userResponse.following}
                    />
                  </div>
                  <div className="user-info">
                    <h2 className="user-info-title">Informações</h2>
                    <Input
                      fieldName="Empresa:"
                      userData={userResponse.company}
                    />
                    <Input
                      fieldName="Website/Blog:"
                      userData={userResponse.blog}
                    />
                    <Input
                      fieldName="Localidade:"
                      userData={userResponse.location}
                    />
                    <Input
                      fieldName="Membro desde:"
                      userData={datePT_BR.format(new Date(userResponse.created_at))}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Search;