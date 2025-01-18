
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
      <h1>KETOSUPERCHARGED</h1>
      </Link>
      <Search />
      <Category />
     <Pages />
     </BrowserRouter>
     <h5>&copy; KetoSuperCharged.com 2025 | Created by <a href='https://dariuszjendryczka.com'>Dariusz J</a></h5>
    </div>
  );
}

export default App;
