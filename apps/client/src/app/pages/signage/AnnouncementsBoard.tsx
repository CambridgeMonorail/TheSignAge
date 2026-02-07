import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
import { Calendar, Trophy, Users, Coffee } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: 'Team Building Event',
    description:
      'Join us for our quarterly team building event at the park. Food and drinks provided!',
    date: 'Friday, Feb 14',
    icon: Users,
    category: 'Event',
  },
  {
    id: 2,
    title: 'Q1 Sales Achievement',
    description:
      'Congratulations to the sales team for exceeding Q1 targets by 25%!',
    date: 'This Week',
    icon: Trophy,
    category: 'Celebration',
  },
  {
    id: 3,
    title: 'New Coffee Machine',
    description:
      'The new espresso machine is now available in the break room. Enjoy!',
    date: 'Today',
    icon: Coffee,
    category: 'Facility',
  },
  {
    id: 4,
    title: 'Product Launch Meeting',
    description:
      'All hands meeting to discuss the upcoming product launch. Conference Room A.',
    date: 'Monday, Feb 10 at 2 PM',
    icon: Calendar,
    category: 'Meeting',
  },
];

export const AnnouncementsBoard: FC = () => {
  return (
    <SignageExample>
      <div
        className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 p-16 relative overflow-hidden"
        data-testid="announcements-board"
      >
        {/* Enhanced ambient effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        
        <div className="relative z-10">
          <header className="text-center mb-16">
            <div className="inline-block mb-6 px-8 py-3 bg-pink-500/10 border border-pink-500/30 rounded-full">
              <p className="text-2xl text-pink-300 tracking-widest uppercase">Company News</p>
            </div>
            <h1 className="text-9xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Announcements
            </h1>
            <p className="text-4xl text-white/90 font-light">
              Stay informed about what's happening
            </p>
          </header>

          <div className="max-w-6xl mx-auto space-y-8">
            {announcements.map((announcement, index) => {
              const Icon = announcement.icon;
              return (
                <div
                  key={announcement.id}
                  className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl relative overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-6 flex-1">
                        <div className="p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl shadow-xl">
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-5xl font-bold text-white mb-4">
                            {announcement.title}
                          </h2>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white/20 backdrop-blur-sm text-white text-xl px-5 py-2 rounded-full font-semibold">
                              {announcement.category}
                            </div>
                            <span className="text-2xl text-white/80">
                              {announcement.date}
                            </span>
                          </div>
                          <p className="text-2xl text-white/90 leading-relaxed">
                            {announcement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SignageExample>
  );
};
