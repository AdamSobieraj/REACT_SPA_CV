import { Reveal } from './Reveal';

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {index}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-ink-900 dark:text-white md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-3 h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent" />
      {subtitle && <p className="mt-4 max-w-2xl text-ink-600 dark:text-ink-300">{subtitle}</p>}
    </Reveal>
  );
}
