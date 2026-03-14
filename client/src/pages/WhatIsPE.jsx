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

                        <div className="content-block reveal">
                            <h2>The AI Revolution is Here (Why It Matters)</h2>
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
                            <NavLink to="/" className="page-nav-link prev">
                                <span className="page-nav-label">&larr; Previous</span>
                                <span className="page-nav-title">Home</span>
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
