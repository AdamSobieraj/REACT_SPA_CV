import { useEffect, useState } from 'react';

/**
 * Subtelny efekt maszyny do pisania — cyklicznie „pisze" i „kasuje" listę fraz.
 */
export function useTypewriter(words: string[], typeSpeed = 55, deleteSpeed = 30, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length] ?? '';
    let timeout: number;

    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = window.setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
