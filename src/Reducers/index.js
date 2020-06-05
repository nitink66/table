const rootReducer = (state= [] ,action  ) => {

    switch(action.type){
        case 'SUBMIT':
        let newState = [ ...state, action.value ]
        return newState;

        default: return state;
    }
     

}
 


export default rootReducer;