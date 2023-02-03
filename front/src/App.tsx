import * as React from 'react';
// import JoinBlock from './components/joinBlock';
import reducer from './components/reducer';
import socket from './socket';
import RequestPage from './components/requestPage';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chats from './components/chats';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
  });
  function onLogin () {
    dispatch ({
      type: 'JOINED',
    });
    socket.emit('JOIN');
  }
  return (
    <BrowserRouter>
      <div className="App">
        {!state.joined ? (
          <button onClick={onLogin}>Enter</button>
            ) : (
              <div>
                 <NavBar />
                 <Routes>
                  <Route path='/chats' element={<Chats />}/>
                  <Route path='/requests' element={<RequestPage />}/>
                 </Routes>
              </div> 
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
