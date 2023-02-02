import React from 'react';
import JoinBlock from './components/joinBlock';
import reducer from './components/reducer';
import socket from './socket';
import RequestPage from './components/requestPage';

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
      {!state.joined ? (
        <JoinBlock onLogin={onLogin} />
      ) : (
        <RequestPage />
      )}
    </div>
  );
}

export default App;
