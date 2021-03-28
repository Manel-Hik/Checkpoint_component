import './App.css';
import Address from './profile/Address';
import FullName from './profile/FullName';
import ProfilePhoto from './profile/ProfilePhoto.js';

function App() {
  return (
    <div className="App">     
      <ProfilePhoto/>  
      <FullName/> 
      <Address/>   
    </div>
  );
}

export default App;
