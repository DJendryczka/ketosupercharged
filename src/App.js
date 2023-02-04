
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to={'/'} style={{ textDecoration: 'none' }} >
      <h1>KETOSUPRCHARGED</h1>
      </Link>
      <Search />
      <Category />
     <Pages />
     </BrowserRouter>
     <h5>&copy; KetoSuperCharged.com 2023 | Created by Dariusz J</h5>
    </div>
  );
}

export default App;
