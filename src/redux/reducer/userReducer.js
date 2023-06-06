import { SET_CURRENT_USER, CLEAR_USER } from "../actions/actionsType"; 

const INITIAL_STATE = {
    currentUser: null,
    accessToken: null,
}


const userReducer = (state = INITIAL_STATE, action) => {

      switch(action.type) {
          
             case SET_CURRENT_USER: 
                return ({
                    ...state,
                    currentUser: action.payload.user,
                    accessToken: action.payload.accessToken
                })
            case CLEAR_USER:
                return ({
                    ...state,
                    currentUser: null,
                    accessToken: null
                })

            default:
                return state;


      }


}

export default userReducer;