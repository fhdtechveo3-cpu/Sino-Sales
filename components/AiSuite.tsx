import React, { useState } from 'react';
import { Sparkles, BrainCircuit, Activity, Check, Box, Truck, Leaf, ShieldCheck, Scale, Ruler } from 'lucide-react';

type AiTool = 'materials' | 'viability' | 'cost' | 'eco' | 'logistics' | 'compliance';

const AiSuite: React.FC = () => {
  const [activeTool, setActiveTool] = useState<AiTool>('materials');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const tools = [
    { id: 'materials', label: 'Material Recommender', icon: <Box size={18} /> },
    { id: 'viability', label: 'Idea Validator', icon: <Sparkles size={18} /> },
    { id: 'cost', label: 'Cost Estimator', icon: <Scale size={18} /> },
    { id: 'eco', label: 'Eco-Impact', icon: <Leaf size={18} /> },
    { id: 'logistics', label: 'Lead Time AI', icon: <Truck size={18} /> },
    { id: 'compliance', label: 'Compliance Check', icon: <ShieldCheck size={18} /> },
  ];

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    setAnalyzing(true);
    setResult(null);
    
    // Simulating specific AI outputs based on tool
    setTimeout(() => {
      setAnalyzing(false);
      switch(activeTool) {
        case 'materials':
            setResult({
                title: "Recommended Materials",
                data: [
                    { name: "Polycarbonate (PC)", match: "98%", reason: "Excellent impact resistance and transparency for this application." },
                    { name: "ABS Plastic", match: "85%", reason: "Cost-effective alternative, good rigidity." }
                ]
            });
            break;
        case 'eco':
            setResult({
                title: "Sustainability Report",
                score: "B+",
                co2: "1.2kg per unit",
                suggestion: "Switching to Recycled PET could reduce carbon footprint by 30%."
            });
            break;
        case 'logistics':
            setResult({
                title: "Logistics Prediction",
                route: "Ningbo -> Los Angeles",
                seaTime: "18-22 Days",
                risk: "Low",
                suggestion: "Book containers 14 days in advance due to seasonal peak."
            });
            break;
        default:
            setResult({
                title: "Analysis Complete",
                score: 94,
                text: "High feasibility score based on 2026 manufacturing datasets. Ready for CAD engineering phase."
            });
      }
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
              <BrainCircuit className="w-4 h-4 mr-2" />
              Sino AI Manufacturing Suite 3.0
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Intelligent Manufacturing Engine</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Leverage our proprietary AI models trained on 25 years of supply chain data to optimize your product before production begins.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/4">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2 space-y-1">
                    {tools.map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => { setActiveTool(tool.id as AiTool); setResult(null); }}
                            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium
                                ${activeTool === tool.id 
                                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' 
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                        >
                            <span className="mr-3 opacity-80">{tool.icon}</span>
                            {tool.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Interface */}
            <div className="w-full lg:w-3/4">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative min-h-[500px]">
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                        {tools.find(t => t.id === activeTool)?.icon}
                        <span className="ml-3">{tools.find(t => t.id === activeTool)?.label}</span>
                    </h3>
                    <p className="text-gray-400 text-sm mb-8 border-b border-white/10 pb-6">
                        Enter your product details below to generate real-time insights.
                    </p>

                    {!result ? (
                        <form onSubmit={handleAnalyze} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Product Type</label>
                                    <input type="text" placeholder="e.g. Wireless Headphones" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-red transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Target Market</label>
                                    <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-red transition-all">
                                        <option>North America</option>
                                        <option>Europe</option>
                                        <option>Asia Pacific</option>
                                    </select>
                                </div>
                            </div>
                            
                            {activeTool === 'materials' && (
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Property Priorities</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {['Durability', 'Cost', 'Flexibility'].map((p) => (
                                            <label key={p} className="flex items-center justify-center bg-black/20 border border-white/10 rounded-xl py-3 cursor-pointer hover:border-brand-red/50 transition-all">
                                                <input type="checkbox" className="mr-2 accent-brand-red" /> <span className="text-sm">{p}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Product Description / Specs</label>
                                <textarea 
                                    rows={4} 
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-all"
                                    placeholder="Describe materials, dimensions, or specific requirements..."
                                ></textarea>
                            </div>

                            <button 
                                disabled={analyzing}
                                className="w-full bg-gradient-to-r from-brand-red to-rose-600 hover:from-rose-600 hover:to-brand-red text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-red/20 flex items-center justify-center group"
                            >
                                {analyzing ? (
                                    <>
                                        <Activity className="animate-spin mr-3" /> Processing Neural Network...
                                    </>
                                ) : (
                                    <>
                                        Run Analysis <Sparkles className="ml-2 w-4 h-4 group-hover:scale-125 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="animate-in fade-in zoom-in duration-300">
                            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-8 flex items-start">
                                <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                                    <Check size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">{result.title}</h4>
                                    <p className="text-green-400 text-sm">Analysis computed successfully in 1.2s</p>
                                </div>
                            </div>

                            {activeTool === 'materials' ? (
                                <div className="space-y-4">
                                    {result.data.map((item: any, idx: number) => (
                                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-center mb-2">
                                                <h5 className="font-bold text-lg">{item.name}</h5>
                                                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-bold rounded-full">{item.match} Match</span>
                                            </div>
                                            <p className="text-gray-400 text-sm">{item.reason}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                                        {JSON.stringify(result, null, 2).replace(/[{"}]/g, '')}
                                    </pre>
                                </div>
                            )}

                            <button 
                                onClick={() => setResult(null)}
                                className="mt-8 w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold py-3 rounded-xl transition-colors"
                            >
                                Run New Analysis
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AiSuite;