import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
import { Card, CardHeader, CardTitle, CardContent } from '@tsa/shadcnui';
import {
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
} from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const MetricCard: FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
}) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-semibold text-slate-300">
            {title}
          </CardTitle>
          <div className="text-slate-400">{icon}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-6xl font-bold text-white mb-4">{value}</div>
        <div
          className={`flex items-center text-2xl font-semibold ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {isPositive ? (
            <ArrowUp className="w-6 h-6 mr-2" />
          ) : (
            <ArrowDown className="w-6 h-6 mr-2" />
          )}
          <span>{change}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export const KPIDashboard: FC = () => {
  return (
    <SignageExample>
      <div
        className="min-h-screen bg-slate-950 text-white p-12"
        data-testid="kpi-dashboard"
      >
        <header className="mb-12">
          <h1 className="text-7xl font-bold mb-2">Performance Dashboard</h1>
          <p className="text-3xl text-slate-400">
            Real-time metrics • Updated every 5 minutes
          </p>
        </header>

        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
          <MetricCard
            title="Total Revenue"
            value="$1.2M"
            change="+12.5% vs last month"
            isPositive={true}
            icon={<DollarSign className="w-12 h-12" />}
          />
          <MetricCard
            title="Active Users"
            value="24,892"
            change="+8.3% vs last week"
            isPositive={true}
            icon={<Users className="w-12 h-12" />}
          />
          <MetricCard
            title="Conversion Rate"
            value="3.24%"
            change="-0.4% vs last month"
            isPositive={false}
            icon={<TrendingUp className="w-12 h-12" />}
          />
          <MetricCard
            title="Orders Today"
            value="1,847"
            change="+15.7% vs yesterday"
            isPositive={true}
            icon={<ShoppingCart className="w-12 h-12" />}
          />
        </div>

        <footer className="mt-12 text-center">
          <p className="text-xl text-slate-500">
            Dashboard powered by The Sign Age • Digital signage platform
          </p>
        </footer>
      </div>
    </SignageExample>
  );
};
