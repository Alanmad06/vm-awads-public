"use client";
import { useEffect, useState } from "react";
import { votos } from "@/interfaces/candidates";
import processVotes, { processChartData } from "@/lib/schemas/processVotes";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "./page.module.css"

export default function StatsChart() {

  const [chartData, setChartData] = useState<{ category: string; data: { name: string; votes: number }[] }[]>([]);

  useEffect(() => {
    const getVotes = async () => {
      try {
        const result = await fetch("/api/getvotes/all");
        const res = await result.json();

        const res1: votos[] = processVotes(res.result) as votos[];
        

        // Procesar los datos para el gráfico
        const processedData = processChartData(res1);
        
        setChartData(processedData);

      } catch (error) {
        console.error(error);
      }
    };
    getVotes();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RESULTADOS</h1>
      {chartData.map(({ category, data }) => (
        <div key={category}  className={styles.chart__container} >
          <h3 className={styles.chart__title} >{category}</h3>
          <ResponsiveContainer  height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis  />
              <Tooltip />
              <Legend />
              <Bar barSize={30} dataKey="votes" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          
        </div>
      ))}
    </div>
  );
}
