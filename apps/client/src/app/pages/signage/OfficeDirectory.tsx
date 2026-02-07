import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
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
        className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-16 relative overflow-hidden"
        data-testid="office-directory"
      >
        {/* Ambient lighting effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <header className="text-center mb-16">
            <h1 className="text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Office Directory
            </h1>
            <div className="inline-flex items-center gap-4 text-3xl text-cyan-300 bg-blue-950/50 backdrop-blur-sm border border-blue-800/50 rounded-full px-8 py-4">
              <MapPin className="w-10 h-10" />
              <span>You are here: Main Lobby</span>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-8 mb-16">
            {directories.map((dir, index) => (
              <div
                key={dir.department}
                className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-2xl transform transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-4xl font-bold text-white">
                    {dir.department}
                  </h2>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl px-5 py-2 rounded-full font-bold shadow-lg">
                    Floor {dir.floor}
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent mb-6" />
                <div className="flex justify-between items-center text-2xl">
                  <span className="text-cyan-300 font-semibold">Room {dir.room}</span>
                  <span className="font-mono text-blue-300">{dir.phone}</span>
                </div>
              </div>
            ))}
          </div>

          <footer className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white rounded-3xl p-10 text-center shadow-2xl border border-blue-500/50">
            <p className="text-3xl font-medium">
              For assistance, please contact Reception at extension 1001
            </p>
          </footer>
        </div>
      </div>
    </SignageExample>
  );
};
