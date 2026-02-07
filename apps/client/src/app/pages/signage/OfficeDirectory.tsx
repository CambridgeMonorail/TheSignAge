import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
import { Card, CardHeader, CardTitle, CardContent } from '@tsa/shadcnui';
import { Badge } from '@tsa/shadcnui';
import { MapPin } from 'lucide-react';

const directories = [
  { department: 'Reception', floor: 1, room: '101', phone: 'x1001' },
  { department: 'Human Resources', floor: 1, room: '105', phone: 'x1005' },
  { department: 'Marketing', floor: 2, room: '201', phone: 'x2001' },
  { department: 'Sales', floor: 2, room: '205', phone: 'x2005' },
  { department: 'Engineering', floor: 3, room: '301', phone: 'x3001' },
  { department: 'Product Design', floor: 3, room: '305', phone: 'x3005' },
  { department: 'Executive Offices', floor: 4, room: '401', phone: 'x4001' },
  { department: 'Conference Rooms', floor: 4, room: '410-415', phone: 'x4010' },
];

export const OfficeDirectory: FC = () => {
  return (
    <SignageExample>
      <div
        className="min-h-screen bg-slate-100 p-12"
        data-testid="office-directory"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-7xl font-bold mb-4 text-slate-900">
              Office Directory
            </h1>
            <div className="flex items-center justify-center gap-3 text-3xl text-slate-600">
              <MapPin className="w-10 h-10" />
              <span>You are here: Main Lobby</span>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-6 mb-12">
            {directories.map((dir) => (
              <Card
                key={dir.department}
                className="bg-white border-2 border-slate-200 hover:border-blue-400 transition-colors"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-3xl font-bold text-slate-900">
                      {dir.department}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xl px-4 py-2">
                      Floor {dir.floor}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-2xl text-slate-600">
                    <span>Room {dir.room}</span>
                    <span className="font-mono">{dir.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <footer className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <p className="text-2xl">
              For assistance, please contact Reception at extension 1001
            </p>
          </footer>
        </div>
      </div>
    </SignageExample>
  );
};
