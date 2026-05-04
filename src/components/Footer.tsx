import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4 lg:px-0">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">Aesthetic <span className="text-blue-600">Smile</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Mumbai's elite dental care provider. Combining advanced technology with a patient-first philosophy for painless precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-500 hover:text-blue-500 transition-colors text-sm font-medium">Treatments</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-blue-500 transition-colors text-sm font-medium">Philosophy</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-blue-500 transition-colors text-sm font-medium">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+919969606753" className="hover:text-white transition-colors">+91 99696 06753</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Instagram className="w-4 h-4 text-blue-600" />
                <a href="https://instagram.com" className="hover:text-white transition-colors">@aesthetic.smile</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Vile Parle East, Mumbai</span>
              </li>
            </ul>
          </div>

          {/* Trust Elements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Trust Elements</h4>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center text-nowrap">ISO Certified</div>
               <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center text-nowrap">Laser Tech</div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">© {currentYear} Aesthetic Smile Dental Clinic</p>
          <div className="flex gap-8">
             <a href="#" className="text-[10px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest">Privacy</a>
             <a href="#" className="text-[10px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest">Terms</a>
             <a href="https://wa.me/919969606753" className="text-[10px] font-bold text-green-500 hover:text-green-400 uppercase tracking-widest flex items-center gap-1">
                WhatsApp Booking
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
