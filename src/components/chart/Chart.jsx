import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
        {
          name: 'Page A',
          "CIR": 4000,
          pv: 2400,
          amt: 2400,
        },
        {
            name: 'Page A',
            "CIR": 2000,
          pv: 1398,
          amt: 2210,
        },
        {
            name: 'Page A',
            "CIR": 1000,
          pv: 9800,
          amt: 2290,
        },
        {
            name: 'Page A',
            "CIR": 3000,
          pv: 3908,
          amt: 2000,
        },
        {
            name: 'Page A',
            "CIR": 4000,
          pv: 4800,
          amt: 2181,
        },
        {
            name: 'Page A',
            "CIR": 2000,
          pv: 3800,
          amt: 2500,
        },
        {
            name: 'Page A',
            "CIR": 2000,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
        <div className = "chart">
            <h3 className = "chartTitle">Performance</h3>
            <ResponsiveContainer width = "100%" aspect = {4/1}>
                <LineChart data = {data} >
                    <XAxis dataKey = "name" stroke = "gray"></XAxis>
                    <Line type = "monotone" dataKey = "CIR"></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
