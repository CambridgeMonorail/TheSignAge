import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';
import { ScreenFrame } from './ScreenFrame';
import {
  DollarSign,
  Users,
  TrendingUp,
  ShoppingCart,
  Activity,
  Eye,
} from 'lucide-react';

const meta: Meta<typeof MetricCard> = {
  title: 'Signage/Primitives/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Metric title/label',
    },
    value: {
      control: 'text',
      description: 'Main metric value',
    },
    change: {
      control: 'text',
      description: 'Change indicator text',
    },
    isPositive: {
      control: 'boolean',
      description: 'Whether the change is positive (green) or negative (red)',
    },
  },
  decorators: [
    (Story) => (
      <ScreenFrame resolution="1080p" scale={0.5}>
        <div className="bg-slate-950 p-8">
          <Story />
        </div>
      </ScreenFrame>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

/**
 * Revenue metric with positive growth
 */
export const Revenue: Story = {
  args: {
    title: 'Total Revenue',
    value: '$1.2M',
    change: '+12.5% vs last month',
    isPositive: true,
    icon: <DollarSign className="w-14 h-14" />,
  },
};

/**
 * User count with negative change
 */
export const Users_Declining: Story = {
  args: {
    title: 'Active Users',
    value: '8,432',
    change: '-3.2% vs last week',
    isPositive: false,
    icon: <Users className="w-14 h-14" />,
  },
};

/**
 * Conversion rate metric with strong positive growth
 */
export const ConversionRate: Story = {
  args: {
    title: 'Conversion Rate',
    value: '24.8%',
    change: '+8.4% vs last quarter',
    isPositive: true,
    icon: <TrendingUp className="w-14 h-14" />,
  },
};

/**
 * Sales volume metric
 */
export const SalesVolume: Story = {
  args: {
    title: 'Orders Today',
    value: '156',
    change: '+22 vs yesterday',
    isPositive: true,
    icon: <ShoppingCart className="w-14 h-14" />,
  },
};

/**
 * System performance metric
 */
export const SystemPerformance: Story = {
  args: {
    title: 'System Load',
    value: '42%',
    change: '+5% vs average',
    isPositive: false,
    icon: <Activity className="w-14 h-14" />,
  },
};

/**
 * Page views with large numbers
 */
export const PageViews: Story = {
  args: {
    title: 'Page Views',
    value: '2.4M',
    change: '+145K this month',
    isPositive: true,
    icon: <Eye className="w-14 h-14" />,
  },
};

/**
 * Dashboard with multiple metrics
 */
export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <MetricCard
        title="Total Revenue"
        value="$1.2M"
        change="+12.5%"
        isPositive={true}
        icon={<DollarSign className="w-14 h-14" />}
      />
      <MetricCard
        title="Active Users"
        value="8,432"
        change="-3.2%"
        isPositive={false}
        icon={<Users className="w-14 h-14" />}
      />
      <MetricCard
        title="Conversion Rate"
        value="24.8%"
        change="+8.4%"
        isPositive={true}
        icon={<TrendingUp className="w-14 h-14" />}
      />
      <MetricCard
        title="Orders"
        value="156"
        change="+22"
        isPositive={true}
        icon={<ShoppingCart className="w-14 h-14" />}
      />
    </div>
  ),
};
