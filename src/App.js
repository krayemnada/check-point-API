import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from './componenets/footer/Footer';
import NavBar from './componenets/navBar/NavBar';
import UserList from './componenets/userList/UserList';



  

function App() {
  

  
  return (
    <div className="App">
 <NavBar/>
    <UserList/>
    <Footer/>
    </div>
  );
}

export default App;
