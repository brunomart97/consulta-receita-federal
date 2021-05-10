import ReactDOM from 'react-dom';
import App from './App';
import { SearchProvider } from './hooks/useSearch';

ReactDOM.render(
  <SearchProvider>
    <App />
  </SearchProvider>,
  document.getElementById('root')
);