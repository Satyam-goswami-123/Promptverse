import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function WhatIsPE() {
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
                        <span>What is Prompt Engineering?</span>
                    </div>
                    <h1 className="page-title reveal" style={{ transitionDelay: '0.1s' }}>
                        What is <span className="gradient-text">Prompt Engineering?</span>
                    </h1>
                    <p className="page-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        Understanding the art and science of crafting effective instructions that guide AI models to produce accurate, relevant, and high-quality outputs.
                    </p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="content-wrapper">

                        <div className="content-block reveal">
                            <h2>Introduction</h2>
                            <p>Prompt Engineering is the practice of designing and refining input text (prompts) to guide AI language models toward producing desired outputs. Think of it as learning a new language — the language of AI communication.</p>
                            <p>Just as a well-phrased question to a human expert yields a better answer, a well-crafted prompt to an AI model yields more accurate, relevant, and useful responses.</p>

                            <div className="highlight-box">
                                <span className="highlight-label">💡 Key Insight</span>
                                <p>"Prompt Engineering is not just about asking questions — it's about structuring your communication so the AI understands your intent, context, constraints, and desired format."</p>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>Core Concepts</h2>
                            <p>At its foundation, prompt engineering revolves around several key ideas that help you get the most from AI systems:</p>

                            <div className="info-card">
                                <div className="card-icon">🎯</div>
                                <h3>Clarity of Intent</h3>
                                <p>The more specific your prompt, the better the AI can understand what you need. Ambiguous prompts lead to generic, often unhelpful responses. Clear prompts lead to focused, actionable outputs.</p>
                            </div>

                            <div className="info-card">
                                <div className="card-icon">🧩</div>
                                <h3>Context Setting</h3>
                                <p>Providing relevant background information helps the AI model understand the domain, audience, and scope of the task. Context acts as a guide rail for the AI's response generation.</p>
                            </div>

                            <div className="info-card">
                                <div className="card-icon">📐</div>
                                <h3>Structure & Format</h3>
                                <p>Specifying how you want the output structured — as a list, table, code, essay, etc. — dramatically improves the usability of AI responses. The AI is excellent at following formatting cues.</p>
                            </div>

                            <div className="info-card">
                                <div className="card-icon">🔄</div>
                                <h3>Iterative Refinement</h3>
                                <p>Great prompts rarely come out perfect on the first try. Prompt engineering is an iterative process where you refine your instructions based on the AI's responses until you achieve the desired result.</p>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>Anatomy of a Prompt</h2>
                            <p>A well-structured prompt typically contains these key components:</p>

                            <div className="code-example">
                                <div className="code-header">
                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                    <span>Prompt Structure</span>
                                </div>
                                <div className="code-body">
                                    <span className="prompt-label">Role:</span> <span className="prompt-text">"You are a senior data scientist..."</span><br /><br />
                                    <span className="prompt-label">Context:</span> <span className="prompt-text">"I'm working on a customer churn prediction project with 50,000 records..."</span><br /><br />
                                    <span className="prompt-label">Task:</span> <span className="prompt-text">"Recommend the top 3 machine learning algorithms suitable for this use case..."</span><br /><br />
                                    <span className="prompt-label">Format:</span> <span className="prompt-text">"Present each recommendation as a numbered list with: algorithm name, why it's suitable, and pros/cons..."</span><br /><br />
                                    <span className="prompt-label">Constraints:</span> <span className="prompt-text">"Keep each explanation under 100 words. Focus on interpretable models."</span>
                                </div>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>How AI Models Process Prompts</h2>
                            <p>Understanding how AI models work under the hood can help you write better prompts:</p>
                            <ul>
                                <li><strong>Token-based processing:</strong> AI models break your text into tokens (words or sub-words) and predict the most probable next tokens based on your input.</li>
                                <li><strong>Pattern matching:</strong> Models have been trained on vast amounts of text and learn patterns for how to respond to different types of instructions.</li>
                                <li><strong>Context window:</strong> Models consider your entire prompt (within a character/token limit) when generating responses, so every word matters.</li>
                                <li><strong>Temperature & creativity:</strong> Models have parameters that control how "creative" or "deterministic" their responses are — your prompt can influence which mode is best.</li>
                            </ul>
                        </div>

                        <div className="content-block reveal">
                            <h2>Common Misconceptions</h2>

                            <div className="info-card" style={{ borderColor: 'rgba(225, 112, 85, 0.3)' }}>
                                <h3>❌ "AI understands me like a human"</h3>
                                <p>AI doesn't "understand" your intent the way a human colleague might. It processes statistical patterns. Being explicit is always better than being implicit.</p>
                            </div>

                            <div className="info-card" style={{ borderColor: 'rgba(225, 112, 85, 0.3)' }}>
                                <h3>❌ "Longer prompts are always better"</h3>
                                <p>Quality trumps quantity. A concise, well-structured prompt often outperforms a lengthy, unfocused one. Focus on clarity and relevance, not word count.</p>
                            </div>

                            <div className="info-card" style={{ borderColor: 'rgba(225, 112, 85, 0.3)' }}>
                                <h3>❌ "One prompt fits all models"</h3>
                                <p>Different AI models (ChatGPT, Gemini, Claude, etc.) may respond differently to the same prompt. Some models follow instructions more literally, while others interpret them more freely.</p>
                            </div>
                        </div>

                        <div className="page-nav reveal">
                            <NavLink to="/" className="page-nav-link prev">
                                <span className="page-nav-label">&larr; Previous</span>
                                <span className="page-nav-title">Home</span>
                            </NavLink>
                            <NavLink to="/why-it-matters" className="page-nav-link next">
                                <span className="page-nav-label">Next &rarr;</span>
                                <span className="page-nav-title">Why It Matters</span>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
