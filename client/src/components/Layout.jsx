import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                        <Zap className="logo-icon" size={24} color="#a29bfe" />
                        <span className="logo-text">
                            Prompt<span className="logo-accent">Verse</span>
                        </span>
                    </NavLink>
                    <button
                        className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="navMenu">
                        <li><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
                        <li><NavLink to="/what-is-pe" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>What is PE?</NavLink></li>
                        <li><NavLink to="/why-it-matters" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Why It Matters</NavLink></li>
                        <li><NavLink to="/techniques" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Techniques</NavLink></li>
                        <li><NavLink to="/examples" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Examples</NavLink></li>
                        <li><NavLink to="/best-practices" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Best Practices</NavLink></li>
                    </ul>
                    <ThemeToggle />
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer className="footer" id="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <NavLink to="/" className="nav-logo">
                                <Zap className="logo-icon" size={24} color="#a29bfe" />
                                <span className="logo-text">
                                    Prompt<span className="logo-accent">Verse</span>
                                </span>
                            </NavLink>
                            <p className="footer-tagline">Learn prompt engineering the smart way. Built for beginners, loved by professionals.</p>
                        </div>
                        <div className="footer-links">
                            <div className="footer-col">
                                <h4>Learn</h4>
                                <NavLink to="/what-is-pe">What is PE?</NavLink>
                                <NavLink to="/why-it-matters">Why It Matters</NavLink>
                                <NavLink to="/techniques">Techniques</NavLink>
                            </div>
                            <div className="footer-col">
                                <h4>Resources</h4>
                                <NavLink to="/examples">Examples</NavLink>
                                <NavLink to="/best-practices">Best Practices</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} PromptVerse. Built with ❤️ for the AI community.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
