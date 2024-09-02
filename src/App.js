import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Sidevar from './Sidevar/Sidevar';
import Feed from './Feed/Feed';

function App() {
  return (
    <div>
     <Header/>
     <div className='app-1'>
     <div><Sidevar/></div>
     <div> <Feed/></div>
     </div>
   
     

    </div>
  );
}

export default App;
