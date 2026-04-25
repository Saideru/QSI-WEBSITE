/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  Briefcase, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  CheckCircle2, 
  Factory, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Building2,
  Trophy
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Job Openings", href: "#jobs" },
    { name: "Our Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white border-b-2 border-qsi-accent py-2 shadow-md" : "bg-white py-4 border-b border-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/img/QSI_LOGO.png" alt="QSI Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-qsi-dark hover:text-qsi-medium font-display font-bold uppercase text-xs tracking-wider transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#jobs"
                className="bg-qsi-dark text-white px-6 py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-qsi-medium transition-all transform hover:scale-105 shadow-md"
              >
                Apply Now 📋
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-qsi-dark p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-qsi-dark overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-qsi-dark hover:bg-qsi-light rounded-md font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#jobs"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 bg-qsi-dark text-white rounded-md font-bold text-center"
              >
                Apply Now 📋
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-qsi-dark overflow-hidden">
      <div className="diagonal-accent-solid opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            src="/img/QSI_LOGO.png" 
            alt="QSI Logo" 
            className="h-20 w-auto mb-8 bg-white p-2 rounded-lg"
            referrerPolicy="no-referrer"
          />
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight max-w-3xl"
          >
            Your Trusted Manpower Partner in the Philippines
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-qsi-accent font-sans max-w-2xl"
          >
            Connecting skilled workers with top companies in Metro Manila, Cavite, and beyond. Be part of our growing team today!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#jobs" 
              className="bg-white text-qsi-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-qsi-bg transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              View Job Openings 💼
            </a>
            <a 
              href="#contact" 
              className="border-2 border-qsi-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-qsi-accent hover:text-qsi-dark transition-all flex items-center justify-center gap-2"
            >
              Partner With Us 🤝
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
          >
            <div className="flex items-center gap-3 text-white bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="text-qsi-accent" size={32} />
              <span className="font-bold">SEC Registered Business</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <MapPin className="text-qsi-accent" size={32} />
              <span className="font-bold">Taguig | Mandaluyong | Cavite</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <Factory className="text-qsi-accent" size={32} />
              <span className="font-bold">Industrial & Production Specialists</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const highlights = [
    { icon: <Building2 />, title: "Head Office", desc: "Taguig, Metro Manila" },
    { icon: <MapPin />, title: "Satellite Office", desc: "Shaw Blvd, Mandaluyong" },
    { icon: <Users />, title: "Field Operations", desc: "Carmona, Cavite" },
    { icon: <Trophy />, title: "Mission", desc: "Quality Manpower. Reliable Service." },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 pane-border-left pl-8">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase text-qsi-dark mb-6 tracking-tight">
              About QuestServ Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              QuestServ Solutions Inc. (QSI) is a Philippines-based manpower service provider and employment agency dedicated to connecting qualified workers with reputable companies across various industries. With our head office in Taguig, Metro Manila, a satellite office at Summit One, Shaw Boulevard, Mandaluyong City, and active recruitment operations in Carmona, Cavite, we specialize in placing production operators, skilled tradespeople, riders, laborers, and support staff in industrial and manufacturing environments. 
            </p>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed bg-qsi-light p-4 rounded-xl">
              At QSI, we believe that every worker deserves a stable job with fair pay and proper benefits — and every company deserves a reliable, ready workforce.
            </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-qsi-light p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all border border-qsi-bg"
              >
                <div className="text-qsi-dark mb-3 p-3 bg-white rounded-full shadow-inner">
                  {item.icon}
                </div>
                <h4 className="font-bold text-qsi-dark">{item.title}</h4>
                <p className="text-sm text-qsi-medium font-semibold">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceList = [
    {
      icon: <Factory size={40} />,
      title: "Manpower Placement",
      desc: "We source, screen, and deploy qualified workers to manufacturing, industrial, and production companies across Luzon."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Recruitment & Staffing",
      desc: "End-to-end recruitment from job posting to deployment, handling all pre-employment documentary requirements."
    },
    {
      icon: <Truck size={40} />,
      title: "Rider / Delivery Staffing",
      desc: "Dedicated rider recruitment and deployment for logistics and delivery operations."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Employee Benefits Management",
      desc: "Workers enjoy competitive daily rates, HMO/health card, PPE provision, and holiday packages."
    }
  ];

  return (
    <section id="services" className="py-20 bg-qsi-light relative overflow-hidden">
      <div className="diagonal-accent opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-sm font-display font-extrabold uppercase tracking-[0.2em] text-qsi-medium mb-4 text-center">Excellence in Service</h2>
        <h2 className="text-4xl font-display font-extrabold uppercase text-qsi-dark mb-12 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-qsi-medium hover:shadow-xl hover:transform hover:-translate-y-1 transition-all"
            >
              <div className="text-qsi-dark flex justify-start mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-display font-bold uppercase tracking-wide text-qsi-dark mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface Job {
  title: string;
  image: string;
  salary: string;
  location: string;
  email: string;
  requirements: string[];
  cobrand: boolean;
}

const JobCard: React.FC<{ job: Job; initialExpanded?: boolean }> = ({ job, initialExpanded = false }) => {
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <motion.div 
      layout
      className="bg-qsi-dark text-white rounded-xl overflow-hidden shadow-xl border-l-[6px] border-qsi-accent relative group"
    >
      <div className="job-card-accent" />
      <div className="p-1 relative z-10 flex flex-col h-full">
        <div className="h-40 overflow-hidden relative border-b border-white/10">
          <img src={job.image} alt={job.title} className="w-full h-full object-cover grayscale brightness-125 hover:grayscale-0 transition-all duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
          {job.cobrand && (
            <div className="absolute top-2 left-2 flex gap-2">
               <img src="/img/QSI_LOGO.png" alt="QSI" className="h-5 bg-white p-0.5 rounded shadow" referrerPolicy="no-referrer" />
               <img src="/img/W_Hydrocloroidsinc.png" alt="W Hydrocolloids" className="h-5 bg-white p-0.5 rounded shadow" referrerPolicy="no-referrer" />
            </div>
          )}
        </div>
        <div className="p-5 flex-grow">
          <h3 className="text-lg font-display font-bold uppercase tracking-wide mb-2 text-white">{job.title}</h3>
          <div className="flex items-center gap-2 mb-4 text-[10px] font-bold uppercase tracking-widest opacity-70">
            <MapPin size={12} className="text-qsi-accent" />
            {job.location}
          </div>
          
          <div className="mb-4">
            <span className="text-xl font-display font-extrabold text-qsi-accent">{job.salary}</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter opacity-60 block">daily rate + benefits</span>
          </div>

          <button 
            onClick={() => setExpanded(!expanded)}
            className="md:hidden flex items-center justify-between w-full p-2 bg-white/5 rounded-lg mb-4 text-[10px] uppercase font-bold tracking-widest"
          >
            Requirements {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <div className={`${expanded ? "block" : "hidden"} md:block mb-6`}>
            <ul className="text-[11px] space-y-1.5 opacity-80">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-qsi-accent mt-1 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-5 pt-0 mt-auto">
          <a 
            href={`mailto:${job.email}`}
            className="w-full bg-white text-qsi-dark py-2.5 rounded shadow-sm font-display font-bold uppercase text-[10px] tracking-[0.2em] text-center block hover:bg-qsi-accent hover:text-qsi-dark transition-all transform active:scale-95"
          >
            Details & Apply
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const JobOpenings = () => {
  const jobs = [
    {
      title: "Male Production Operator",
      image: "/img/MaleOperator.png",
      salary: "₱479",
      location: "Carmona, Cavite",
      email: "carmonaqsi@gmail.com",
      requirements: ["Jr/Sr HS grad", "With or without experience", "Shifting schedule", "18+ years old", "No visible tattoo"],
      cobrand: false
    },
    {
      title: "Blending Operator",
      image: "/img/BlendingOperator.png",
      salary: "₱479 + ₱50 allowance",
      location: "Carmona, Cavite",
      email: "carmonaqsi@gmail.com",
      requirements: ["Male only", "Jr/Sr HS grad", "With or without experience", "Shifting schedule", "18+ years old", "No visible tattoo"],
      cobrand: false
    },
    {
      title: "Laborer",
      image: "/img/Laborer.png",
      salary: "₱479",
      location: "Carmona, Cavite",
      email: "carmonaqsi@gmail.com",
      requirements: ["Jr/Sr HS grad", "Knowledgeable in Masonry & Carpentry", "Shifting schedule", "18+ years old", "No visible tattoo"],
      cobrand: false
    },
    {
      title: "Plant Mechanic",
      image: "/img/PlantMechanic.png",
      salary: "Competitive",
      location: "Mandaluyong",
      email: "carmonaqsi@gmail.com",
      requirements: ["Male only, 18+", "Vocational grad or min 2yrs exp", "Light/Heavy equipment handling", "Troubleshooting & overhauling", "Deployment: W Hydrocolloids Inc."],
      cobrand: true
    },
    {
      title: "Utility",
      image: "/img/Utility.png",
      salary: "₱600 + fixed 2hrs OT",
      location: "Mandaluyong",
      email: "carmonaqsi@gmail.com",
      requirements: ["Male only, 18+", "Jr/Sr HS grad", "No visible tattoo", "6 mos - 1yr janitorial exp", "Deployment: W Hydrocolloids Inc."],
      cobrand: true
    }
  ];

  return (
    <section id="jobs" className="py-20 bg-white relative">
      <div className="diagonal-accent-solid opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-qsi-dark mb-4">We Are Hiring! 💼</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Browse our current open positions and submit your resume today. Start your journey with QSI.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {jobs.map((job, idx) => (
            <JobCard key={idx} job={job} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-qsi-medium p-8 rounded-3xl text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="z-10">
            <h3 className="text-2xl font-bold mb-2">Don't see your role listed?</h3>
            <p className="opacity-90">Send your resume anyway — we're always growing and may have a spot for you!</p>
          </div>
          <a 
            href="mailto:questserv2022@gmail.com" 
            className="z-10 bg-white text-qsi-dark px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-qsi-bg transition-all shadow-lg"
          >
            Send Resume 📧
          </a>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        </motion.div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: <CheckCircle2 size={32} />, title: "Competitive Daily Rates", desc: "Earn ₱479–₱600/day depending on role, plus overtime pay." },
    { icon: <ShieldCheck size={32} />, title: "HMO & Health Card", desc: "Health coverage for all qualified deployed employees." },
    { icon: <Briefcase size={32} />, title: "PPE Provided", desc: "Personal Protective Equipment supplied for all industrial roles." },
    { icon: <Users size={32} />, title: "Christmas Packages", desc: "Seasonal bonuses and holiday packages for long-term workers." },
    { icon: <ArrowRight size={32} />, title: "Assisted Pre-Employment", desc: "We guide you through all documentary requirements." },
  ];

  return (
    <section className="py-20 bg-qsi-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-display font-extrabold uppercase tracking-[0.2em] text-qsi-accent mb-4 text-center">Advantages of Joining QSI</h2>
        <h2 className="text-4xl font-display font-extrabold uppercase text-white mb-16 text-center">Why Work With Us? 🎁</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="benefit-pill p-6 rounded-lg text-qsi-dark flex flex-col gap-2"
            >
              <h4 className="text-sm font-display font-extrabold uppercase tracking-tight text-qsi-dark">{benefit.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-qsi-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display font-bold text-qsi-dark mb-12">Our Deployment Partners</h2>
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-[50px] shadow-xl border-t-8 border-partner-blue flex flex-col items-center">
          <img src="/img/W_Hydrocloroidsinc.png" alt="W Hydrocolloids" className="h-24 mb-8" referrerPolicy="no-referrer" />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            "QuestServ Solutions Inc. is proud to deploy workers to reputable industrial companies. Our flagship deployment partner is W Hydrocolloids, Inc., where our Plant Mechanics and Utility staff serve with excellence."
          </p>
          <div className="w-16 h-1 bg-partner-blue rounded-full" />
        </div>
        <div className="mt-16 text-qsi-medium font-bold opacity-60">
          Growing our network — more partners coming soon
        </div>
      </div>
    </section>
  );
};

const ApplySteps = () => {
  const steps = [
    { num: "1", title: "Browse Positions", desc: "Find open roles on this page or our Facebook (Qsi Carmona)." },
    { num: "2", title: "Send Resume", desc: "Email carmonaqsi@gmail.com or hrjhane.qsi@gmail.com." },
    { num: "3", title: "Interview", desc: "Wait for our HR team to contact you for a scheduled interview." },
    { num: "4", title: "Deployment", desc: "Complete requirements and get deployed to our partners." }
  ];

  return (
    <section className="py-20 bg-white border-l-8 border-qsi-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-qsi-dark mb-16 px-4">How to Apply 📋</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-qsi-light z-0" />
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10 px-4">
              <div className="w-16 h-16 bg-qsi-dark text-white text-3xl font-bold flex items-center justify-center rounded-full border-4 border-white mb-6 shadow-xl">
                {step.num}
              </div>
              <h4 className="text-xl font-bold text-qsi-dark mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-qsi-dark text-white relative overflow-hidden">
      <div className="diagonal-accent opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-8">
            <div className="bg-white/10 p-10 rounded-[40px] backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-qsi-accent">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <Phone className="text-qsi-accent flex-shrink-0" size={24} />
                  <div>
                    <p className="block">0917 627 3371</p>
                    <p className="block">0950 844 2730</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-qsi-accent flex-shrink-0" size={24} />
                  <div className="text-sm">
                    <p className="block">questserv2022@gmail.com</p>
                    <p className="block">carmonaqsi@gmail.com</p>
                    <p className="block">hrjhane.qsi@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Facebook className="text-qsi-accent flex-shrink-0" size={24} />
                  <p>Qsi Carmona</p>
                </li>
                <li className="flex items-start gap-4 border-t border-white/10 pt-6">
                  <MapPin className="text-qsi-accent flex-shrink-0 mt-1" size={24} />
                  <div className="text-sm space-y-3">
                    <p><strong>Head Office:</strong> Taguig, Metro Manila</p>
                    <p><strong>Satellite:</strong> Summit One, 14th Flr, Shaw Blvd, Mandaluyong</p>
                    <p><strong>Operations:</strong> Carmona, Cavite</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-10 rounded-[40px] text-qsi-dark shadow-2xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full p-4 bg-qsi-light rounded-2xl border-none focus:ring-2 focus:ring-qsi-medium" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider">Contact Number</label>
                  <input type="tel" className="w-full p-4 bg-qsi-light rounded-2xl border-none focus:ring-2 focus:ring-qsi-medium" required />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full p-4 bg-qsi-light rounded-2xl border-none focus:ring-2 focus:ring-qsi-medium" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider">Position Applying For</label>
                  <select className="w-full p-4 bg-qsi-light rounded-2xl border-none focus:ring-2 focus:ring-qsi-medium">
                    <option>Male Production Operator</option>
                    <option>Blending Operator</option>
                    <option>Laborer</option>
                    <option>Plant Mechanic</option>
                    <option>Utility</option>
                    <option>Rider</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider">Preferred Location</label>
                  <select className="w-full p-4 bg-qsi-light rounded-2xl border-none focus:ring-2 focus:ring-qsi-medium">
                    <option>Carmona Cavite</option>
                    <option>Mandaluyong</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider">Message</label>
                <textarea rows={3} className="w-full p-4 bg-qsi-light rounded-2xl border-none focus:ring-2 focus:ring-qsi-medium"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-qsi-dark text-white py-4 rounded-full font-bold text-lg hover:bg-qsi-medium transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t-8 border-qsi-dark pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src="/img/QSI_LOGO.png" alt="QSI Logo" className="h-16 mb-6" referrerPolicy="no-referrer" />
            <p className="text-2xl font-display font-bold text-qsi-dark mb-2 italic">Be Part of Our Growing Team!</p>
            <p className="text-gray-600 max-w-sm">Providing expert manpower services to industrial leaders in the Philippines since 2022.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-qsi-dark mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-600 hover:text-qsi-dark transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-qsi-dark transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-qsi-dark transition-colors">Services</a></li>
              <li><a href="#jobs" className="text-gray-600 hover:text-qsi-dark transition-colors">Job Openings</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-qsi-dark mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-600"><Phone size={16} className="text-qsi-medium" /> 0917 627 3371</li>
              <li className="flex items-center gap-2 text-gray-600"><Mail size={16} className="text-qsi-medium" /> questserv2022@gmail.com</li>
              <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600"><Facebook size={16} className="text-qsi-medium" /> Qsi Carmona</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-6">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase text-gray-400 mb-1">Deployment Partner</span>
              <img src="/img/W_Hydrocloroidsinc.png" alt="W Hydrocolloids" className="h-10" referrerPolicy="no-referrer" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">© 2025 QuestServ Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-qsi-accent selection:text-qsi-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <JobOpenings />
      <Benefits />
      <Clients />
      <ApplySteps />
      <Contact />
      <Footer />
    </div>
  );
}
