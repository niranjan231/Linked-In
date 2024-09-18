import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Sidevar from './Sidevar/Sidevar';
import Feed from './Feed/Feed';
import Rightvar from './Rightvar/Rightvar';

function App() {
  return (
    <div>
     <Header/>
     <div className='app-1'>
     <div><Sidevar/></div>
     <div> <Feed/></div>
     <div><Rightvar/></div>
     </div>
    </div>
  );
}

export default App;
