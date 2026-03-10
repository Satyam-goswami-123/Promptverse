import { useEffect } from 'react';
import { useLocalStorage, useMediaQuery } from 'usehooks-ts';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');
    const [isDark, setIsDark] = useLocalStorage('pv-theme-dark', systemPrefersDark);

    useEffect(() => {
        if (isDark) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="theme-toggle"
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
