import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, Compass, Award, ExternalLink, Activity, Brain } from 'lucide-react';
import PromptDemoInteractive from '../components/PromptDemoInteractive';

export default function Home() {
    const statNumbersRef = useRef([]);

    useEffect(() => {
        // Reveal on Scroll
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

        // Stat Counter Animation
        const animateCounter = (el) => {
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 1500;
            const start = performance.now();

            const update = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(eased * target);
                if (el) el.textContent = value;
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };
            requestAnimationFrame(update);
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbersRef.current.forEach(num => {
            if (num) statsObserver.observe(num);
        });

        return () => {
            revealObserver.disconnect();
            statsObserver.disconnect();
        };
    }, []);

    return (
        <>
            <section className="hero" id="hero">
                <div className="hero-bg-effects">
                    <div className="hero-orb hero-orb-1"></div>
                    <div className="hero-orb hero-orb-2"></div>
                    <div className="hero-orb hero-orb-3"></div>
                    <div className="hero-grid"></div>
                </div>
                <div className="container hero-content">
                    <div className="hero-badge reveal">
                        <span className="badge-dot"></span>
                        <span>Your Journey into AI Begins Here</span>
                    </div>
                    <h1 className="hero-title reveal" style={{ transitionDelay: '0.1s' }}>
                        Master the Art of<br />
                        <span className="gradient-text">Prompt Engineering</span>
                    </h1>
                    <p className="hero-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        Learn how to communicate effectively with AI models. From zero-shot prompting to advanced chain-of-thought techniques — unlock the full potential of AI with the right words.
                    </p>
                    <div className="hero-cta reveal" style={{ transitionDelay: '0.3s' }}>
                        <NavLink to="/what-is-pe" className="btn btn-primary">
                            Start Learning
                            <ArrowRight size={20} />
                        </NavLink>
                        <NavLink to="/techniques" className="btn btn-secondary">
                            Explore Techniques
                        </NavLink>
                    </div>
                    <div className="hero-stats reveal" style={{ transitionDelay: '0.4s' }}>
                        <div className="stat-item">
                            <span className="stat-number" data-target="6" ref={el => statNumbersRef.current[0] = el}>0</span>
                            <span className="stat-label">Core Modules</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number" data-target="20" ref={el => statNumbersRef.current[1] = el}>0</span><span className="stat-plus">+</span>
                            <span className="stat-label">Real Examples</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number" data-target="5" ref={el => statNumbersRef.current[2] = el}>0</span>
                            <span className="stat-label">Techniques</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="learn-section" id="learn">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-tag">Curriculum</span>
                        <h2 className="section-title">What You'll <span className="gradient-text">Learn</span></h2>
                        <p className="section-desc">A structured path from beginner to proficient prompt engineer, organized into clear and digestible modules.</p>
                    </div>
                    <div className="topics-grid">
                        <NavLink to="/what-is-pe" className="topic-card reveal">
                            <div className="topic-icon"><BookOpen size={32} /></div>
                            <span className="topic-number">01</span>
                            <h3 className="topic-title">What is Prompt Engineering?</h3>
                            <p className="topic-desc">Understand the fundamentals of prompt engineering — the science and art of crafting effective instructions for AI models.</p>
                            <span className="topic-link">Learn More &rarr;</span>
                        </NavLink>

                        <NavLink to="/why-it-matters" className="topic-card reveal" style={{ transitionDelay: '0.1s' }}>
                            <div className="topic-icon"><Activity size={32} /></div>
                            <span className="topic-number">02</span>
                            <h3 className="topic-title">Why It Matters</h3>
                            <p className="topic-desc">Discover why prompt engineering has become a critical skill in the AI era and how it impacts real-world applications.</p>
                            <span className="topic-link">Learn More &rarr;</span>
                        </NavLink>

                        <NavLink to="/techniques" className="topic-card featured reveal" style={{ transitionDelay: '0.2s' }}>
                            <div className="topic-icon"><Brain size={32} /></div>
                            <span className="topic-number">03</span>
                            <h3 className="topic-title">Prompting Techniques</h3>
                            <p className="topic-desc">Master zero-shot, few-shot, chain-of-thought, role-based, and other advanced prompting strategies.</p>
                            <span className="topic-link">Learn More &rarr;</span>
                        </NavLink>

                        <NavLink to="/examples" className="topic-card reveal" style={{ transitionDelay: '0.3s' }}>
                            <div className="topic-icon"><Compass size={32} /></div>
                            <span className="topic-number">04</span>
                            <h3 className="topic-title">Real-World Examples</h3>
                            <p className="topic-desc">See prompting in action with practical, hands-on examples across different use cases and AI platforms.</p>
                            <span className="topic-link">Learn More &rarr;</span>
                        </NavLink>

                        <NavLink to="/best-practices" className="topic-card reveal" style={{ transitionDelay: '0.4s' }}>
                            <div className="topic-icon"><Award size={32} /></div>
                            <span className="topic-number">05</span>
                            <h3 className="topic-title">Best Practices</h3>
                            <p className="topic-desc">Learn proven strategies, tips, and guidelines to consistently write high-quality prompts for any AI tool.</p>
                            <span className="topic-link">Learn More &rarr;</span>
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="demo-section reveal" id="demo">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Live Demo</span>
                        <h2 className="section-title">See the <span className="gradient-text">Difference</span></h2>
                        <p className="section-desc">A simple change in how you phrase your prompt can dramatically transform AI output quality.</p>
                    </div>
                    <PromptDemoInteractive />
                </div>
            </section>

            <section className="cta-section" id="cta">
                <div className="container">
                    <div className="cta-card reveal">
                        <div className="cta-content">
                            <h2 className="cta-title">Ready to Level Up Your AI Skills?</h2>
                            <p className="cta-desc">Start from the basics and progress through advanced techniques at your own pace. No prerequisites required.</p>
                            <NavLink to="/what-is-pe" className="btn btn-primary btn-lg">
                                Begin Your Journey
                                <ArrowRight size={20} />
                            </NavLink>
                        </div>
                        <div className="cta-decoration">
                            <div className="cta-orb cta-orb-1"></div>
                            <div className="cta-orb cta-orb-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
