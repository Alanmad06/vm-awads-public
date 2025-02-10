import { selectedCandidate, votos } from "@/interfaces/candidates";

type Votes = {
  [key: number]: selectedCandidate;
};


export function transformVotes(votes: Votes): votos[] {
  return Object.entries(votes).map(([, value]) => ({
    category: value.category,
    names: value.candidate.name, 
  }));
}

export function transformAllVotes(result: any[]): votos[][] {
  return result.map((item) => transformVotes(item.votes));
}

export default function processVotes(result: any[]): votos[] {
  const res: votos[][] = transformAllVotes(result);
  const newArray: votos[] = [];

  try {
    for (let i = 0; i < res[0].length; i++) {
      const arr: string[] = [];
      for (let j = 0; j < res.length; j++) {
        if (res[j][i]) {
          arr.push(res[j][i].names as string);
        }
      }
      newArray.push({ category: res[0][i].category, names: arr });
    }

    return newArray;
  } catch (e) {
    console.log(e);
    return [];
  }
}


export function processChartData(votes: votos[]) {
  return votes.map(({ category, names }) => {
  
    const nameCounts = (Array.isArray(names) ? names : [names]).reduce<Record<string, number>>((acc, name) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});

    // Convertirlo en un array de objetos para Recharts
    const chartData = Object.entries(nameCounts).map(([name, count]) => ({
      name,
      votes: count,
    }));

    return { category, data: chartData };
  });
}
