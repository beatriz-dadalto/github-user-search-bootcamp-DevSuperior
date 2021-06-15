import { Link } from 'react-router-dom';
import Button from 'core/components/Button';
import './styles.scss';

const Home = () => {
  return (
    <main className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Desafio do Capítulo 3,
          <br /> Bootcamp DevSuperior
        </h1>
        <div className="home-container-text">
          <p className="home-text">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
          </p>
          <p className="home-text">
            Favor observar as instruções passadas no capítulo sobre a elaboração
            deste projeto.
          </p>
          <p className="home-text">
            Este design foi adaptado a partir de Ant Design System for Figma, de
            Mateusz Wierzbicki: &nbsp;{' '}
            <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
          </p>
          <Link to="/search">
            <Button text="Começar" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
