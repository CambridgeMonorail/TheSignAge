import { FC } from 'react';
import { SignageExample } from './components/SignageExample';

export const WelcomeScreen: FC = () => {
  return (
    <SignageExample>
      <div
        className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
        data-testid="welcome-screen"
      >
        <div className="text-center px-8 max-w-6xl">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 tracking-tight">
            Welcome
          </h1>
          <p className="text-4xl md:text-5xl text-white/90 font-light mb-4">
            to The Sign Age
          </p>
          <p className="text-2xl md:text-3xl text-white/80 font-light">
            Digital Signage as Software
          </p>
        </div>
      </div>
    </SignageExample>
  );
};
