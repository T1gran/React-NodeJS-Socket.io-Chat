export default (state, action) => {
    switch (action.type) {
        case 'JOINED':
            return {
                ...state,
                joined: true,
                ethSignature: action.payload.ethSignature,
                ethAddress: action.payload.ethAddress, 
            }
        default:
            return state;
    }
};