import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Camera, FileText, Copy, CheckCircle, RefreshCw, User, Briefcase, GraduationCap } from 'lucide-react';

export default function Templates() {
    const [activeTab, setActiveTab] = useState('photos'); // 'photos' or 'resume'
    const [photoGender, setPhotoGender] = useState('female');
    const [copiedStates, setCopiedStates] = useState({});

    // Resume Builder State
    const [resumeData, setResumeData] = useState({
        name: '',
        role: '',
        skills: '',
        experience: ''
    });
    
    const [resumeGenerated, setResumeGenerated] = useState(false);

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

    const handleResumeChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prev => ({ ...prev, [name]: value }));
        setResumeGenerated(false); // Reset generated state if they edit
    };

    const generateResumePrompt = () => {
        const { name, role, skills, experience } = resumeData;
        const fallbackName = name || "[Your Name]";
        const fallbackRole = role || "[Your Target Role]";
        const fallbackSkills = skills || "[Your Key Skills]";
        const fallbackExp = experience || "[Your Years of Experience]";
        
        return `You are an expert resume writer and career coach. Please create a highly professional, ATS-friendly resume for ${fallbackName}.\n\nTarget Role: ${fallbackRole}\nYears of Experience: ${fallbackExp}\nKey Skills: ${fallbackSkills}\n\nPlease include the following sections:\n1. Professional Summary (compelling and impactful)\n2. Core Competencies (bullet points of skills)\n3. Professional Experience (use action verbs and quantify achievements if possible)\n4. Education\n\nMake it concise, confident, and ready to use.`;
    };

    const handleGenerateResume = () => {
        setResumeGenerated(true);
        // Scroll to the result
        setTimeout(() => {
            document.getElementById('resume-result')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const photoPrompts = {
        male: "High-quality professional corporate headshot of a confident 35-year-old male executive. He is wearing a tailored navy blue suit with a crisp white shirt and a subtle patterned tie. Soft, flattering studio lighting with a neutral gray background. Shot on 85mm lens, f/1.8, extremely detailed, photorealistic, 8k resolution, cinematic lighting.",
        female: "High-quality professional corporate headshot of a confident 35-year-old female executive. She is wearing a tailored charcoal blazer with a silk white blouse. Soft, flattering studio lighting with a neutral light-walled background. Shot on 85mm lens, f/1.8, extremely detailed, photorealistic, 8k resolution, cinematic lighting."
    };

    const photoImages = {
        male: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        female: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="page-breadcrumb reveal">
                        <NavLink to="/">Home</NavLink>
                        <span className="breadcrumb-separator">›</span>
                        <span>Templates</span>
                    </div>
                    <h1 className="page-title reveal" style={{ transitionDelay: '0.1s' }}>
                        Ready-Made <span className="gradient-text">Templates</span>
                    </h1>
                    <p className="page-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
                        Jumpstart your workflow with our interactive fill-in-the-blank generators and professional prompt examples.
                    </p>
                </div>
            </section>

            <section className="page-content" style={{ paddingBottom: '6rem' }}>
                <div className="container">
                    
                    {/* Tool Selector Tabs */}
                    <div className="tool-tabs-container reveal">
                        <div className="tool-tabs">
                            <button 
                                className={`tool-tab ${activeTab === 'photos' ? 'active' : ''}`}
                                onClick={() => setActiveTab('photos')}
                            >
                                <Camera size={20} />
                                Professional Photos
                            </button>
                            <button 
                                className={`tool-tab ${activeTab === 'resume' ? 'active' : ''}`}
                                onClick={() => setActiveTab('resume')}
                            >
                                <FileText size={20} />
                                Resume Builder
                            </button>
                        </div>
                    </div>

                    <div className="content-wrapper glow-box reveal" style={{ marginTop: '2rem', padding: '2rem', borderRadius: '1rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                        
                        {/* -------------------- PHOTOS TAB -------------------- */}
                        {activeTab === 'photos' && (
                            <div className="tool-section fade-in">
                                <div className="text-center" style={{ marginBottom: '2rem' }}>
                                    <h2 style={{ fontSize: 'var(--fs-2xl)', marginBottom: '0.5rem' }}>Professional Profile Photos</h2>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Generate LinkedIn-ready profile pictures. Select a style and copy the exact prompt to use in Midjourney, DALL-E, or Stable Diffusion.
                                    </p>
                                </div>

                                <div className="photo-generator-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '2rem', alignItems: 'start' }}>
                                    
                                    {/* Left Column: Image & controls */}
                                    <div className="photo-preview-box">
                                        <div className="gender-selector" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                                            <button 
                                                className={`btn ${photoGender === 'female' ? 'btn-primary' : 'btn-secondary'}`}
                                                onClick={() => setPhotoGender('female')}
                                                style={{ padding: '0.5rem 1rem', flex: 1 }}
                                            >
                                                Female Style
                                            </button>
                                            <button 
                                                className={`btn ${photoGender === 'male' ? 'btn-primary' : 'btn-secondary'}`}
                                                onClick={() => setPhotoGender('male')}
                                                style={{ padding: '0.5rem 1rem', flex: 1 }}
                                            >
                                                Male Style
                                            </button>
                                        </div>
                                        
                                        <div className="image-container" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border)' }}>
                                            <img 
                                                src={photoImages[photoGender]} 
                                                alt={`Professional ${photoGender} headshot`} 
                                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Right Column: Prompt */}
                                    <div className="photo-prompt-box">
                                        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <RefreshCw size={20} color="var(--color-primary-light)" />
                                            The Prompt Formula
                                        </h3>
                                        
                                        <div className="code-example" style={{ margin: 0, height: '100%' }}>
                                            <div className="code-header">
                                                <div className="code-dots"><span></span><span></span><span></span></div>
                                                <span>Image Generation Prompt</span>
                                                <button 
                                                    className="copy-btn" 
                                                    style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                                    onClick={() => copyToClipboard(photoPrompts[photoGender], 'photo')}
                                                >
                                                    {copiedStates['photo'] ? <CheckCircle size={16} color="var(--color-success)" /> : <Copy size={16} />}
                                                    <span style={{ fontSize: '0.8rem' }}>{copiedStates['photo'] ? 'Copied!' : 'Copy'}</span>
                                                </button>
                                            </div>
                                            <div className="code-body" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                                <span className="prompt-text">{photoPrompts[photoGender]}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="pro-tip" style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(0, 206, 201, 0.1)', borderLeft: '4px solid var(--color-accent)', borderRadius: '0.5rem' }}>
                                            <strong>Pro Tip:</strong> <i>You can adjust the age, ethnicity, or specific clothing details in this prompt to better match your own appearance.</i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* -------------------- RESUME TAB -------------------- */}
                        {activeTab === 'resume' && (
                            <div className="tool-section fade-in">
                                <div className="text-center" style={{ marginBottom: '2rem' }}>
                                    <h2 style={{ fontSize: 'var(--fs-2xl)', marginBottom: '0.5rem' }}>AI Resume Builder</h2>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Fill in the blanks below. The system will craft an optimal prompt and automatically generate a draft of a professional resume for you.
                                    </p>
                                </div>

                                <div className="resume-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    
                                    {/* Left: Form */}
                                    <div className="resume-form input-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                        
                                        <div className="form-field">
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                <User size={18} /> My name is...
                                            </label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                value={resumeData.name}
                                                onChange={handleResumeChange}
                                                placeholder="e.g. Alex Johnson"
                                                className="custom-input"
                                            />
                                        </div>
                                        
                                        <div className="form-field">
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                <Briefcase size={18} /> I am seeking a role as a...
                                            </label>
                                            <input 
                                                type="text" 
                                                name="role"
                                                value={resumeData.role}
                                                onChange={handleResumeChange}
                                                placeholder="e.g. Senior Frontend Developer"
                                                className="custom-input"
                                            />
                                        </div>
                                        
                                        <div className="form-field">
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                <GraduationCap size={18} /> With skills in...
                                            </label>
                                            <input 
                                                type="text" 
                                                name="skills"
                                                value={resumeData.skills}
                                                onChange={handleResumeChange}
                                                placeholder="e.g. React, Node.js, UI/UX Design"
                                                className="custom-input"
                                            />
                                        </div>

                                        <div className="form-field">
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '500' }}>
                                                <RefreshCw size={18} /> And experience of...
                                            </label>
                                            <input 
                                                type="text" 
                                                name="experience"
                                                value={resumeData.experience}
                                                onChange={handleResumeChange}
                                                placeholder="e.g. 5 years building web applications"
                                                className="custom-input"
                                            />
                                        </div>

                                        <button 
                                            className="btn btn-primary" 
                                            onClick={handleGenerateResume}
                                            style={{ marginTop: '1rem', justifyContent: 'center', padding: '1rem' }}
                                        >
                                            Generate Professional Resume
                                        </button>
                                    </div>
                                    
                                    {/* Right: Live Prompt Output */}
                                    <div className="resume-prompt-preview">
                                        <h3 style={{ marginBottom: '1rem', fontSize: 'var(--fs-md)' }}>The Generated Prompt Format:</h3>
                                        <div className="code-example" style={{ margin: 0 }}>
                                            <div className="code-header">
                                                <div className="code-dots"><span></span><span></span><span></span></div>
                                                <span>Under the hood</span>
                                            </div>
                                            <div className="code-body" style={{ minHeight: '350px' }}>
                                                <span className="prompt-text" style={{ whiteSpace: 'pre-line' }}>
                                                    {generateResumePrompt()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Generated Result Area */}
                                {resumeGenerated && (
                                    <div id="resume-result" className="resume-result fade-in" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                            <h2>Generated Resume Draft</h2>
                                            <button 
                                                className="btn btn-secondary"
                                                onClick={() => copyToClipboard(document.getElementById('mock-resume-text').innerText, 'resume')}
                                            >
                                                {copiedStates['resume'] ? <CheckCircle size={18} color="var(--color-success)" /> : <Copy size={18} />}
                                                {copiedStates['resume'] ? 'Copied' : 'Copy Resume'}
                                            </button>
                                        </div>
                                        
                                        <div className="mock-document" style={{ background: '#fff', color: '#333', padding: '3rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow-md)' }}>
                                            <div id="mock-resume-text" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                <h1 style={{ textAlign: 'center', color: '#111', marginBottom: '0.5rem', fontSize: '24px' }}>
                                                    {resumeData.name || "[Your Name]"}
                                                </h1>
                                                <p style={{ textAlign: 'center', fontSize: '14px', color: '#666', borderBottom: '2px solid #333', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                                                    Professional {resumeData.role || "[Target Role]"} | {resumeData.name?.toLowerCase().replace(' ', '') || "email"}@example.com | (555) 123-4567
                                                </p>
                                                
                                                <h3 style={{ color: '#222', fontSize: '16px', borderBottom: '1px solid #ccc', paddingBottom: '0.25rem', marginBottom: '1rem' }}>PROFESSIONAL SUMMARY</h3>
                                                <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '1.5rem', color: '#444' }}>
                                                    Results-driven {resumeData.role || "professional"} with {resumeData.experience || "extensive experience"} in the industry. Highly adaptable and skilled in leveraging {resumeData.skills || "key competencies"} to drive efficiency and innovation. Proven track record of delivering high-quality results in fast-paced environments.
                                                </p>

                                                <h3 style={{ color: '#222', fontSize: '16px', borderBottom: '1px solid #ccc', paddingBottom: '0.25rem', marginBottom: '1rem' }}>CORE COMPETENCIES</h3>
                                                <ul style={{ fontSize: '14px', color: '#444', marginBottom: '1.5rem', paddingLeft: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                                    {resumeData.skills ? resumeData.skills.split(',').map((skill, index) => (
                                                        <li key={index}>{skill.trim()}</li>
                                                    )) : (
                                                        <>
                                                            <li>Strategic Planning</li>
                                                            <li>Project Management</li>
                                                            <li>Problem Solving</li>
                                                            <li>Cross-functional Collaboration</li>
                                                        </>
                                                    )}
                                                </ul>

                                                <h3 style={{ color: '#222', fontSize: '16px', borderBottom: '1px solid #ccc', paddingBottom: '0.25rem', marginBottom: '1rem' }}>PROFESSIONAL EXPERIENCE</h3>
                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                        <strong style={{ fontSize: '15px' }}>{resumeData.role || "Senior Position"}</strong>
                                                        <span style={{ fontSize: '14px', color: '#666' }}>2020 - Present</span>
                                                    </div>
                                                    <em style={{ fontSize: '14px', color: '#555', display: 'block', marginBottom: '0.5rem' }}>Leading Tech Company, Inc.</em>
                                                    <ul style={{ fontSize: '14px', color: '#444', paddingLeft: '20px', lineHeight: '1.6' }}>
                                                        <li>Spearheaded {resumeData.skills ? resumeData.skills.split(',')[0] : "key technology"} initiatives, resulting in a 30% increase in operational efficiency.</li>
                                                        <li>Leveraged {resumeData.experience || "extensive industry experience"} to guide teams and mentor junior staff members.</li>
                                                        <li>Collaborated seamlessly with cross-functional teams to deliver enterprise-grade solutions.</li>
                                                    </ul>
                                                </div>

                                                <h3 style={{ color: '#222', fontSize: '16px', borderBottom: '1px solid #ccc', paddingBottom: '0.25rem', marginBottom: '1rem' }}>EDUCATION</h3>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                    <strong style={{ fontSize: '15px' }}>Bachelor of Science</strong>
                                                    <span style={{ fontSize: '14px', color: '#666' }}>Graduated: 2018</span>
                                                </div>
                                                <em style={{ fontSize: '14px', color: '#555', display: 'block' }}>University of Technology</em>
                                            </div>
                                        </div>
                                    </div>
                                )}
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
                .custom-input {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    padding: 0.75rem 1rem;
                    color: var(--color-text);
                    font-family: inherit;
                    font-size: var(--fs-base);
                    width: 100%;
                    transition: all var(--transition-base);
                }
                body.light-mode .custom-input {
                    background: #fff;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }
                .custom-input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 2px var(--color-primary-glow);
                }
                @media (max-width: 768px) {
                    .photo-generator-layout, .resume-grid {
                        grid-template-columns: 1fr;
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
