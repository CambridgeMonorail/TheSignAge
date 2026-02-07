import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
import { Card, CardHeader, CardTitle, CardContent } from '@tsa/shadcnui';
import { Badge } from '@tsa/shadcnui';
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
        className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-12"
        data-testid="announcements-board"
      >
        <header className="text-center mb-12">
          <h1 className="text-8xl font-bold text-white mb-4">Announcements</h1>
          <p className="text-4xl text-white/80">
            Stay informed about what's happening
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6">
          {announcements.map((announcement) => {
            const Icon = announcement.icon;
            return (
              <Card
                key={announcement.id}
                className="bg-white/10 backdrop-blur-md border-white/20"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-4xl font-bold text-white mb-2">
                          {announcement.title}
                        </CardTitle>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="secondary"
                            className="text-lg px-3 py-1"
                          >
                            {announcement.category}
                          </Badge>
                          <span className="text-xl text-white/70">
                            {announcement.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl text-white/90 leading-relaxed">
                    {announcement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </SignageExample>
  );
};
