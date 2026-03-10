import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function BestPractices() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));
        return () => revealObserver.disconnect();
    }, []);

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="page-breadcrumb reveal">
                        <NavLink to="/">Home</NavLink>
                        <span className="breadcrumb-separator">›</span>
                        <span>Best Practices</span>
                    </div>
                    <h1 className="page-title reveal" style={{ transitionDelay: '0.1s' }}>
                        Prompt Engineering <span className="gradient-text">Best Practices</span>
                    </h1>
                    <p className="page-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        Learn proven strategies, tips, and guidelines to consistently write high-quality prompts for any AI tool.
                    </p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="content-wrapper">

                        <div className="content-block reveal">
                            <h2>The Golden Rules</h2>
                            <p>Following these best practices will help you get the most out of interacting with AI models:</p>

                            <ul className="practice-list">
                                <li className="practice-item">
                                    <div className="practice-number">1</div>
                                    <div className="practice-content">
                                        <h3>Be Specific and Explicit</h3>
                                        <p>Provide detailed context and lay out clear constraints. Avoid assumptions that the AI knows what you mean.</p>
                                    </div>
                                </li>
                                <li className="practice-item">
                                    <div className="practice-number">2</div>
                                    <div className="practice-content">
                                        <h3>Start Simple, Iterate Incrementally</h3>
                                        <p>Don't try to build the ultimate prompt on the first try. Start with a clear instruction, and modify it based on the output you receive.</p>
                                    </div>
                                </li>
                                <li className="practice-item">
                                    <div className="practice-number">3</div>
                                    <div className="practice-content">
                                        <h3>Focus on Output Formatting</h3>
                                        <p>Always tell the AI how you want the answer structured (e.g., table, bullet list, JSON, code block), as this vastly reduces hallucination and improves readability.</p>
                                    </div>
                                </li>
                                <li className="practice-item">
                                    <div className="practice-number">4</div>
                                    <div className="practice-content">
                                        <h3>Provide Examples (Few-Shot)</h3>
                                        <p>If you want a highly specific format or tone, providing 1-2 examples of inputs and desired outputs works better than a lengthy description.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="page-nav reveal">
                            <NavLink to="/examples" className="page-nav-link prev">
                                <span className="page-nav-label">&larr; Previous</span>
                                <span className="page-nav-title">Examples</span>
                            </NavLink>
                            <NavLink to="/" className="page-nav-link next">
                                <span className="page-nav-label">Next &rarr;</span>
                                <span className="page-nav-title">Home</span>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
