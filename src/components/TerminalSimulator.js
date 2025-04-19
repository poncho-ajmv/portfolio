import { useEffect, useState } from 'react';
import '../styles/TerminalSimulator.css';

const commands = [
  '> whoami',
  'poncho_ajmv@portfolio',
  '> cat me.txt',
  'Systems Engineering student • Linux user • Freelance developer',
  'Interested in cybersecurity, open source, and tech-driven businesses.'
];

function TerminalSimulator() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < commands.length) {
      if (charIndex < commands[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + commands[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 30);

        return () => clearTimeout(timeout);
      } else {
        setDisplayedLines((prev) => [...prev, commands[lineIndex]]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex(lineIndex + 1);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="terminal-box">
      {displayedLines.map((line, i) => (
        <div key={i} className="terminal-line">{line}</div>
      ))}
      {lineIndex < commands.length && (
        <div className="terminal-line">{currentLine}<span className="cursor">█</span></div>
      )}
    </div>
  );
}

export default TerminalSimulator;
