import { motion } from 'motion/react';
import { 
  Award, 
  Users, 
  Heart, 
  Microscope,
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Clock,
  Mail,
  Send
} from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-8 tracking-tight">
              Crafting <span className="text-blue-600 italic font-serif">Perfect</span> Smiles.
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              We started with a simple belief: dental care shouldn't just be effective, it should be an experience of absolute comfort and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="rounded-[3rem] overflow-hidden shadow-sleek">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dental Clinic" 
                    className="w-full aspect-square object-cover"
                  />
               </div>
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-6">Our Philosophy</h2>
              <h3 className="text-4xl lg:text-5xl font-sans font-bold text-slate-900 mb-8 leading-tight">Elite Care in the <br /> Heart of <span className="text-blue-600 italic font-serif">Vile Parle.</span></h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Aesthetic Smile was founded by a team of specialists who wanted to merge the sterile efficiency of a high-end medical facility with the warmth of a boutique clinic.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Precision Technology", desc: "Using advanced intraoral scanners and laser procedures for accuracy." },
                  { title: "Patient Education", desc: "We believe in transparency. We show you exactly why and how we treat." },
                  { title: "Zero Wait-Time", desc: "Our scheduling is optimized through AI to value your time." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Heart, title: "Patient-First Care", desc: "Tailored treatment plans for your unique needs." },
              { icon: Microscope, title: "Advanced Tech", desc: "Precision results with modern digital tools." },
              { icon: Award, title: "Excellence Always", desc: "International standards of dental surgery." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] shadow-sleek border border-slate-100">
                <item.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
