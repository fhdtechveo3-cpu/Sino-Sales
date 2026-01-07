import React, { useState } from 'react';
import { Sparkles, BrainCircuit, Activity, Check } from 'lucide-react';

const AiValidator: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { score: number; text: string }>(null);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    setAnalyzing(true);
    setResult(null);
    // Mock analysis delay
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        score: 94,
        text: "High manufacturability score. Based on current supply chain trends in 2026, this product category shows strong potential for injection molding efficiency."
      });
    }, 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-brand-dark text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3 mr-2" />
              Sino AI Engine 2.0
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Validate Your Idea Instantly</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Not sure if your product is ready for mass manufacturing? Use our AI-powered validator to get an instant feasibility assessment based on millions of data points from our 25-year manufacturing history.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <BrainCircuit className="w-6 h-6 text-brand-gold mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-white text-lg">Smart Material Analysis</h4>
                  <p className="text-sm text-gray-500">AI recommends the best materials for cost and durability.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Activity className="w-6 h-6 text-brand-gold mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-white text-lg">Cost Estimation Model</h4>
                  <p className="text-sm text-gray-500">Get a ballpark manufacturing unit cost in seconds.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold mb-6 flex items-center">
                Product Feasibility Check
              </h3>
              
              {!result ? (
                <form onSubmit={handleAnalyze} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Product Category</label>
                    <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-all">
                      <option>Consumer Electronics</option>
                      <option>Home & Garden</option>
                      <option>Industrial Equipment</option>
                      <option>Fashion & Accessories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Brief Description</label>
                    <textarea 
                      rows={3} 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-all"
                      placeholder="e.g. A solar-powered heated coffee mug..."
                    ></textarea>
                  </div>
                  <button 
                    disabled={analyzing}
                    className="w-full bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-brand-red text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center"
                  >
                    {analyzing ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></span>
                        Processing Data...
                      </>
                    ) : "Analyze Viability"}
                  </button>
                </form>
              ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-400">Viability Score</p>
                      <p className="text-4xl font-bold text-green-400">{result.score}/100</p>
                    </div>
                    <div className="h-16 w-16 rounded-full border-4 border-green-500 flex items-center justify-center bg-green-500/10">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed">{result.text}</p>
                  </div>
                  <button 
                    onClick={() => setResult(null)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    Analyze Another
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

export default AiValidator;