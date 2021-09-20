import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Allpets from './components/Allpets';
import Newpet from './components/Newpet';
import Editpet from './components/Editpet';
import Viewpet from './components/Viewpet';
import house from './images/house.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <div className="col navbar">
        <img className="logo" src={house} alt="house icon"></img>
        <h1 className="col light-blue text-start">Pet Shelter</h1>
      </div>
      <Switch>
        <Route exact path = "/">
          <Allpets></Allpets>
        </Route>
        <Route exact path = "/pets/new">
          <Newpet></Newpet>
        </Route>
        <Route exact path = "/pets/:id/edit">
          <Editpet></Editpet>
        </Route>
        <Route exact path = "/pets/:id">
          <Viewpet></Viewpet>
        </Route>
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
