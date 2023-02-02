import React from "react";
import socket from "../socket";

const RequestPage = () => {
    const [friendEthAddress, setFriendEthAddress] = React.useState('')
    const request = () => {
        if (!friendEthAddress) {
            return alert('Wrong address');
        }
        else
        {
            const data =  {
                friendEthAddress
            };
            socket.emit('createConversationRequest', data);
            alert("The request has been sent")
        } 
    }
    return(
        <div>
            <input type="text" 
                placeholder="Enter friend address" 
                value={friendEthAddress}
                onChange={(e)=>setFriendEthAddress(e.target.value)}/>
            <button onClick={request}>Send request</button>
        </div>
    )
}

export default RequestPage;