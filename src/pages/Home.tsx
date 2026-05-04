import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  PhoneCall, 
  Microscope,
  Stethoscope,
  Smile,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Painless Root Canals',
    description: 'Expert endodontic care using advanced rotary systems for a completely comfortable experience.',
    icon: Stethoscope,
  },
  {
    title: 'Invisible Braces',
    description: 'Straighten your teeth discreetly with world-class clear aligners designed for your lifestyle.',
    icon: Sparkles,
  },
  {
    title: 'Dental Implants',
    description: 'Restore your smile permanently with biocompatible implants that look and feel like natural teeth.',
    icon: Microscope,
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional grade laser whitening for a brighter, more confident smile in just one session.',
    icon: Smile,
  }
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white text-slate-900 overflow-hidden flex min-h-[90vh]">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
                Mumbai's Elite Dental care
              </div>
              <h1 className="text-5xl lg:text-7xl font-sans font-bold leading-tight mb-6">
                Advanced Dentistry. <br /> 
                <span className="text-blue-600 italic font-serif">Painless</span> Precision.
              </h1>
              <p className="text-lg text-slate-500 mb-10 max-w-md leading-relaxed">
                Experience high-end oral care at Aesthetic Smile, Vile Parle. Where medical expertise meets modern technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-sleek hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
                >
                  Book Appointment Now
                </Link>
                <div className="flex items-center gap-3">
                   <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-100">
                           <img src={`https://i.pravatar.cc/100?u=doc${i}`} alt="Avatar" />
                        </div>
                      ))}
                   </div>
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">15k+ Happy Patients</span>
                </div>
              </div>

              {/* Quick Services Snapshot */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
                {services.map((item, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-600 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600 mb-3 group-hover:text-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest block text-slate-900 group-hover:text-white">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* AI Booking Widget Style from Theme */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-glow" />
                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">AI Booking Agent Active</span>
                  </div>
                  
                  <h3 className="text-white text-3xl font-display font-bold mb-6">Smart Booking <br/> System</h3>
                  <p className="text-slate-400 text-sm mb-10 leading-relaxed">Schedule your session in seconds. Our AI Agent handles all coordination instantly.</p>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-white text-xs font-medium">Next available slot</span>
                      <span className="text-blue-400 text-xs font-bold">Today, 4:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-white text-xs font-medium">Treatment Specialist</span>
                      <span className="text-blue-400 text-xs font-bold italic font-serif text-base">On Standby</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Enter Phone Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:border-blue-600 transition-colors"
                    />
                    <button className="w-full py-5 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                       Schedule via AI Call
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Our Specialty</h2>
            <h3 className="text-4xl lg:text-5xl font-sans font-bold text-slate-900 mb-6">Expert Care. <span className="text-blue-600 italic font-serif">World-Class</span> Results.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-sleek transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-blue-600 text-xs font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                  Explore <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Booking Feature Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/5 rounded-[3rem] p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">Smart Clinic Experience</h2>
                <h3 className="text-3xl lg:text-5xl font-sans font-bold text-white mb-8 leading-tight">
                  Meet our 24/7 <br /> 
                  <span className="text-blue-400 italic font-serif">AI Patient Guide.</span>
                </h3>
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0 border border-blue-600/20">
                      <PhoneCall className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Instant Voice Booking</h4>
                      <p className="text-slate-400 text-sm">Call us anytime and our AI agent will schedule your session in seconds.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0 border border-blue-600/20">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Automated Reminders</h4>
                      <p className="text-slate-400 text-sm">Never miss a check-up with smart WhatsApp and SMS notifications.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 text-center backdrop-blur-xl">
                   <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8 shadow-button animate-pulse">
                      <PhoneCall className="w-8 h-8 text-white" />
                   </div>
                   <p className="text-xl font-sans text-white mb-8 leading-relaxed">
                     "Hello! I can help you find the next available slot at Aesthetic Smile. When would you like to visit?"
                   </p>
                   <div className="flex flex-col gap-3 max-w-xs mx-auto">
                      <div className="p-3 bg-white/5 rounded-xl text-xs text-slate-400 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">"What are your clinical hours?"</div>
                      <div className="p-3 bg-white/5 rounded-xl text-xs text-slate-400 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">"Do you offer invisible braces?"</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Tech */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-sleek">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop" 
                    alt="Digital Dentistry" 
                    className="w-full aspect-[4/5] object-cover"
                  />
               </div>
               <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-50 rounded-[3rem] -z-10 border border-slate-100" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Clinic Technology</h2>
              <h3 className="text-4xl lg:text-5xl font-sans font-bold text-slate-900 mb-8">Modern Hygiene. <br /> <span className="text-blue-600 italic font-serif">Maximum</span> Safety.</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Gold Standard Sterilization</h4>
                    <p className="text-slate-500 text-sm">We follow international protocol for hygiene with class-B autoclaves and sterile packaging.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Digital X-Rays & Scans</h4>
                    <p className="text-slate-500 text-sm">90% less radiation with crystal clear digital imaging for accurate diagnosis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Patient Stories</h2>
          <h3 className="text-4xl font-sans font-bold text-slate-900 mb-16 max-w-3xl mx-auto">"Exceptional care meets <span className="text-blue-600 italic font-serif">seamless</span> convenience."</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 text-left hover:shadow-sleek transition-all group">
                <div className="flex gap-1 mb-8">
                   {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-blue-600 text-blue-600" />)}
                </div>
                <p className="text-slate-600 mb-10 leading-relaxed text-sm italic font-serif">
                  "Truly elite service. The AI booking worked perfectly late at night, and the painless RCT was exactly as promised."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 tracking-tight">Patient {i}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Verified Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-8 leading-tight">Ready to transform your <span className="italic font-serif">Confidence</span>?</h2>
          <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Experience the future of dentistry. We are ready to help you achieve the results you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-12 py-5 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl"
            >
              Secure Your Slot
            </Link>
            <a
              href="tel:+919969606753"
              className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Call Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
