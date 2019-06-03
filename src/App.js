import React, { Component } from 'react';
import { BrowserRouter,Route ,Redirect,Switch} from "react-router-dom";
import WelcomePage from './pages/Welcome';
import NotesPage  from './pages/Notes';
import  AddNotesPage  from './pages/Addnotes';
import MainNavigation from "./Components/Navigation/mainnavigation";
import AddError from "./errorpages/AddError";
import ShowErrors from "./errorpages/showErrors";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <MainNavigation/>
      <Switch>
       <Redirect from="/" to="/welcome" exact/>
       <Route path="/welcome" component={WelcomePage}/>
       <Route path="/notes" component={NotesPage}/>
       <Route path="/addnotes" component={AddNotesPage}/>
       <Route path="/adderror" component={AddError}/>
       <Route path="/errors" component={ShowErrors}/>
       </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
