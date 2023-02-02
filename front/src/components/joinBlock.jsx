import React from "react";
import socket from "../socket";
import axios from 'axios';
import { io } from "socket.io-client";


function JoinBlock({onLogin}) {
    const [ethSignature, setEthSignature] = React.useState('')
    const [ethAddress, setEthAddress] = React.useState('')
    
    const onEnter = () => {
        if (!ethAddress || !ethSignature) {
            return alert('Введите корректные данные');
        }
        else
        {
            const obj =  {
                ethSignature,
                ethAddress,
            };
            axios.post('/chats', obj);
            onLogin(obj);
        } 
    }

    return (
        <div className="join-block">
            <input type="text" 
                placeholder="x-eth-signature" 
                value={ethSignature} 
                onChange={(e)=>setEthSignature(e.target.value)}>
            </input>
            <input type="text" 
                placeholder="x-eth-address" 
                value={ethAddress}
                onChange={(e)=>setEthAddress(e.target.value)}>
            </input>
            <button onClick={onEnter} className="btn btn-success">Enter</button>
        </div>
    );
}

export default JoinBlock