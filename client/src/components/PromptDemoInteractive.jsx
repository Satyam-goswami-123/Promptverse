import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, PenTool, Lightbulb, CheckCircle2 } from 'lucide-react';
import './PromptDemoInteractive.css';

export default function PromptDemoInteractive() {
    const [step, setStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    // Reset demo
    const handleReset = () => {
        setStep(0);
        setIsTyping(false);
    };

    // Progress the demo automatically or by click
    const runNextStep = () => {
        if (step === 3) return;
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setStep(prev => prev + 1);
        }, 1200);
    };

    return (
        <div className="interactive-demo-wrapper">
            <div className="demo-controls">
                <div className="demo-progress">
                    <div className={`progress-dot ${step >= 0 ? 'active' : ''}`}>1</div>
                    <div className="progress-line"></div>
                    <div className={`progress-dot ${step >= 1 ? 'active' : ''}`}>2</div>
                    <div className="progress-line"></div>
                    <div className={`progress-dot ${step >= 2 ? 'active' : ''}`}>3</div>
                    <div className="progress-line"></div>
                    <div className={`progress-dot ${step >= 3 ? 'active' : ''}`}>4</div>
                </div>

                {step > 0 && (
                    <button className="btn btn-secondary btn-sm" onClick={handleReset}>
                        <RotateCcw size={16} /> Reset Demo
                    </button>
                )}
            </div>

            <div className="demo-panels-container">

                {/* PANEL 1: WITHOUT PROMPT ENGINEERING */}
                <div className={`demo-panel ${step >= 1 ? 'active-panel' : ''}`}>
                    <div className="panel-header bad">
                        <PenTool size={18} />
                        <span>Without Prompt Engineering</span>
                    </div>

                    <div className="panel-content">
                        <div className="user-input">
                            <span className="label">User:</span>
                            <div className="simulated-input">
                                "Tell me about dogs"
                            </div>
                        </div>

                        <div className="ai-response">
                            <span className="label">AI:</span>
                            <div className="response-box">
                                {step === 0 && !isTyping && (
                                    <button className="btn btn-primary run-demo-btn" onClick={runNextStep}>
                                        <Play size={16} /> Run Prompt
                                    </button>
                                )}

                                {step === 0 && isTyping && (
                                    <span className="typing-indicator">AI is thinking...</span>
                                )}

                                {step >= 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="response-text"
                                    >
                                        <p>Dogs are popular pets. They come in many breeds. People love dogs because they are loyal. Dogs can be big or small, like Great Danes or Chihuahuas. They need walking and food every day to stay healthy.</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                                className="verdict-box verdict-bad"
                            >
                                <strong>Result:</strong> Generalized, unstructured, and simple.
                                {step === 1 && !isTyping && (
                                    <button className="btn btn-primary mt-sm w-full" onClick={runNextStep}>
                                        Apply Prompt Engineering <ArrowRightIcon />
                                    </button>
                                )}
                            </motion.div>
                        )}
                        {step === 1 && isTyping && (
                            <div className="mt-sm typing-indicator text-center">Engineering prompt...</div>
                        )}
                    </div>
                </div>

                {/* VS DIVIDER */}
                <div className="demo-vs-divider">VS</div>

                {/* PANEL 2: WITH PROMPT ENGINEERING */}
                <div className={`demo-panel optimized ${step >= 2 ? 'active-panel' : 'dimmed-panel'}`}>
                    <div className="panel-header good">
                        <Lightbulb size={18} />
                        <span>With Prompt Engineering</span>
                    </div>

                    <div className="panel-content">
                        <div className="user-input">
                            <span className="label">User:</span>
                            <div className="simulated-input optimized-input">
                                {step >= 2 ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                        "<strong>Act as a veterinary expert</strong>. Evaluate the <strong>top 3 proven health benefits</strong> of owning a dog. <strong>Format the response as a numbered list with brief scientific explanations.</strong>"
                                    </motion.div>
                                ) : (
                                    <span className="empty-placeholder">Awaiting input...</span>
                                )}
                            </div>
                        </div>

                        <div className="ai-response">
                            <span className="label">AI:</span>
                            <div className="response-box">
                                {step === 2 && !isTyping && (
                                    <button className="btn btn-primary run-demo-btn" onClick={runNextStep}>
                                        <Play size={16} /> Run Optimized Prompt
                                    </button>
                                )}

                                {step === 2 && isTyping && (
                                    <span className="typing-indicator">AI is generating structured response...</span>
                                )}

                                {step >= 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="response-text"
                                    >
                                        <ol className="structured-list">
                                            <li><strong>Cardiovascular Health:</strong> Dog owners exhibit substantially lower baseline heart rates and blood pressure. (AHA Heart Study)</li>
                                            <li><strong>Stress Reduction:</strong> Interacting with dogs releases oxytocin, which suppresses the stress hormone cortisol.</li>
                                            <li><strong>Increased Physical Activity:</strong> Owners average 30-40 more minutes of moderate daily exercise compared to non-owners.</li>
                                        </ol>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {step >= 3 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="verdict-box verdict-good"
                            >
                                <CheckCircle2 size={16} />
                                <strong>Result:</strong> Specific, highly structured, and expert-level formatting!
                            </motion.div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

function ArrowRightIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
}
