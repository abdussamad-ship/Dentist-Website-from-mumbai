import { motion } from 'motion/react';
import { 
  Sparkles, 
  Stethoscope, 
  Microscope, 
  Smile, 
  Zap, 
  ShieldCheck,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const treatments = [
  {
    id: 'painless-root-canal',
    title: 'Painless Root Canals',
    subtitle: 'Endodontic Excellence',
    description: 'We use advanced rotary endodontics and 3D imaging to make root canals quick, precise, and completely painless. Say goodbye to toothaches forever.',
    features: ['Rotary System Technology', 'Local Anesthesia Mastery', 'Single Visit Completion', 'Digital X-Ray Monitoring'],
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop'
  },
  {
    id: 'invisible-braces',
    title: 'Invisible Braces',
    subtitle: 'Clear Aligner Systems',
    description: 'Achieve a perfectly straight smile without the look of metal braces. Our custom-designed clear aligners are virtually invisible and removable.',
    features: ['3D Smile Simulation', 'Comfort-Fit Design', 'No Food Restrictions', 'Fast Treatment Times'],
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    subtitle: 'Permanent Tooth Replacement',
    description: 'Restore missing teeth with biocompatible titanium implants. Our digital placement method ensures 100% accuracy and faster healing.',
    features: ['Titanium Durability', 'Natural Appearance', 'Jawbone Preservation', 'Expert Surgical Precision'],
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop'
  },
  {
    id: 'whitening',
    title: 'Laser Teeth Whitening',
    subtitle: 'Brighter Smiles Instantly',
    description: "Get a celebrity-worthy smile in just 45 minutes with our advanced laser whitening technology. Safe, effective, and long-lasting.",
    features: ['Up to 8 Shades Whiter', 'Enamel-Safe Gel', 'Instant Results', 'Minimal Sensitivity'],
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?q=80&w=2071&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">Expert <span className="text-blue-600 italic font-serif">Treatments</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Combining world-class expertise with the most advanced dental technology in Mumbai to provide you with an exceptional experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                   <div className="relative">
                      <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-sleek">
                        <img 
                          src={treatment.image} 
                          alt={treatment.title} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-sleek flex items-center gap-4 border border-slate-100">
                         <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                            <treatment.icon className="w-6 h-6 text-blue-600" />
                         </div>
                         <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{treatment.subtitle}</p>
                            <p className="text-sm font-bold text-slate-900">Standard Excellence</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 mb-6">{treatment.title}</h2>
                  <p className="text-slate-500 mb-8 leading-relaxed max-w-lg">
                    {treatment.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {treatment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold px-0 py-2 border-b-2 border-blue-600 hover:gap-4 transition-all uppercase text-[10px] tracking-widest"
                  >
                    Consult for {treatment.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Mini Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-50" />
              <div className="relative z-10">
                <ShieldCheck className="w-16 h-16 text-blue-600 mx-auto mb-8" />
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8">Committed to <span className="italic font-serif text-blue-400">Zero-Pain</span> Dentistry.</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
                  We believe dental care should be an experience you look forward to. Our specialized protocols ensure minimum chair time and maximum comfort.
                </p>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all inline-block shadow-button"
                >
                  Book Your Consult
                </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
