
import { selectedCandidate } from "@/interfaces/candidates"

export default  function submitButton({ selectedCandidates }: { selectedCandidates: selectedCandidate[] }) {

    const handleVote = async () => {
        try {
            const response = await fetch('api/vote', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedCandidates)
            })
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }

    return (

        <button onClick={handleVote} type="submit">
            ola
        </button>

    )
}