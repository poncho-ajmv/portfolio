import { useEffect, useState } from 'react';
import '../styles/TerminalSimulator.css';
import { useLang } from '../i18n/LanguageContext';

function TerminalSimulator() {
  const { lang, t } = useLang();
  // Cada línea es ['cmd'|'out', texto]: las de comando llevan el prompt $.
  const lines = t('terminal.lines');

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  // matchMedia no existe en jsdom, de ahi el ?. — sin animacion en ese caso.
  const reduced =
    typeof window !== 'undefined' &&
    !!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  // Al cambiar de idioma, reinicia la animación de tipeo desde cero.
  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
  }, [lang]);

  useEffect(() => {
    if (reduced || lineIndex >= lines.length) return;
    const [kind, text] = lines[lineIndex];

    if (charIndex < text.length) {
      const timeout = setTimeout(
        () => setCharIndex((c) => c + 1),
        kind === 'cmd' ? 55 : 20
      );
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 300);
    return () => clearTimeout(timeout);
    // lines se omite a propósito: cambia de identidad en cada render;
    // el reinicio por idioma lo maneja el efecto de arriba.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, lineIndex, reduced]);

  const done = reduced ? lines : lines.slice(0, lineIndex);
  const current = reduced ? null : lines[lineIndex];

  const renderLine = ([kind, text], key) => (
    <div key={key} className="terminal-line">
      {kind === 'cmd' && '> '}
      {text}
      {key === 'cursor' && <span className="cursor">█</span>}
    </div>
  );

  return (
    <div className="terminal-box">
      {done.map((line, i) => renderLine(line, i))}
      {current && renderLine([current[0], current[1].slice(0, charIndex)], 'cursor')}
    </div>
  );
}

export default TerminalSimulator;
