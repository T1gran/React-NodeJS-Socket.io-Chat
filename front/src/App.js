import React from 'react';
import JoinBlock from './components/joinBlock';
import Chat from './components/chat';
import socket from './socket';
import reducer from './components/reducer';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    ethSignature: null,
    ethAddress: null,
  });

  const onLogin = (obj) => {
    dispatch ({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('JOIN', obj);
  }

  console.log(state);
  return (
    <div className="App">
      {!state.joined? (
        <JoinBlock onLogin={onLogin}></JoinBlock>
      ) : (
        <Chat></Chat>
      )}
    </div>
  );
}

export default App;
