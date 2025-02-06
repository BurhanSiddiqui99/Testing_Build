import React from 'react';
import { Card } from 'antd';

interface StatsCardProps {
  text: string;
  value: string | number | undefined;
  icon: React.ReactNode;
  iconBgColor: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  text,
  value,
  icon,
  iconBgColor,
  className = ''
}) => {
  return (
    <Card 
      className={`overflow-hidden hover:shadow-md transition-shadow ${className} rounded-2xl`}
      bodyStyle={{ padding: '1rem' }}
    >
      <div className="flex items-center gap-2">
        <div 
          className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm whitespace-pre-line">{text}</span>
          <span className="text-gray-900 text-xl font-semibold">{value}</span>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;

