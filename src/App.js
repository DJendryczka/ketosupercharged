
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to={'/'}>
      <h1>KETOSUPRCHARGED</h1>
      </Link>
      <Search />
      <Category />
     <Pages />
     </BrowserRouter>
    </div>
  );
}

export default App;
