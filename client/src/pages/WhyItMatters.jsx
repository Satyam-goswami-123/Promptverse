import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function WhyItMatters() {
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
                        <span>Why It Matters</span>
                    </div>
                    <h1 className="page-title reveal" style={{ transitionDelay: '0.1s' }}>
                        Why Prompt Engineering <span className="gradient-text">Matters</span>
                    </h1>
                    <p className="page-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        In a world increasingly powered by AI, the ability to communicate effectively with language models has become one of the most valuable skills you can possess.
                    </p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="content-wrapper">

                        <div className="content-block reveal">
                            <h2>The AI Revolution is Here</h2>
                            <p>Artificial Intelligence has moved from research labs into everyday tools. From writing emails to generating code, from creating art to analyzing data — AI is transforming how we work, learn, and create.</p>
                            <p>But here's the catch: <strong>AI is only as good as the instructions it receives.</strong> The same AI model can produce wildly different results depending on how you phrase your request. This is where prompt engineering becomes your superpower.</p>

                            <div className="highlight-box">
                                <span className="highlight-label">📊 Did You Know?</span>
                                <p>Studies show that well-engineered prompts can improve AI output quality by up to 50-70% compared to naive, unstructured queries — without changing anything about the model itself.</p>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>Key Benefits</h2>

                            <div className="info-card">
                                <div className="card-icon">🚀</div>
                                <h3>10x Productivity</h3>
                                <p>A well-crafted prompt can save hours of back-and-forth with AI. Instead of multiple attempts to get the right output, a single engineered prompt delivers accurate results on the first try, dramatically boosting your workflow speed.</p>
                            </div>

                            <div className="info-card">
                                <div className="card-icon">🎯</div>
                                <h3>Higher Quality Outputs</h3>
                                <p>Prompt engineering ensures AI responses are precise, well-structured, and contextually relevant. Whether it's content creation, coding, analysis, or research — quality prompts yield quality results.</p>
                            </div>

                            <div className="info-card">
                                <div className="card-icon">💰</div>
                                <h3>Cost Efficiency</h3>
                                <p>For API-based AI usage, every token counts (literally — you pay per token). Efficient prompts reduce token usage while maintaining output quality, directly saving money on AI API costs.</p>
                            </div>

                            <div className="info-card">
                                <div className="card-icon">🛡️</div>
                                <h3>Better Control & Safety</h3>
                                <p>Good prompt engineering helps you control AI behavior, prevent hallucinations, reduce biases in outputs, and ensure the AI stays within appropriate boundaries for your use case.</p>
                            </div>

                            <div className="info-card">
                                <div className="card-icon">🌐</div>
                                <h3>Universal Skill</h3>
                                <p>Whether you're using ChatGPT, Gemini, Claude, Copilot, Midjourney, or any other AI tool — prompt engineering principles apply universally. Learn once, apply everywhere.</p>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>Impact Across Industries</h2>
                            <p>Prompt engineering is reshaping workflows across every sector:</p>

                            <div className="technique-grid">
                                <div className="technique-card">
                                    <span className="technique-badge">Software</span>
                                    <h3>Software Development</h3>
                                    <p>Developers use prompt engineering to generate code, debug errors, write documentation, create test cases, and automate repetitive coding tasks.</p>
                                </div>

                                <div className="technique-card">
                                    <span className="technique-badge">Marketing</span>
                                    <h3>Marketing & Content</h3>
                                    <p>Marketers craft prompts for SEO content, social media posts, ad copy, email campaigns, and brand voice consistency across all channels.</p>
                                </div>

                                <div className="technique-card">
                                    <span className="technique-badge">Education</span>
                                    <h3>Education & Research</h3>
                                    <p>Educators create personalized learning experiences, generate quizzes, summarize research papers, and build interactive study materials.</p>
                                </div>

                                <div className="technique-card">
                                    <span className="technique-badge">Healthcare</span>
                                    <h3>Healthcare</h3>
                                    <p>Medical professionals use AI for preliminary diagnosis support, research summarization, patient education materials, and clinical documentation.</p>
                                </div>

                                <div className="technique-card">
                                    <span className="technique-badge">Legal</span>
                                    <h3>Law & Compliance</h3>
                                    <p>Legal professionals leverage prompts for contract analysis, case research, compliance documentation, and legal brief drafting.</p>
                                </div>

                                <div className="technique-card">
                                    <span className="technique-badge">Finance</span>
                                    <h3>Finance & Analytics</h3>
                                    <p>Analysts use engineered prompts for financial modeling support, report generation, market analysis, and risk assessment summaries.</p>
                                </div>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>Career Opportunities</h2>
                            <p>Prompt engineering has emerged as one of the fastest-growing skills in the job market. Companies are actively seeking professionals who can bridge the gap between human intent and AI capability:</p>
                            <ul>
                                <li><strong>Prompt Engineer:</strong> A dedicated role focused on optimizing AI interactions for products and services.</li>
                                <li><strong>AI Product Manager:</strong> Professionals who understand prompt craft to design better AI-powered user experiences.</li>
                                <li><strong>Content Strategist:</strong> Specialists who leverage AI to scale content operations with consistent quality.</li>
                                <li><strong>AI Consultant:</strong> Experts who help organizations implement effective AI workflows through optimized prompting.</li>
                            </ul>

                            <div className="highlight-box">
                                <span className="highlight-label">💼 Market Insight</span>
                                <p>Roles requiring prompt engineering skills have seen a 300%+ increase in job listings since 2023. This isn't a passing trend — it's a foundational AI skill that will only grow in demand.</p>
                            </div>
                        </div>

                        <div className="page-nav reveal">
                            <NavLink to="/what-is-pe" className="page-nav-link prev">
                                <span className="page-nav-label">&larr; Previous</span>
                                <span className="page-nav-title">What is Prompt Engineering?</span>
                            </NavLink>
                            <NavLink to="/techniques" className="page-nav-link next">
                                <span className="page-nav-label">Next &rarr;</span>
                                <span className="page-nav-title">Prompting Techniques</span>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
