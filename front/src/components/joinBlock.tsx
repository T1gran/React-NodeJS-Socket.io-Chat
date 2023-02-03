import * as React from 'react';

function JoinBlock(onLogin: Function) {
    const onEnter = () => {
        onLogin();
    }

    return (
        <div className="join-block">
            <button onClick={onEnter}>Enter</button>
        </div>
    );
}

export default JoinBlock