"use server"
import { votos } from "@/interfaces/candidates";
import processVotes, { processChartData } from "../schemas/processVotes";

export default async function getResults() {
    try{
     const result = await fetch(process.env.AUTH_URL+"/api/getvotes/all");
        const res = await result.json();
        const res1: votos[] = processVotes(res.result) as votos[];
        const chartData = processChartData(res1)
        return chartData
    }catch(e){
        console.log(e)
    }

}