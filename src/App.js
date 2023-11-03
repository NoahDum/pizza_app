import { library } from '@fortawesome/fontawesome-svg-core';
import { faPizzaSlice, faTruck, faFire, faEuroSign, faEdit, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import tiles from "./tiles";
import Header from './components/Header';
import Tile from './components/Tile';

// Stylesheets
import './stylesheets/App.scss';

library.add(faPizzaSlice, faTruck, faFire, faEuroSign, faEdit, faTrash, faArrowLeft);

function App() {
  const navigate = useNavigate();

  const handleClick = (action) => {
    navigate(action);
  }

  /* le .map s'utilise sur un Array ce qui est notre cas
  si vous n'avez pas un Array sous la main mais un Object,
  il faut passer par Object.keys() avant d'utiliser la fonction map */
  const tilesDisplay = tiles.map(tile => (
    // pour le onClick ne pas oublier la fonction fléchée sinon la fonction associée au onClick s'éxécute immédiatement
    <Tile
      key={tile.action}
      name={tile.name}
      description={tile.description}
      icon={tile.icon}
      bgColor={tile.bgColor}
      action={() => handleClick(tile.action)} />
  ));

  return (
    <div className="App">
      <Header isHome={true} />
      <div className="tiles-wrapper">
        {tilesDisplay}
      </div>
    </div>
  );
}

export default App;
