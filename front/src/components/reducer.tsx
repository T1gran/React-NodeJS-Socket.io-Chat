export default (state: any, action: any) => {
    switch (action.type) {
        case 'JOINED':
            return {
                ...state,
                joined: true,
            }
        default:
            return state;
    }
};