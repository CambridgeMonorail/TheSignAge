import { FC, useState } from 'react';
import { Button } from '@tsa/shadcnui';
import { Check, Copy } from 'lucide-react';
import { cn } from '@tsa/shadcnui';

export interface CodeSnippetProps {
  /**
   * The code to display
   */
  code: string;
  /**
   * Programming language for syntax highlighting
   * @default 'tsx'
   */
  language?: 'tsx' | 'typescript' | 'javascript' | 'bash' | 'json' | 'css';
  /**
   * Optional filename to display above the code
   */
  filename?: string;
  /**
   * Whether to show line numbers
   * @default false
   */
  showLineNumbers?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Data test ID for testing
   */
  'data-testid'?: string;
}

/**
 * CodeSnippet displays code with syntax highlighting and copy-to-clipboard functionality.
 * Designed for static builds without Node-only dependencies.
 *
 * @example
 * ```tsx
 * <CodeSnippet
 *   language="tsx"
 *   filename="App.tsx"
 *   code={`import { Button } from '@tsa/shadcnui';\n\nexport const App = () => <Button>Click me</Button>;`}
 * />
 * ```
 */
export const CodeSnippet: FC<CodeSnippetProps> = ({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = false,
  className,
  'data-testid': dataTestId = 'code-snippet',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div
      className={cn('relative group rounded-lg overflow-hidden', className)}
      data-testid={dataTestId}
    >
      {/* Header with filename and copy button */}
      {(filename || true) && (
        <div className="flex items-center justify-between bg-slate-900 px-4 py-2 border-b border-slate-700">
          {filename && (
            <span className="text-sm font-mono text-slate-400">{filename}</span>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="ml-auto text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            data-testid="copy-button"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
      )}

      {/* Code content */}
      <div className="bg-slate-950 overflow-x-auto">
        <pre
          className={cn(
            'p-4 text-sm font-mono text-slate-100',
            showLineNumbers && 'pl-12',
          )}
        >
          {showLineNumbers ? (
            <code className="relative">
              {lines.map((line, index) => (
                <div key={index} className="table-row">
                  <span className="table-cell text-right pr-4 text-slate-600 select-none w-8">
                    {index + 1}
                  </span>
                  <span className="table-cell">{line}</span>
                </div>
              ))}
            </code>
          ) : (
            <code data-language={language}>{code}</code>
          )}
        </pre>
      </div>
    </div>
  );
};
