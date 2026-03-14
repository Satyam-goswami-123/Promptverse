import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Play, Sparkles, Wand2, Terminal, Copy, CheckCircle, ArrowRight, CornerDownRight } from 'lucide-react';

export default function Playground() {
    const [activeTab, setActiveTab] = useState('live'); // 'live' or 'improver'
    const [copiedStates, setCopiedStates] = useState({});

    // Live Playground State
    const [livePrompt, setLivePrompt] = useState('');
    const [liveOutput, setLiveOutput] = useState('');
    const [isGeneratingLive, setIsGeneratingLive] = useState(false);

    // Prompt Improver State
    const [simplePrompt, setSimplePrompt] = useState('');
    const [improvedPrompt, setImprovedPrompt] = useState('');
    const [isImproving, setIsImproving] = useState(false);

    const outputRef = useRef(null);

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

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedStates({ ...copiedStates, [id]: true });
        setTimeout(() => {
            setCopiedStates({ ...copiedStates, [id]: false });
        }, 2000);
    };

    // Simulated "AI" generation for the Live Playground
    const handleLiveGenerate = () => {
        if (!livePrompt.trim()) return;
        
        setLiveOutput('');
        setIsGeneratingLive(true);
        
        // Setup mock response
        const fallbackResponse = `Here is a simulated response to your prompt: "${livePrompt}".\n\n1. Point One: The system processes your request.\n2. Point Two: It returns a formatted text output.\n3. Conclusion: This is an interactive playground!`;
        const mockResponseText = livePrompt.toLowerCase().includes('dog') ? 
            "Dogs are widely known as \"man's best friend\". They were the first species to be domesticated and have been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes. Studies show interacting with dogs can boost oxytocin and lower cortisol levels." : 
            fallbackResponse;

        // Simulate typing
        let i = 0;
        const typeInterval = setInterval(() => {
            setLiveOutput(prev => prev + mockResponseText.charAt(i));
            i++;
            if (i >= mockResponseText.length) {
                clearInterval(typeInterval);
                setIsGeneratingLive(false);
            }
            if (outputRef.current) {
                outputRef.current.scrollTop = outputRef.current.scrollHeight;
            }
        }, 15);
    };

    // Simulated "AI" improvement algorithm
    const handleImprovePrompt = () => {
        if (!simplePrompt.trim()) return;
        
        setIsImproving(true);
        setImprovedPrompt('');
        
        setTimeout(() => {
            const contextText = simplePrompt;
            setIsImproving(false);
            setImprovedPrompt(`Act as an expert in the relevant field regarding: "${contextText}".

Please provide a highly detailed, extremely accurate, and structured response. 
Follow these constraints:
1. Begin with a brief executive summary.
2. Break down the core concepts into a bulleted list.
3. Use a professional, objective tone.
4. Ensure all information is easily scannable and free of jargon unprompted.

If you need any clarifying information before proceeding, please ask one question first. Otherwise, proceed with the analysis.`);
            
            setTimeout(() => {
                document.getElementById('improver-result')?.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }, 1500); // 1.5s thinking time
    };

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="page-breadcrumb reveal">
                        <NavLink to="/">Home</NavLink>
                        <span className="breadcrumb-separator">›</span>
                        <span>Playground</span>
                    </div>
                    <h1 className="page-title reveal" style={{ transitionDelay: '0.1s' }}>
                        Prompt <span className="gradient-text">Studio</span>
                    </h1>
                    <p className="page-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        Test your ideas instantly in the Live Playground or use the Prompt Improver to turn basic ideas into professional-grade structures.
                    </p>
                </div>
            </section>

            <section className="page-content" style={{ paddingBottom: '6rem' }}>
                <div className="container">
                    
                    {/* Tool Selector Tabs */}
                    <div className="tool-tabs-container reveal">
                        <div className="tool-tabs">
                            <button 
                                className={`tool-tab ${activeTab === 'live' ? 'active' : ''}`}
                                onClick={() => setActiveTab('live')}
                            >
                                <Terminal size={20} />
                                Live Playground
                            </button>
                            <button 
                                className={`tool-tab ${activeTab === 'improver' ? 'active' : ''}`}
                                onClick={() => setActiveTab('improver')}
                            >
                                <Wand2 size={20} />
                                Prompt Improver
                            </button>
                        </div>
                    </div>

                    <div className="content-wrapper glow-box reveal" style={{ marginTop: '2rem', padding: '2rem', borderRadius: '1rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                        
                        {/* -------------------- LIVE PLAYGROUND -------------------- */}
                        {activeTab === 'live' && (
                            <div className="tool-section fade-in">
                                <div className="text-center" style={{ marginBottom: '2rem' }}>
                                    <h2 style={{ fontSize: 'var(--fs-2xl)', marginBottom: '0.5rem' }}>Live Test Environment</h2>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Write a prompt and simulate an AI response in real-time. Try entering "Tell me about dogs".
                                    </p>
                                </div>

                                <div className="playground-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', minHeight: '400px' }}>
                                    
                                    {/* Input Pane */}
                                    <div className="pg-input-pane" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Terminal size={18} color="var(--color-primary-light)" /> System Prompt
                                            </span>
                                        </div>
                                        <textarea 
                                            className="custom-textarea"
                                            value={livePrompt}
                                            onChange={(e) => setLivePrompt(e.target.value)}
                                            placeholder="Type your prompt here..."
                                            style={{ flex: 1, minHeight: '300px', resize: 'vertical' }}
                                        />
                                        <button 
                                            className="btn btn-primary"
                                            onClick={handleLiveGenerate}
                                            disabled={isGeneratingLive || !livePrompt.trim()}
                                            style={{ marginTop: '1rem', justifyContent: 'center' }}
                                        >
                                            <Play size={18} fill="currentColor" /> Generate Output
                                        </button>
                                    </div>

                                    {/* Output Pane */}
                                    <div className="pg-output-pane" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Sparkles size={18} color="var(--color-accent)" /> Simulated Output
                                            </span>
                                        </div>
                                        <div 
                                            ref={outputRef}
                                            className="output-display" 
                                            style={{ flex: 1, minHeight: '300px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '1rem', overflowY: 'auto', whiteSpace: 'pre-wrap', lineHeight: '1.6', position: 'relative' }}
                                        >
                                            {!liveOutput && !isGeneratingLive && (
                                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                                                    <Sparkles size={32} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                                    <p>Output will appear here</p>
                                                </div>
                                            )}
                                            {liveOutput}
                                            {isGeneratingLive && <span className="caret-blink">|</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* -------------------- PROMPT IMPROVER -------------------- */}
                        {activeTab === 'improver' && (
                            <div className="tool-section fade-in">
                                <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                                    <h2 style={{ fontSize: 'var(--fs-2xl)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                        <Wand2 size={24} color="var(--color-primary-light)" /> Prompt Auto-Improver
                                    </h2>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Enter a simple, basic prompt. Our tool will rewrite it using advanced prompt engineering frameworks (like Role, Task, Format) to make it highly effective.
                                    </p>
                                </div>

                                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                                    <div className="improver-input-box" style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-border)', marginBottom: '2rem' }}>
                                        <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '600' }}>Your Basic Request:</label>
                                        <textarea
                                            className="custom-textarea"
                                            value={simplePrompt}
                                            onChange={(e) => setSimplePrompt(e.target.value)}
                                            placeholder="e.g. Write a blog post about artificial intelligence..."
                                            style={{ width: '100%', minHeight: '120px', marginBottom: '1.5rem' }}
                                        />
                                        <button 
                                            className="btn btn-primary"
                                            onClick={handleImprovePrompt}
                                            disabled={isImproving || !simplePrompt.trim()}
                                            style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}
                                        >
                                            {isImproving ? (
                                                <span className="typing-indicator" style={{ display: 'inline-block' }}>Analyzing and Rewriting...</span>
                                            ) : (
                                                <><Wand2 size={20} /> Upgrade My Prompt</>
                                            )}
                                        </button>
                                    </div>

                                    {improvedPrompt && (
                                        <div id="improver-result" className="fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ marginBottom: '1rem', color: 'var(--color-primary-light)' }}>
                                                <CornerDownRight size={32} />
                                            </div>
                                            <div className="code-example" style={{ margin: 0, width: '100%' }}>
                                                <div className="code-header" style={{ background: 'linear-gradient(90deg, rgba(108, 92, 231, 0.2) 0%, rgba(255,255,255,0.05) 100%)' }}>
                                                    <div className="code-dots"><span></span><span></span><span></span></div>
                                                    <span style={{ fontWeight: '600', color: 'var(--color-primary-light)' }}>Optimized Framework Prompt</span>
                                                    <button 
                                                        className="copy-btn" 
                                                        style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                                        onClick={() => copyToClipboard(improvedPrompt, 'improver')}
                                                    >
                                                        {copiedStates['improver'] ? <CheckCircle size={16} color="var(--color-success)" /> : <Copy size={16} />}
                                                        <span style={{ fontSize: '0.8rem' }}>{copiedStates['improver'] ? 'Copied!' : 'Copy to Clipboard'}</span>
                                                    </button>
                                                </div>
                                                <div className="code-body" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                                    <span className="prompt-text" style={{ whiteSpace: 'pre-wrap' }}>{improvedPrompt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
            
            <style>{`
                .tool-tabs-container {
                    display: flex;
                    justify-content: center;
                }
                .tool-tabs {
                    display: inline-flex;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.5rem;
                    border-radius: var(--radius-lg);
                    gap: 0.5rem;
                    border: 1px solid var(--color-border);
                }
                body.light-mode .tool-tabs {
                    background: rgba(0, 0, 0, 0.03);
                }
                .tool-tab {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    border: none;
                    background: transparent;
                    color: var(--color-text-secondary);
                    font-size: var(--fs-md);
                    font-family: inherit;
                    font-weight: 500;
                    border-radius: var(--radius-md);
                    cursor: pointer;
                    transition: all var(--transition-base);
                }
                .tool-tab:hover {
                    color: var(--color-text);
                    background: rgba(255, 255, 255, 0.05);
                }
                body.light-mode .tool-tab:hover {
                    background: rgba(0, 0, 0, 0.05);
                }
                .tool-tab.active {
                    background: var(--color-primary);
                    color: white;
                    box-shadow: 0 4px 12px var(--color-primary-glow);
                }
                .fade-in {
                    animation: fadeIn 0.4s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .custom-textarea {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    padding: 1rem;
                    color: var(--color-text);
                    font-family: var(--font-primary);
                    font-size: var(--fs-base);
                    transition: all var(--transition-base);
                }
                body.light-mode .custom-textarea {
                    background: #fff;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }
                .custom-textarea:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 2px var(--color-primary-glow);
                }
                .caret-blink {
                    animation: blink 1s step-end infinite;
                    font-weight: bold;
                }
                @keyframes blink {
                    50% { opacity: 0; }
                }
                body.light-mode .output-display {
                    background: rgba(0,0,0,0.03) !important;
                    border-color: rgba(0,0,0,0.1) !important;
                }
                @media (max-width: 768px) {
                    .playground-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .tool-tabs {
                        flex-direction: column;
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}
