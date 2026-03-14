import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, Copy, CheckCircle, TrendingUp, Search, Filter, MessageSquare, Image as ImageIcon, Code, Music } from 'lucide-react';

const toolsDirectory = [
    { id: 1, name: 'ChatGPT', category: 'text', description: 'Advanced conversational AI by OpenAI. Great for text generation, coding, and brainstorming.', url: 'https://chat.openai.com', icon: MessageSquare, color: '#10a37f' },
    { id: 2, name: 'Midjourney', category: 'image', description: 'Produces highly detailed, incredibly artistic images from text prompts via Discord.', url: 'https://midjourney.com', icon: ImageIcon, color: '#ff5c5c' },
    { id: 3, name: 'Claude', category: 'text', description: 'Anthropic’s AI assistant. Excellent at summarizing large documents and writing natural text.', url: 'https://claude.ai', icon: MessageSquare, color: '#d97757' },
    { id: 4, name: 'DALL·E 3', category: 'image', description: 'OpenAI’s image generator, integrated directly into ChatGPT for seamless prompting.', url: 'https://openai.com/dall-e-3', icon: ImageIcon, color: '#000000' },
    { id: 5, name: 'GitHub Copilot', category: 'code', description: 'AI pair programmer that offers autocomplete-style suggestions as you write code.', url: 'https://github.com/features/copilot', icon: Code, color: '#6e40c9' },
    { id: 6, name: 'Suno AI', category: 'audio', description: 'Generates completely original, high-quality music and vocals from simple text descriptions.', url: 'https://suno.com/', icon: Music, color: '#f5b041' },
];

const trendingPrompts = [
    { id: 1, title: 'The Expert Consultant', category: 'Business', prompt: 'Act as an expert management consultant. I will provide you with a business problem. You will ask me clarifying questions one by one until you have enough context. Then, provide a structured 3-step action plan to solve it.', uses: '12.4K' },
    { id: 2, title: 'Photorealistic Portrait', category: 'Image Gen', prompt: 'Close up portrait of a cyberpunk hacker in a neon-lit alleyway at night, incredibly detailed face, cinematic lighting, dramatic shadows, shot on 85mm lens, f/1.4, 8k resolution, photorealistic.', uses: '9.8K' },
    { id: 3, title: 'Code Reviewer', category: 'Development', prompt: 'Act as a Senior Software Engineer. Review the following code snippet. Point out any security vulnerabilities, performance bottlenecks, or deviations from clean code principles. Suggest an optimized version of the code.', uses: '8.2K' },
    { id: 4, title: 'Learn Anything in 5 Minutes', category: 'Education', prompt: 'Explain [Insert Complex Topic] to me like I am 5 years old. Use an easy-to-understand analogy involving everyday objects. Keep it under 200 words.', uses: '15.1K' }
];

