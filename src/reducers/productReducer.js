import {FETCH_PRODUCTS} from "../actions/types" ;

const initialState = {items:[]} ;
export default function (state =initialState , action) {
    switch(action.types){
        case FETCH_PRODUCTS:
            return{... state,items:action.payload} ;
            default:
                return state ;
    }
}