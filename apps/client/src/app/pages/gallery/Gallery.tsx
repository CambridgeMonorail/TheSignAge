import { FC } from 'react';
import { ExampleCard } from './components/ExampleCard';
import { signageExamples } from './signageExamples';

export const GalleryPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8" data-testid="gallery-page">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Signage Examples Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Full-screen examples demonstrating digital signage layouts and
            components. Each example showcases fixed-aspect layouts,
            distance-readable typography, and deterministic rendering designed
            for always-on displays.
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="gallery-grid"
        >
          {signageExamples.map((example) => (
            <ExampleCard key={example.id} example={example} />
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Click any example to view it in full-screen mode. Use your browser's
            back button to return to the gallery.
          </p>
        </footer>
      </div>
    </div>
  );
};