export default function AITools() {
    const [activeTab, setActiveTab] = useState('directory'); // 'directory' or 'trending'
    const [filter, setFilter] = useState('all');
    const [copiedStates, setCopiedStates] = useState({});

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

    const filteredTools = filter === 'all' ? toolsDirectory : toolsDirectory.filter(tool => tool.category === filter);

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="page-breadcrumb reveal">
                        <NavLink to="/">Home</NavLink>
                        <span className="breadcrumb-separator">›</span>
                        <span>AI Tools</span>
                    </div>
                    <h1 className="page-title reveal" style={{ transitionDelay: '0.1s' }}>
                        AI Tools <span className="gradient-text">& Trends</span>
                    </h1>
                    <p className="page-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        Discover the right AI models for your use case and stay updated with the most popular community prompts.
                    </p>
                </div>
            </section>

            <section className="page-content" style={{ paddingBottom: '6rem' }}>
                <div className="container">
                    
                    {/* Tool Selector Tabs */}
                    <div className="tool-tabs-container reveal">
                        <div className="tool-tabs">
                            <button 
                                className={`tool-tab ${activeTab === 'directory' ? 'active' : ''}`}
                                onClick={() => setActiveTab('directory')}
                            >
                                <Search size={20} />
                                Tools Directory
                            </button>
                            <button 
                                className={`tool-tab ${activeTab === 'trending' ? 'active' : ''}`}
                                onClick={() => setActiveTab('trending')}
                            >
                                <TrendingUp size={20} />
                                Trending Prompts
                            </button>
                        </div>
                    </div>

                    <div className="content-wrapper glow-box reveal" style={{ marginTop: '2rem', padding: '2rem', borderRadius: '1rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                        
                        {/* -------------------- TOOLS DIRECTORY -------------------- */}
                        {activeTab === 'directory' && (
                            <div className="tool-section fade-in">
                                <div className="directory-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div>
                                        <h2 style={{ fontSize: 'var(--fs-2xl)', marginBottom: '0.5rem' }}>AI Tools Directory</h2>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>Explore platforms where you can apply your prompt engineering skills.</p>
                                    </div>
                                    <div className="filter-group" style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                        {['all', 'text', 'image', 'code', 'audio'].map(cat => (
                                            <button 
                                                key={cat}
                                                onClick={() => setFilter(cat)}
                                                style={{ 
                                                    padding: '0.5rem 1rem', 
                                                    background: filter === cat ? 'var(--color-primary)' : 'transparent',
                                                    color: filter === cat ? 'white' : 'var(--color-text-secondary)',
                                                    border: 'none',
                                                    borderRadius: 'var(--radius-sm)',
                                                    cursor: 'pointer',
                                                    fontWeight: '500',
                                                    textTransform: 'capitalize',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                    {filteredTools.map(tool => (
                                        <div key={tool.id} className="tool-card hover-lift" style={{ padding: '1.5rem', borderRadius: '1rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
                                            <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: tool.color, filter: 'blur(50px)', opacity: 0.15, borderRadius: '50%' }}></div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: tool.color, border: '1px solid rgba(255,255,255,0.1)' }}>
                                                    <tool.icon size={24} />
                                                </div>
                                                <div>
                                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{tool.name}</h3>
                                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary-light)', fontWeight: '600' }}>{tool.category}</span>
                                                </div>
                                            </div>
                                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', minHeight: '65px' }}>
                                                {tool.description}
                                            </p>
                                            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.6rem' }}>
                                                Visit Platform <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                {filteredTools.length === 0 && (
                                    <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                                        No tools found for this category.
                                    </div>
                                )}
                            </div>
                        )}

                        {/* -------------------- TRENDING PROMPTS -------------------- */}
                        {activeTab === 'trending' && (
                            <div className="tool-section fade-in">
                                <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                                    <h2 style={{ fontSize: 'var(--fs-2xl)', marginBottom: '0.5rem' }}>Trending Community Prompts</h2>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        The most successful and frequently used prompts on the platform this week.
                                    </p>
                                </div>

                                <div className="prompts-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {trendingPrompts.map((item, index) => (
                                        <div key={item.id} className="trending-card" style={{ display: 'flex', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border)', borderRadius: '1rem', overflow: 'hidden' }}>
                                            <div className="rank-indicator" style={{ width: '60px', background: 'rgba(108, 92, 231, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid var(--color-border)', fontSize: '1.5rem', fontWeight: '800', color: index === 0 ? 'var(--color-warning)' : 'var(--color-text-secondary)' }}>
                                                #{index + 1}
                                            </div>
                                            <div style={{ padding: '1.5rem', flex: 1 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                                                    <div>
                                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.title}</h3>
                                                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>
                                                            <span style={{ color: 'var(--color-primary-light)' }}>{item.category}</span>
                                                            <span>• {item.uses} uses</span>
                                                        </div>
                                                    </div>
                                                    <button 
                                                        className="btn btn-secondary btn-sm"
                                                        onClick={() => copyToClipboard(item.prompt, `trend-${item.id}`)}
                                                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                                                    >
                                                        {copiedStates[`trend-${item.id}`] ? <CheckCircle size={14} color="var(--color-success)" /> : <Copy size={14} />}
                                                        {copiedStates[`trend-${item.id}`] ? 'Copied' : 'Copy'}
                                                    </button>
                                                </div>
                                                <div className="prompt-text-box" style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.6', marginTop: '1rem' }}>
                                                    {item.prompt}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                .hover-lift {
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--color-primary-light);
                }
                body.light-mode .prompt-text-box {
                    background: rgba(0,0,0,0.03) !important;
                    border: 1px solid rgba(0,0,0,0.05) !important;
                }
                @media (max-width: 768px) {
                    .tool-tabs {
                        flex-direction: column;
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}
