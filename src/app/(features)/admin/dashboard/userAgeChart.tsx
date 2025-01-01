"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, Select } from "antd"

const data = [
  {
    age: "3-6",
    users: 125,
  },
  {
    age: "7-10",
    users: 168,
  },
  {
    age: "10+",
    users: 120,
  },
]

export default function UserAgeChart() {
  const [selectedBar, setSelectedBar] = useState(1) // Default to middle bar
  const [period, setPeriod] = useState("monthly")

  // Custom gradient definition
  const gradientDef = (
    <defs>
      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  )

  const periodOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ]

  return (
    <Card 
      style={{ width: '100%' }} className="rounded-3xl"
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '16px', fontWeight: 500 }}>Users By Age</span>
          <Select
            defaultValue={period}
            onChange={(value) => setPeriod(value)}
            style={{ width: 110 }}
            options={periodOptions}
            size="small"
          />
        </div>
      }
    >
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 10, left: -20, bottom: 0 }}
            onMouseMove={(state) => {
              if (state?.activeTooltipIndex !== undefined) {
                setSelectedBar(state.activeTooltipIndex)
              }
            }}
          >
            {gradientDef}
            <XAxis
              dataKey="age"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280' }}
              domain={[0, 200]}
            />
            <Bar
              dataKey="users"
              fill="url(#colorGradient)"
              radius={[8, 8, 8, 8]}
              barSize={60}
            />
            {/* User count label */}
            {selectedBar === 1 && (
              <text
                x="50%"
                y={20}
                textAnchor="middle"
                fill="#374151"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {/* {data[selectedBar].users} users */}
              </text>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

