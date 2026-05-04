import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Clock, 
  MessageCircle,
  Send,
  Calendar,
  Zap
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Contact Hero */}
      <section className="bg-slate-900 py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                 >
                    <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6 tracking-tight">Let's Design <br/> <span className="text-blue-600 italic font-serif">Your Smile.</span></h1>
                    <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                      Reach out to us via phone, WhatsApp, or visit our clinic in Vile Parle East. We represent a commitment to excellence.
                    </p>
                    <div className="space-y-6">
                       <div className="flex items-center gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500">
                             <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                          </div>
                          <div>
                             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Call Specialist</p>
                             <a href="tel:+919969606753" className="text-lg font-bold text-white hover:text-blue-600 transition-colors">+91 99696 06753</a>
                          </div>
                       </div>
                       <div className="flex items-center gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-all duration-500">
                             <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-white" />
                          </div>
                          <div>
                             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">WhatsApp Direct</p>
                             <a href="https://wa.me/919969606753" target="_blank" rel="noreferrer" className="text-lg font-bold text-white hover:text-green-500 transition-colors">Start Chat</a>
                          </div>
                       </div>
                       <div className="flex items-center gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500">
                             <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white" />
                          </div>
                          <div>
                             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Location</p>
                             <p className="text-white text-lg font-bold leading-tight">Vile Parle East, Mumbai</p>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </div>
              
              {/* Form Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-sleek relative border border-slate-100"
              >
                  <div className="absolute -top-6 left-12 bg-blue-600 text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-button">
                     Secure a Slot
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-slate-900 mb-8">Ready for a consultation?</h3>
                  <form className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Name</label>
                           <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors" placeholder="John" />
                        </div>
                        <div>
                           <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Phone</label>
                           <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors" placeholder="000" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                        <textarea className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 h-32 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-600 transition-colors resize-none" placeholder="How can we help?"></textarea>
                     </div>
                     <button className="w-full bg-slate-900 text-white rounded-xl py-5 font-bold hover:bg-blue-600 transition-all shadow-button">
                        Schedule AI Call
                     </button>
                  </form>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Map & Meta */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1 space-y-12">
               <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-8 flex items-center gap-3 uppercase tracking-widest">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Clinical Hours
                  </h4>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-4 border-b border-slate-100">
                        <span className="text-sm text-slate-500 font-medium">Mon - Sat</span>
                        <span className="text-sm font-bold text-slate-900">10:00 - 20:00</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-slate-100">
                        <span className="text-sm text-slate-500 font-medium">Sunday</span>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">By Appt</span>
                     </div>
                  </div>
               </div>
               
               <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50 group hover:bg-blue-600 transition-all duration-500">
                  <Zap className="w-6 h-6 text-blue-600 mb-6 group-hover:text-white" />
                  <h4 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-white">Smart Booking</h4>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-blue-100">
                    Prefer not to wait? Call our AI assistant now and book your session in 30 seconds.
                  </p>
               </div>
            </div>
            
            <div className="lg:col-span-2">
               <div className="aspect-[21/10] bg-slate-50 rounded-[3rem] overflow-hidden grayscale relative border border-slate-100 shadow-sleek">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8256561148815!2d72.8530932!3d19.0988636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91350a58a77%3A0x6bfe7c91350a58a77!2sZee%20Corporate%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
