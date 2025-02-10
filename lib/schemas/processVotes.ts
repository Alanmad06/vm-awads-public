import { selectedCandidate, votos } from "@/interfaces/candidates";

type Votes = {
  [key: number]: selectedCandidate;
};

// Transforma los votos en objetos con { category, names }
export function transformVotes(votes: Votes): votos[] {
  return Object.entries(votes).map(([_, value]) => ({
    category: value.category,
    names: value.candidate.name, // Suponiendo que candidate.name es un string
  }));
}

// Transforma la estructura completa de votos
export function transformAllVotes(result: any[]): votos[][] {
  return result.map((item) => transformVotes(item.votes));
}

// Procesa los votos y estructura la información
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

// Prepara los datos para `Recharts`
export function processChartData(votes: votos[]) {
  return votes.map(({ category, names }) => {
    // Contar cuántas veces se repite cada nombre en `names`
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
