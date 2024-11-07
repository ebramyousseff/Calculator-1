import { ACTIONS } from "./App";



export default function OperatrionButton({dispatch, operation}){
    return(
    <button 
    onClick={() => dispatch({type:ACTIONS.CHOOSE_OPERATION, payload:{operation} })}>
        {operation}
        </button>
    )
}