export interface Candidate {
    id: string;
    src: string;
    alt: string;
    name : string;
}

export interface selectedCandidate{
    category : string;
    candidate : Candidate
}

export interface actionCandidate {
    type : string;
    payload? : selectedCandidate;
}

export interface CandidatesContextProps {
    candidates: selectedCandidate[];
    dispatch: React.Dispatch<actionCandidate>;
}
