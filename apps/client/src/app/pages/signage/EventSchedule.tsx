import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
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
        className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-950 to-indigo-950 p-16 relative overflow-hidden"
        data-testid="event-schedule"
      >
        {/* Dynamic background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        <div className="relative z-10">
          <header className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full">
              <p className="text-xl text-violet-300 tracking-widest uppercase">Conference Schedule</p>
            </div>
            <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
              Today's Schedule
            </h1>
            <p className="text-3xl text-slate-300">
              Digital Signage Summit 2026 • February 7
            </p>
          </header>

          <div className="max-w-6xl mx-auto space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden group"
              >
                {/* Accent line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${getTrackColor(event.track)}`} />
                
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-3 text-3xl font-bold text-white bg-slate-950/50 px-6 py-3 rounded-xl border border-slate-700/50">
                        <Clock className="w-8 h-8 text-violet-400" />
                        {event.time}
                      </div>
                      <div className={`${getTrackColor(event.track)} text-white text-xl px-6 py-2 rounded-full font-bold shadow-lg`}>
                        {event.track}
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                      {event.title}
                    </h2>
                    <div className="flex items-center gap-8 text-2xl">
                      <span className="text-violet-300 font-semibold">{event.speaker}</span>
                      <div className="flex items-center gap-3 text-slate-400">
                        <MapPin className="w-6 h-6 text-fuchsia-400" />
                        <span>{event.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-violet-600/20 backdrop-blur-sm border border-violet-500/30 rounded-2xl px-12 py-6">
              <p className="text-2xl text-violet-200">
                Download the mobile app for personalized schedule and notifications
              </p>
            </div>
          </footer>
        </div>
      </div>
    </SignageExample>
  );
};
