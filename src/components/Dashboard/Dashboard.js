import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  // [
  //     {
  //       name: "Page A",
  //       uv: 4000,
  //       pv: 2400,
  //       amt: 2400,
  //     },
  //     {
  //       name: "Page B",
  //       uv: 3000,
  //       pv: 1398,
  //       amt: 2210,
  //     },
  //     {
  //       name: "Page C",
  //       uv: 2000,
  //       pv: 9800,
  //       amt: 2290,
  //     },
  //     {
  //       name: "Page D",
  //       uv: 2780,
  //       pv: 3908,
  //       amt: 2000,
  //     },
  //     {
  //       name: "Page E",
  //       uv: 1890,
  //       pv: 4800,
  //       amt: 2181,
  //     },
  //     {
  //       name: "Page F",
  //       uv: 2390,
  //       pv: 3800,
  //       amt: 2500,
  //     },
  //     {
  //       name: "Page G",
  //       uv: 3490,
  //       pv: 4300,
  //       amt: 2100,
  //     },
  //   ];

  //   export default class Example extends PureComponent {
  //     static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  //     render() {
  //       return (
  //         <ResponsiveContainer width="100%" height="100%">
  //           <LineChart
  //             width={500}
  //             height={300}
  //             data={data}
  //             margin={{
  //               top: 5,
  //               right: 30,
  //               left: 20,
  //               bottom: 5,
  //             }}
  //           >
  //             <CartesianGrid strokeDasharray="3 3" />
  //             <XAxis dataKey="name" />
  //             <YAxis />
  //             <Tooltip />
  //             <Legend />
  //             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
  //             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  //           </LineChart>
  //         </ResponsiveContainer>
  //       );
  //     }
  //   }

  //   const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div>
      <AreaChart
        width={430}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};

export default Dashboard;
