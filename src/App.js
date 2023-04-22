import Pages from './pages/Pages';
import Catagories from './components/Catagories';
import { HashRouter } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App" style={{padding:"0px 5vw"}}>
      <HashRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"}>delicious</Logo>
        </Nav>
        <Search/>
        <Catagories/>
        <Pages/>
      </HashRouter>
    </div>
  );
}

const Logo=styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two',cursive;
  `
  const Nav=styled.div`
  padding:2rem 0rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  svg{
    font-size:2rem;
    cursor:pointer;
  }
`
export default App;
