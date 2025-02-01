import { selectedCandidate, actionCandidate } from "@/interfaces/candidates";

const reducerCandidates = (state: selectedCandidate[] = [], action: actionCandidate) :selectedCandidate[] => {

    
    switch(action.type){
        case 'ADD_CANDIDATE':
            /* localStorage.setItem('candidates', JSON.stringify([...state, action.payload])); */
            if (action.payload) {
                return [...state, action.payload as selectedCandidate];
            }
            return state;
        case 'REMOVE_CANDIDATE':
            state.pop()
            return [...state]
        case 'UPDATE_CANDIDATE':
            if(action.payload){
                
                const index = state.findIndex((candidate: selectedCandidate) => candidate.category === (action.payload as selectedCandidate).category)
                if(index!==-1){
                    state[index] = action.payload as selectedCandidate;
                    return [...state]
                }
            
            }
        case 'SET_CANDIDATES':
            if(action.payload){
                state = []
                return [...state,...action.payload as selectedCandidate[]]
            }

        default:
            return state;
    }

}

export default reducerCandidates