import type { Meta, StoryObj } from '@storybook/react';
import { EventCard } from './EventCard';
import { ScreenFrame } from './ScreenFrame';

const meta: Meta<typeof EventCard> = {
  title: 'Signage/Primitives/EventCard',
  component: EventCard,
  tags: ['autodocs'],
  argTypes: {
    time: {
      control: 'text',
      description: 'Event time',
    },
    title: {
      control: 'text',
      description: 'Event title',
    },
    speaker: {
      control: 'text',
      description: 'Speaker or presenter name',
    },
    room: {
      control: 'text',
      description: 'Room or location',
    },
    track: {
      control: 'select',
      options: ['Keynote', 'Technical', 'Design', 'Business', 'Social'],
      description: 'Event track/category',
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
type Story = StoryObj<typeof EventCard>;

/**
 * Keynote session
 */
export const KeynoteSession: Story = {
  args: {
    time: '9:00 AM',
    title: 'Opening Keynote: The Future of Digital Signage',
    speaker: 'Dr. Sarah Chen',
    room: 'Main Auditorium',
    track: 'Keynote',
  },
};

/**
 * Technical workshop
 */
export const TechnicalWorkshop: Story = {
  args: {
    time: '10:30 AM',
    title: 'Building Scalable Signage Systems with React',
    speaker: 'Michael Rodriguez',
    room: 'Room 301',
    track: 'Technical',
  },
};

/**
 * Design session
 */
export const DesignSession: Story = {
  args: {
    time: '2:00 PM',
    title: 'Principles of Effective Visual Communication',
    speaker: 'Emma Thompson',
    room: 'Studio B',
    track: 'Design',
  },
};

/**
 * Business track
 */
export const BusinessSession: Story = {
  args: {
    time: '3:30 PM',
    title: 'ROI Strategies for Digital Signage Deployments',
    speaker: 'James Wilson',
    room: 'Conference Hall A',
    track: 'Business',
  },
};

/**
 * Social event
 */
export const SocialEvent: Story = {
  args: {
    time: '5:00 PM',
    title: 'Networking Reception & Happy Hour',
    speaker: 'Open to all attendees',
    room: 'Rooftop Terrace',
    track: 'Social',
  },
};

/**
 * Long title demonstrating text handling
 */
export const LongTitle: Story = {
  args: {
    time: '11:00 AM',
    title:
      'Advanced Techniques for Real-Time Data Integration in Enterprise Digital Signage Environments',
    speaker: 'Dr. Alexandra Martinez-Thompson',
    room: 'Innovation Lab 5',
    track: 'Technical',
  },
};

/**
 * Custom track color
 */
export const CustomTrackColor: Story = {
  args: {
    time: '4:00 PM',
    title: 'Special Workshop: AI in Content Generation',
    speaker: 'Dr. Kumar Patel',
    room: 'AI Lab',
    track: 'AI',
    trackColor: 'bg-yellow-600',
  },
};

/**
 * Event schedule showing multiple sessions
 */
export const EventSchedule: Story = {
  render: () => (
    <div className="space-y-4">
      <EventCard
        time="9:00 AM"
        title="Opening Keynote: The Future of Digital Signage"
        speaker="Dr. Sarah Chen"
        room="Main Auditorium"
        track="Keynote"
      />
      <EventCard
        time="10:30 AM"
        title="Building Scalable Signage Systems"
        speaker="Michael Rodriguez"
        room="Room 301"
        track="Technical"
      />
      <EventCard
        time="2:00 PM"
        title="Principles of Visual Communication"
        speaker="Emma Thompson"
        room="Studio B"
        track="Design"
      />
      <EventCard
        time="3:30 PM"
        title="ROI Strategies for Digital Signage"
        speaker="James Wilson"
        room="Conference Hall A"
        track="Business"
      />
      <EventCard
        time="5:00 PM"
        title="Networking Reception"
        speaker="Open to all"
        room="Rooftop Terrace"
        track="Social"
      />
    </div>
  ),
};
