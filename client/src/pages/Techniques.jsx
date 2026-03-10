import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Techniques() {
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
                        <span>Techniques</span>
                    </div>
                    <h1 className="page-title reveal" style={{ transitionDelay: '0.1s' }}>
                        Prompting <span className="gradient-text">Techniques</span>
                    </h1>
                    <p className="page-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        Master the proven strategies that transform basic AI interactions into powerful, precise outputs. Each technique serves a specific purpose and can be combined for maximum effect.
                    </p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="content-wrapper">

                        <div className="content-block reveal">
                            <h2>Techniques Overview</h2>
                            <p>Prompting techniques are structured approaches to crafting AI instructions. Each technique is designed for specific scenarios and can dramatically improve the quality of AI responses.</p>

                            <div className="technique-grid">
                                <div className="technique-card">
                                    <span className="technique-badge">Beginner</span>
                                    <h3>🎯 Zero-Shot</h3>
                                    <p>Direct instruction with no examples provided</p>
                                </div>
                                <div className="technique-card">
                                    <span className="technique-badge">Intermediate</span>
                                    <h3>📝 Few-Shot</h3>
                                    <p>Instructions with example demonstrations</p>
                                </div>
                                <div className="technique-card">
                                    <span className="technique-badge">Advanced</span>
                                    <h3>🔗 Chain-of-Thought</h3>
                                    <p>Step-by-step reasoning guidance</p>
                                </div>
                                <div className="technique-card">
                                    <span className="technique-badge">Intermediate</span>
                                    <h3>🎭 Role-Based</h3>
                                    <p>Assigning expert personas to AI</p>
                                </div>
                                <div className="technique-card">
                                    <span className="technique-badge">Advanced</span>
                                    <h3>🔄 Self-Consistency</h3>
                                    <p>Multiple reasoning paths for reliability</p>
                                </div>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>1. Zero-Shot Prompting</h2>
                            <p>Zero-shot prompting is the simplest technique — you provide a direct instruction to the AI without any examples. The model relies entirely on its training knowledge to understand and complete the task.</p>

                            <h3>When to Use</h3>
                            <ul>
                                <li>Simple, straightforward tasks</li>
                                <li>Well-defined request that doesn't need demonstrations</li>
                                <li>Quick queries where you want fast results</li>
                                <li>Tasks the model likely encountered often during training</li>
                            </ul>

                            <div className="code-example">
                                <div className="code-header">
                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                    <span>Zero-Shot Example</span>
                                </div>
                                <div className="code-body">
                                    <span className="prompt-label">Prompt:</span><br />
                                    <span className="prompt-text">"Classify the following text as positive, negative, or neutral sentiment:</span><br />
                                    <span className="prompt-text">'The new update makes the app much faster and easier to use!'"</span><br /><br />
                                    <span className="response-label">AI Response:</span><br />
                                    <span className="response-text">Sentiment: <strong>Positive</strong></span><br />
                                    <span className="response-text">The text expresses satisfaction with improvements in speed and usability.</span>
                                </div>
                            </div>

                            <div className="highlight-box">
                                <span className="highlight-label">✅ Pro Tip</span>
                                <p>Zero-shot works best when your task is common and well-defined. Add constraints like "respond in one word" or "use only bullet points" to sharpen the output.</p>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>2. Few-Shot Prompting</h2>
                            <p>Few-shot prompting provides the AI with one or more examples (demonstrations) before asking it to perform a task. This helps the model understand the pattern, format, and style you expect.</p>

                            <h3>When to Use</h3>
                            <ul>
                                <li>When zero-shot isn't producing the desired format</li>
                                <li>Custom classification or categorization tasks</li>
                                <li>When you need consistent output formatting</li>
                                <li>Domain-specific tasks with unique conventions</li>
                            </ul>

                            <div className="code-example">
                                <div className="code-header">
                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                    <span>Few-Shot Example</span>
                                </div>
                                <div className="code-body">
                                    <span className="prompt-label">Prompt:</span><br />
                                    <span className="prompt-text">Classify each product review's sentiment:</span><br /><br />
                                    <span className="prompt-text">Review: "Absolutely love this phone! Best purchase ever."</span><br />
                                    <span className="prompt-text">Sentiment: Positive ✅</span><br /><br />
                                    <span className="prompt-text">Review: "Battery died after 2 months. Total waste of money."</span><br />
                                    <span className="prompt-text">Sentiment: Negative ❌</span><br /><br />
                                    <span className="prompt-text">Review: "It works fine, nothing special about it."</span><br />
                                    <span className="prompt-text">Sentiment: Neutral ➖</span><br /><br />
                                    <span className="prompt-text">Review: "The camera quality blew me away, but the screen scratches easily."</span><br />
                                    <span className="prompt-text">Sentiment:</span><br /><br />
                                    <span className="response-label">AI Response:</span><br />
                                    <span className="response-text">Mixed (Leaning Positive) ⚖️</span><br />
                                    <span className="response-text">Strong positive sentiment about camera, negative about durability.</span>
                                </div>
                            </div>

                            <div className="highlight-box">
                                <span className="highlight-label">✅ Pro Tip</span>
                                <p>Use 2-5 diverse examples that cover edge cases. The quality and variety of your examples matters more than the quantity.</p>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>3. Chain-of-Thought (CoT) Prompting</h2>
                            <p>Chain-of-thought prompting encourages the AI to show its reasoning process step by step before arriving at an answer. This technique is especially powerful for complex reasoning, math problems, and multi-step logic tasks.</p>

                            <h3>When to Use</h3>
                            <ul>
                                <li>Math and logical reasoning problems</li>
                                <li>Complex decision-making scenarios</li>
                                <li>When you need to verify the AI's reasoning</li>
                                <li>Multi-step analysis tasks</li>
                            </ul>

                            <div className="code-example">
                                <div className="code-header">
                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                    <span>Chain-of-Thought Example</span>
                                </div>
                                <div className="code-body">
                                    <span className="prompt-label">Prompt:</span><br />
                                    <span className="prompt-text">A store has 45 apples. They sell 12 in the morning and receive a shipment of 30 in the afternoon. Then they sell 18 more before closing. How many apples are left?</span><br /><br />
                                    <span className="prompt-text">Think step by step before giving the final answer.</span><br /><br />
                                    <span className="response-label">AI Response:</span><br />
                                    <span className="response-text">Let me work through this step by step:</span><br />
                                    <span className="response-text">Step 1: Start with 45 apples</span><br />
                                    <span className="response-text">Step 2: Sold 12 in morning &rarr; 45 - 12 = 33 apples</span><br />
                                    <span className="response-text">Step 3: Received 30 in afternoon &rarr; 33 + 30 = 63 apples</span><br />
                                    <span className="response-text">Step 4: Sold 18 before closing &rarr; 63 - 18 = 45 apples</span><br /><br />
                                    <span className="response-text"><strong>Final Answer: 45 apples remain.</strong></span>
                                </div>
                            </div>

                            <div className="highlight-box">
                                <span className="highlight-label">✅ Pro Tip</span>
                                <p>Simply adding "Let's think step by step" to your prompt can significantly improve accuracy on reasoning tasks — sometimes by 40% or more.</p>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>4. Role-Based Prompting</h2>
                            <p>Role-based prompting assigns a specific persona, expertise, or perspective to the AI. This frames the entire conversation and influences the tone, depth, and style of responses.</p>

                            <h3>When to Use</h3>
                            <ul>
                                <li>When you need domain-specific expertise</li>
                                <li>When controlling tone and communication style</li>
                                <li>For creative writing with specific voices</li>
                                <li>When simulating professional consultations</li>
                            </ul>

                            <div className="code-example">
                                <div className="code-header">
                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                    <span>Role-Based Example</span>
                                </div>
                                <div className="code-body">
                                    <span className="prompt-label">Prompt:</span><br />
                                    <span className="prompt-text">You are a senior cybersecurity consultant with 15 years of experience. A small e-commerce startup asks you to review their security practices.</span><br /><br />
                                    <span className="prompt-text">They currently store user passwords in plain text, use HTTP instead of HTTPS, and have no rate limiting on their login page.</span><br /><br />
                                    <span className="prompt-text">Provide your top 3 most critical recommendations with urgency levels.</span><br /><br />
                                    <span className="response-label">AI Response:</span><br />
                                    <span className="response-text"><strong>🔴 CRITICAL — Password Hashing:</strong> Immediately implement bcrypt or Argon2 password hashing. Plain text storage is the most dangerous vulnerability...</span><br /><br />
                                    <span className="response-text"><strong>🔴 CRITICAL — Enable HTTPS:</strong> Deploy SSL/TLS certificates immediately. All data in transit is currently exposed to interception...</span><br /><br />
                                    <span className="response-text"><strong>🟠 HIGH — Rate Limiting:</strong> Implement rate limiting and account lockout policies to prevent brute-force attacks on login endpoints...</span>
                                </div>
                            </div>
                        </div>

                        <div className="content-block reveal">
                            <h2>5. Self-Consistency Prompting</h2>
                            <p>Self-consistency involves asking the AI to generate multiple reasoning paths or solutions, then evaluating which answer appears most consistently. This reduces errors and increases reliability.</p>

                            <h3>When to Use</h3>
                            <ul>
                                <li>High-stakes decisions where accuracy is critical</li>
                                <li>Complex problems with multiple valid approaches</li>
                                <li>When you want to validate AI reasoning</li>
                                <li>Research and analysis tasks</li>
                            </ul>

                            <div className="code-example">
                                <div className="code-header">
                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                    <span>Self-Consistency Example</span>
                                </div>
                                <div className="code-body">
                                    <span className="prompt-label">Prompt:</span><br />
                                    <span className="prompt-text">I need to decide between Python and JavaScript for a data analytics dashboard project.</span><br /><br />
                                    <span className="prompt-text">Approach this from 3 different perspectives:</span><br />
                                    <span className="prompt-text">1. As a backend engineer focused on data processing speed</span><br />
                                    <span className="prompt-text">2. As a frontend developer focused on user experience</span><br />
                                    <span className="prompt-text">3. As a project manager focused on time-to-delivery</span><br /><br />
                                    <span className="prompt-text">After all three analyses, provide a final consensus recommendation.</span>
                                </div>
                            </div>

                            <div className="highlight-box">
                                <span className="highlight-label">✅ Pro Tip</span>
                                <p>Self-consistency is particularly powerful for complex decisions. If 3 out of 3 reasoning paths arrive at the same answer, you can be much more confident in the result.</p>
                            </div>
                        </div>

                        <div className="page-nav reveal">
                            <NavLink to="/why-it-matters" className="page-nav-link prev">
                                <span className="page-nav-label">&larr; Previous</span>
                                <span className="page-nav-title">Why It Matters</span>
                            </NavLink>
                            <NavLink to="/examples" className="page-nav-link next">
                                <span className="page-nav-label">Next &rarr;</span>
                                <span className="page-nav-title">Real-World Examples</span>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
