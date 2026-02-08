import type { Meta, StoryObj } from '@storybook/react';
import { ScreenFrame } from './ScreenFrame';

const meta: Meta<typeof ScreenFrame> = {
  title: '1-Signage/Primitives/ScreenFrame',
  component: ScreenFrame,
  tags: ['autodocs'],
  argTypes: {
    resolution: {
      control: 'select',
      options: ['1080p', '4k', 'portrait-1080p'],
      description: 'Target resolution for the signage screen',
    },
    scale: {
      control: { type: 'range', min: 0.1, max: 1, step: 0.1 },
      description: 'Scale factor for preview',
    },
    showSafeArea: {
      control: 'boolean',
      description: 'Show safe area overlay for QA',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScreenFrame>;

/**
 * Default 1080p landscape resolution
 */
export const Default1080p: Story = {
  args: {
    resolution: '1080p',
    scale: 0.4,
    showSafeArea: false,
    children: (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="text-center">
          <h1 className="text-8xl font-bold">1920 × 1080</h1>
          <p className="mt-4 text-3xl">16:9 Aspect Ratio</p>
        </div>
      </div>
    ),
  },
};

/**
 * 4K ultra HD resolution
 */
export const Resolution4K: Story = {
  args: {
    resolution: '4k',
    scale: 0.2,
    showSafeArea: false,
    children: (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-white">
        <div className="text-center">
          <h1 className="text-9xl font-bold">3840 × 2160</h1>
          <p className="mt-6 text-4xl">4K Ultra HD</p>
          <p className="mt-2 text-3xl">16:9 Aspect Ratio</p>
        </div>
      </div>
    ),
  },
};

/**
 * Portrait 1080p resolution for vertical displays
 */
export const PortraitMode: Story = {
  args: {
    resolution: 'portrait-1080p',
    scale: 0.3,
    showSafeArea: false,
    children: (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="text-center">
          <h1 className="text-8xl font-bold">1080 × 1920</h1>
          <p className="mt-4 text-3xl">Portrait Mode</p>
          <p className="mt-2 text-2xl">9:16 Aspect Ratio</p>
        </div>
      </div>
    ),
  },
};

/**
 * Safe area overlay for reviewing content margins
 */
export const WithSafeArea: Story = {
  args: {
    resolution: '1080p',
    scale: 0.4,
    showSafeArea: true,
    children: (
      <div className="flex h-full flex-col items-center justify-between bg-slate-900 p-16 text-white">
        <div className="text-center">
          <h1 className="text-7xl font-bold">Safe Area Preview</h1>
          <p className="mt-4 text-2xl">
            Red dashed line shows 5% safe area margin
          </p>
        </div>
        <div className="text-center">
          <p className="text-xl text-slate-400">
            Keep important content within the safe area
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Example with realistic signage content
 */
export const RealisticContent: Story = {
  args: {
    resolution: '1080p',
    scale: 0.4,
    showSafeArea: false,
    children: (
      <div className="flex h-full flex-col bg-white">
        <header className="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-8">
          <div className="text-4xl font-bold text-slate-900">
            Digital Signage Demo
          </div>
          <div className="text-2xl text-slate-600">
            Friday, Feb 7, 2026 • 11:35 AM
          </div>
        </header>
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-slate-900">Welcome</h1>
            <p className="mt-6 text-4xl text-slate-600">
              To our digital experience
            </p>
          </div>
        </main>
        <footer className="border-t border-slate-200 bg-slate-50 p-6 text-center text-xl text-slate-500">
          Powered by shadcnui-signage
        </footer>
      </div>
    ),
  },
};
