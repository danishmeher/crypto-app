import React from 'react'
import { useEffect,useState} from 'react'
import Chart from 'react-google-charts'
const Linechart = ({historicalData}) => {
    const [data, setdata] = useState([["Date","Prices"]])
    useEffect(()=>{
        let datacopy = [["Date","Prices"]];
        if(historicalData.prices){
          historicalData.prices.map((item)=>{
           datacopy.push([new Date(item[0]).toLocaleDateString().slice(0,-5),item[1]]) 
          })
          setdata(datacopy)
        }
    },[historicalData])
  return (
    <Chart 
      chartType='LineChart'
      data={data}
      height="100%"
      legendToggle
    />
  )
}

export default Linechart