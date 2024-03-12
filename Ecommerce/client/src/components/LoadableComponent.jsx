import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableComponent = (loader) =>
  Loadable({
    loader,
    loading: Loading, // Composant d'affichage pendant le chargement
    delay: 100, // Délai avant d'afficher le composant de chargement
    timeout: 10000, // Temps d'attente maximal avant de considérer le chargement comme échoué
  });

export default LoadableComponent;