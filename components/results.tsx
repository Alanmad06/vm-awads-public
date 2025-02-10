'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "./styles/results.module.css"
import getResults from "@/lib/db/getResults";
import { useEffect, useState } from "react";
import ResultsSkeleton from "./suspense/resultsSkeleton";


export default  function Results(){

    const [ChartData, setChartData] = useState<{ category: string; data: { name: string; votes: number; }[]; }[]>([])
    const [loading , setLoading]= useState(true)

    useEffect(()=>{
        const getData = async ()=>{
            const data = await getResults() 
            if (data) {
                setChartData(data)
            }
            setLoading(false)
        }

        getData()

    },[])


            
    return(
        <>
        {(loading)?<ResultsSkeleton/>:ChartData?.map(({ category, data }) => (
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
          </>
    )
}