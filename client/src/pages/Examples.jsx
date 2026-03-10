import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Examples() {
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
                        <span>Examples</span>
                    </div>
                    <h1 className="page-title reveal" style={{ transitionDelay: '0.1s' }}>
                        Real-World <span className="gradient-text">Examples</span>
                    </h1>
                    <p className="page-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        See prompt engineering in action across different domains. Each example shows both the prompt and the expected AI output to illustrate effective prompting patterns.
                    </p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="content-wrapper">

                        <div className="content-block reveal">
                            <h2>📝 Content Creation</h2>
                            <p>Content creators and marketers can use prompt engineering to generate high-quality, targeted content consistently.</p>

                            <h3>Blog Post Introduction</h3>
                            <div className="code-example">
                                <div className="code-header">
                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                    <span>Content Writing Prompt</span>
                                </div>
                                <div className="code-body">
                                    <span className="prompt-label">Prompt:</span><br />
                                    <span className="prompt-text">You are an expert tech blogger writing for a non-technical audience. Write an engaging introduction (150 words max) for a blog post titled "5 Ways AI Is Changing How We Shop Online."</span><br /><br />
                                    <span className="prompt-text">Requirements:</span><br />
                                    <span className="prompt-text">- Start with a relatable scenario or question</span><br />
                                    <span className="prompt-text">- Use conversational tone, no jargon</span><br />
                                    <span className="prompt-text">- End with a hook that makes readers want to continue</span><br />
                                    <span className="prompt-text">- Include one surprising statistic</span><br /><br />
                                    <span className="response-label">AI Response:</span><br />
                                    <span className="response-text">Have you ever noticed how your favorite online store seems to read your mind? That jacket you were eyeing somehow appears in your feed, the perfect size already selected. That's not coincidence — that's AI at work.</span><br /><br />
                                    <span className="response-text">According to McKinsey, 35% of what consumers purchase on Amazon comes from AI-powered recommendations. From virtual try-ons to chatbots that actually understand you, artificial intelligence is quietly revolutionizing every click, scroll, and purchase you make online.</span><br /><br />
                                    <span className="response-text">Here are five ways AI is transforming your shopping experience — and why the biggest changes are still ahead.</span>
                                </div>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>💻 Software Development</h2>
                            <p>Developers use prompt engineering to write code, debug issues, and generate documentation efficiently.</p>

                            <h3>API Endpoint Creation</h3>
                            <div className="code-example">
                                <div className="code-header">
                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                    <span>Code Generation Prompt</span>
                                </div>
                                <div className="code-body">
                                    <span className="prompt-label">Prompt:</span><br />
                                    <span className="prompt-text">Create a Python Flask REST API endpoint for user registration with the following specifications:</span><br /><br />
                                    <span className="prompt-text">- POST /api/register</span><br />
                                    <span className="prompt-text">- Accept JSON body: {`{ "username", "email", "password" }`}</span><br />
                                    <span className="prompt-text">- Validate: email format, password min 8 chars, username 3-20 chars</span><br />
                                    <span className="prompt-text">- Hash password using bcrypt before storing</span><br />
                                    <span className="prompt-text">- Return appropriate HTTP status codes (201 created, 400 validation error, 409 conflict)</span><br />
                                    <span className="prompt-text">- Include docstring and inline comments</span><br />
                                    <span className="prompt-text">- Follow PEP 8 style guidelines</span><br /><br />
                                    <span className="response-label">Result:</span><br />
                                    <span className="response-text">The AI generates a complete, well-documented Flask endpoint with proper validation, error handling, and security best practices — ready to integrate into a project.</span>
                                </div>
                            </div>
                        </div>

                        <div className="page-nav reveal">
                            <NavLink to="/techniques" className="page-nav-link prev">
                                <span className="page-nav-label">&larr; Previous</span>
                                <span className="page-nav-title">Prompting Techniques</span>
                            </NavLink>
                            <NavLink to="/best-practices" className="page-nav-link next">
                                <span className="page-nav-label">Next &rarr;</span>
                                <span className="page-nav-title">Best Practices</span>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
