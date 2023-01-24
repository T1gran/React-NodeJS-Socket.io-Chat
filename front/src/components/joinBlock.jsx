import React from "react";
import socket from "../socket";

function JoinBlock() {
    return (
        <div className="join-block">
            <input type="text" placeholder="ID"></input>
            <input type="text" placeholder="Password"></input>
            <button className="btn btn-success">ВОЙТИ</button>
        </div>
    );
}

export default JoinBlock