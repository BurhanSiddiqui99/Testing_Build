"use client"

import React from 'react'
import { Card, Select } from 'antd'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: "Android Users", value: 63 },
  { name: "iOS Users", value: 25 },
  { name: "Other", value: 12 }, // Added to make total 100%
]

const COLORS = ['#B5179E', '#E0B6E1', '#F3D1F4']

export default function UserStats() {
  const { Option } = Select

  return (
    <Card className='rounded-3xl'
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Users</span>
          <Select defaultValue="monthly" style={{ width: 100 }}>
            <Option value="daily">Daily</Option>
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="yearly">Yearly</Option>
          </Select>
        </div>
      }
      style={{ width: '100%' }}
    >
      <div style={{ height: '200px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {data.slice(0, 2).map((entry, index) => (
          <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: COLORS[index],
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>{entry.name}</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{entry.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

