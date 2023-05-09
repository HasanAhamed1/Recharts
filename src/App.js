import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './App.css';

function App() {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 104010,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 245000,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 670100,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 404050,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 509000,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 610000,
    },
  ];
  return (
    <div className='m-auto w-9/12'>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
    <LineChart data={data} margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 30,
            }}>
        <Line dataKey={"revenue"}></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"investment"}></YAxis>
      </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default App;
