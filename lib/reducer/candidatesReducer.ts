import { selectedCandidate, actionCandidate } from "@/interfaces/candidates";

const reducerCandidates = (state: selectedCandidate[], action: actionCandidate) => {
    switch(action.type){
        case 'ADD_CANDIDATE':
            console.log(state)
            /* localStorage.setItem('candidates', JSON.stringify([...state, action.payload])); */
            return [...state, action.payload];
        case 'REMOVE_CANDIDATE':
            return state.filter(candidate => candidate.candidate.id !== action.payload.candidate.id);
        default:
            return state;
    }
   
}

export default reducerCandidates