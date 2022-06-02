import React from 'react';
import './Dashboard.css';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    const tinyBarChart = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
      
      const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
      ];

      const data3 = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
        },
      ];
      
    return (
        <div className='chart-container'>
        <div className='lineChart'>
            <h3>LineChart</h3><hr />
        <LineChart width={450} height={500} data={data}>
            <Line dataKey='month'></Line>
            <Line dataKey='sell'></Line>
            <Line dataKey='revenue'></Line>
            <Tooltip></Tooltip>
            <YAxis />
            <XAxis dataKey="month" />
        </LineChart>
        </div>
        <div className='barChart'>
        <h3>BarChart</h3><hr />
        <BarChart width={450} height={500} data={tinyBarChart}>
                <Bar dataKey='uv'></Bar>
                <Bar dataKey='pv'></Bar>
                <Bar dataKey='name'></Bar>
                <YAxis />
            <XAxis dataKey="name" />
            </BarChart>
        </div>
        <div className='com-chart'>
        <h3 className='ComposedChart'>ComposedChart</h3><hr />
        <ComposedChart
          width={500}
          height={400}
          data={data3}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
        </div>
        <div className='pie'>
        <h3>PieChart</h3><hr />
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        </div>

       </div>
    );
};

export default Dashboard;