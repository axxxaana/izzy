import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { BaseComponentProps } from '../../types';

interface DeliverableItem {
  id: string;
  name: string;
  status: 'delivered' | 'in-progress' | 'pending';
}

interface DeliverablesSectionProps extends BaseComponentProps {
  deliverables?: DeliverableItem[];
}

const defaultDeliverables: DeliverableItem[] = [
  {
    id: '1',
    name: 'Brand Audit',
    status: 'delivered'
  },
  {
    id: '2',
    name: 'Messaging',
    status: 'delivered'
  },
  {
    id: '3',
    name: 'Content',
    status: 'in-progress'
  }
];

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ 
  className = '',
  deliverables = defaultDeliverables 
}) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return (
          <Badge className="bg-[#e44782] text-white hover:bg-[#e44782]/90 rounded-full px-4 py-1">
            Delivered
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge className="bg-[#fecaca] text-[#e44782] hover:bg-[#fecaca]/90 rounded-full px-4 py-1">
            In Progress
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100/90 rounded-full px-4 py-1">
            Pending
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={`w-full max-w-sm bg-white shadow-lg rounded-3xl overflow-hidden ${className}`}>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-900">
          Your Deliverables
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {deliverables.map((deliverable) => (
          <div 
            key={deliverable.id}
            className="flex items-center justify-between py-2"
          >
            <span className="text-gray-900 font-medium">
              {deliverable.name}
            </span>
            {getStatusBadge(deliverable.status)}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}; 