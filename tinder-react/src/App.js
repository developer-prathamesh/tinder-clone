
import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons.js'
import Chats from './Chats.js'
import ChatScreen from './ChatScreen.js'

function App({name}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat'></Header>
            <ChatScreen></ChatScreen>
          </Route>
          <Route path='/chat'>
            <Header backButton='/'></Header>
            <Chats></Chats>
          </Route>
          <Route path='/'>
            <Header></Header>
            <TinderCards></TinderCards>
            <SwipeButtons></SwipeButtons>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
