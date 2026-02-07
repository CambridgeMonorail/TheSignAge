import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
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
    <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
      {/* Ambient glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${isPositive ? 'from-green-500/5 to-transparent' : 'from-red-500/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-medium text-slate-400">
            {title}
          </h3>
          <div className="text-slate-500 opacity-50">
            {icon}
          </div>
        </div>
        
        <div className="text-7xl font-bold text-white mb-6 tracking-tight">
          {value}
        </div>
        
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center text-2xl font-bold ${
              isPositive ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {isPositive ? (
              <ArrowUp className="w-7 h-7 mr-2" />
            ) : (
              <ArrowDown className="w-7 h-7 mr-2" />
            )}
            <span>{change}</span>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${isPositive ? 'from-green-500/50 via-emerald-500/50 to-green-500/50' : 'from-red-500/50 via-rose-500/50 to-red-500/50'}`} />
    </div>
  );
};

export const KPIDashboard: FC = () => {
  return (
    <SignageExample>
      <div
        className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 text-white p-16 relative overflow-hidden"
        data-testid="kpi-dashboard"
      >
        {/* Ambient background effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:60px_60px]" />
        
        <div className="relative z-10">
          <header className="mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <p className="text-xl text-emerald-300 tracking-widest uppercase">Live Metrics</p>
            </div>
            <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
              Performance Dashboard
            </h1>
            <p className="text-3xl text-slate-400">
              Real-time metrics • Updated every 5 minutes
            </p>
          </header>

          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10">
            <MetricCard
              title="Total Revenue"
              value="$1.2M"
              change="+12.5% vs last month"
              isPositive={true}
              icon={<DollarSign className="w-14 h-14" />}
            />
            <MetricCard
              title="Active Users"
              value="24,892"
              change="+8.3% vs last week"
              isPositive={true}
              icon={<Users className="w-14 h-14" />}
            />
            <MetricCard
              title="Conversion Rate"
              value="3.24%"
              change="-0.4% vs last month"
              isPositive={false}
              icon={<TrendingUp className="w-14 h-14" />}
            />
            <MetricCard
              title="Orders Today"
              value="1,847"
              change="+15.7% vs yesterday"
              isPositive={true}
              icon={<ShoppingCart className="w-14 h-14" />}
            />
          </div>

          <footer className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-12 py-6">
              <p className="text-xl text-slate-400">
                Dashboard powered by The Sign Age • Digital signage platform
              </p>
            </div>
          </footer>
        </div>
      </div>
    </SignageExample>
  );
};
