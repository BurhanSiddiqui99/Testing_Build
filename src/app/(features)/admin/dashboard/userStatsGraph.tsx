"use client"

import React from 'react'
import { Card, Select } from 'antd'
import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip,TooltipProps  } from 'recharts'

interface DataItem {
  name: string;
  value: number;
  color?: string;
}

// const data = [
//   { name: "Android Users", value: 63 },
//   { name: "iOS Users", value: 37 },
// ]

const COLORS = ['#B5179E', '#E0B6E1']

export default function UserStats({ data }: {
  data: any;
}): React.JSX.Element {

  // console.log(data,"hhhhhhhhhhhhhhhhhhh");

  const formattedData = [
    {
      name: 'Android Users',
      value: data && data?.android?.percentage,
      count: data && data?.android?.count,
    },
    {
      name: 'iOS Users',
      value: data && data?.IOS?.percentage,
      count: data && data?.IOS?.count,
    },
  ]

  
  // const { Option } = Select

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0].payload as DataItem;
      const color = payload[0].payload.color;
  
      return (
        <div
          style={{
            border: `2px solid ${color}`,
            borderRadius: '5px',
            padding: '10px',
            backgroundColor: '#fff',
          }}
        >
          <p style={{ margin: 0 }}>{name}: {parseFloat(value.toFixed(1))}%</p>
        </div>
      );
    } return null;
  };
  return (
    <Card className='rounded-3xl'
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Users</span>
          {/* <Select defaultValue="monthly" style={{ width: 100 }}>
            <Option value="daily">Daily</Option>
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="yearly">Yearly</Option>
          </Select> */}
        </div>
      }
      style={{ width: '100%' }}
    >
      <div style={{ height: '200px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={formattedData}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              className="recharts-pie-sector"
            >
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {formattedData.slice(0, 2).map((entry, index) => (
          <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
               
                
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', color: '#666' }}><span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: 5,
              }}
            ></span>{entry.name}</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{entry.count}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

