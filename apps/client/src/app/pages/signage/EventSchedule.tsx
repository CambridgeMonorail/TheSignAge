import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
import { Card, CardHeader, CardTitle } from '@tsa/shadcnui';
import { Badge } from '@tsa/shadcnui';
import { Clock, MapPin } from 'lucide-react';

interface Event {
  time: string;
  title: string;
  speaker: string;
  room: string;
  track: string;
}

const events: Event[] = [
  {
    time: '9:00 AM',
    title: 'Opening Keynote: The Future of Digital Signage',
    speaker: 'Dr. Sarah Chen',
    room: 'Main Auditorium',
    track: 'Keynote',
  },
  {
    time: '10:30 AM',
    title: 'Building Scalable Signage Solutions',
    speaker: 'Michael Rodriguez',
    room: 'Room A',
    track: 'Technical',
  },
  {
    time: '10:30 AM',
    title: 'Design Principles for Distance Viewing',
    speaker: 'Emma Thompson',
    room: 'Room B',
    track: 'Design',
  },
  {
    time: '12:00 PM',
    title: 'Lunch & Networking',
    speaker: 'All Attendees',
    room: 'Cafeteria',
    track: 'Social',
  },
  {
    time: '1:30 PM',
    title: 'Interactive Signage with React',
    speaker: 'James Wilson',
    room: 'Room A',
    track: 'Technical',
  },
  {
    time: '1:30 PM',
    title: 'Content Strategy for Retail Displays',
    speaker: 'Lisa Park',
    room: 'Room B',
    track: 'Business',
  },
  {
    time: '3:00 PM',
    title: 'Closing Remarks & Q&A',
    speaker: 'Conference Organizers',
    room: 'Main Auditorium',
    track: 'Keynote',
  },
];

const getTrackColor = (track: string) => {
  switch (track) {
    case 'Keynote':
      return 'bg-purple-600';
    case 'Technical':
      return 'bg-blue-600';
    case 'Design':
      return 'bg-green-600';
    case 'Business':
      return 'bg-orange-600';
    case 'Social':
      return 'bg-pink-600';
    default:
      return 'bg-slate-600';
  }
};

export const EventSchedule: FC = () => {
  return (
    <SignageExample>
      <div
        className="min-h-screen bg-slate-50 p-12"
        data-testid="event-schedule"
      >
        <header className="text-center mb-12">
          <h1 className="text-7xl font-bold text-slate-900 mb-4">
            Today's Schedule
          </h1>
          <p className="text-3xl text-slate-600">
            Digital Signage Summit 2026 • February 7
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-4">
          {events.map((event, index) => (
            <Card key={index} className="bg-white border-2 border-slate-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                        <Clock className="w-7 h-7" />
                        {event.time}
                      </div>
                      <Badge
                        className={`${getTrackColor(event.track)} text-white text-lg px-4 py-1`}
                      >
                        {event.track}
                      </Badge>
                    </div>
                    <CardTitle className="text-4xl font-bold text-slate-900 mb-2">
                      {event.title}
                    </CardTitle>
                    <div className="flex items-center gap-6 text-xl text-slate-600">
                      <span className="font-semibold">{event.speaker}</span>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>{event.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <footer className="mt-12 text-center">
          <p className="text-2xl text-slate-600">
            Download the mobile app for personalized schedule and notifications
          </p>
        </footer>
      </div>
    </SignageExample>
  );
};
