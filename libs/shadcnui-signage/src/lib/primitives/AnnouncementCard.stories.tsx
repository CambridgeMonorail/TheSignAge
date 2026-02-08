import type { Meta, StoryObj } from '@storybook/react';
import { AnnouncementCard } from './AnnouncementCard';
import { ScreenFrame } from './ScreenFrame';
import {
  Calendar,
  PartyPopper,
  Coffee,
  Gift,
  Wrench,
  Bell,
} from 'lucide-react';

const meta: Meta<typeof AnnouncementCard> = {
  title: 'Signage/Primitives/AnnouncementCard',
  component: AnnouncementCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Announcement title',
    },
    description: {
      control: 'text',
      description: 'Announcement description/content',
    },
    date: {
      control: 'text',
      description: 'Date or time information',
    },
    category: {
      control: 'text',
      description: 'Category label',
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
type Story = StoryObj<typeof AnnouncementCard>;

/**
 * Team building event announcement
 */
export const TeamBuilding: Story = {
  args: {
    title: 'Team Building Event',
    description: 'Join us for our quarterly team building at Central Park.',
    date: 'Friday, Feb 14',
    icon: Calendar,
    category: 'Event',
  },
};

/**
 * Celebration announcement
 */
export const CelebrationParty: Story = {
  args: {
    title: 'Company Anniversary Party',
    description: 'Celebrate 10 years with food, drinks, and entertainment!',
    date: 'Saturday, March 2',
    icon: PartyPopper,
    category: 'Celebration',
  },
};

/**
 * Coffee break reminder
 */
export const CoffeeBreak: Story = {
  args: {
    title: 'Afternoon Coffee Break',
    description: 'Fresh coffee and pastries available in the break room.',
    date: 'Daily at 3:00 PM',
    icon: Coffee,
    category: 'Facility',
  },
};

/**
 * Gift or benefit announcement
 */
export const EmployeeBenefits: Story = {
  args: {
    title: 'New Wellness Benefits',
    description: 'Check out our enhanced health and wellness program perks.',
    date: 'Effective Feb 1',
    icon: Gift,
    category: 'Benefits',
  },
};

/**
 * Maintenance notification
 */
export const Maintenance: Story = {
  args: {
    title: 'Scheduled Maintenance',
    description: 'Elevator B will be offline for routine maintenance.',
    date: 'Tomorrow 8-10 AM',
    icon: Wrench,
    category: 'Facility',
  },
};

/**
 * General announcement
 */
export const GeneralAnnouncement: Story = {
  args: {
    title: 'Important Update',
    description: 'Please review the updated parking guidelines.',
    date: 'Posted Feb 8',
    icon: Bell,
    category: 'Notice',
  },
};

/**
 * Long content demonstrating text handling
 */
export const LongContent: Story = {
  args: {
    title: 'Annual Company Summit Registration Now Open',
    description:
      'Register now for our annual company summit featuring keynote speakers, breakout sessions, team activities, and networking opportunities. Early bird pricing available until the end of the month. Space is limited!',
    date: 'June 15-17, 2026',
    icon: Calendar,
    category: 'Major Event',
  },
};

/**
 * Announcement board with multiple items
 */
export const AnnouncementBoard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <AnnouncementCard
        title="Team Building Event"
        description="Join us for quarterly team building at Central Park."
        date="Friday, Feb 14"
        icon={Calendar}
        category="Event"
      />
      <AnnouncementCard
        title="Company Anniversary Party"
        description="Celebrate 10 years with food, drinks, and entertainment!"
        date="Saturday, March 2"
        icon={PartyPopper}
        category="Celebration"
      />
      <AnnouncementCard
        title="Afternoon Coffee Break"
        description="Fresh coffee and pastries in the break room."
        date="Daily at 3:00 PM"
        icon={Coffee}
        category="Facility"
      />
      <AnnouncementCard
        title="New Wellness Benefits"
        description="Check out our enhanced health and wellness program."
        date="Effective Feb 1"
        icon={Gift}
        category="Benefits"
      />
    </div>
  ),
};
