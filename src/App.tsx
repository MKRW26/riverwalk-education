/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Users, 
  MessageSquare, 
  Star, 
  GraduationCap, 
  Mail, 
  Phone, 
  ChevronRight, 
  CheckCircle2,
  Menu,
  X,
  ArrowRight
} from "lucide-react";

// Asset paths from the public folder
const LOGO_SQUARE = "rw_logo.png";
const LOGO_HORIZONTAL = "03_Logo_Horizontal.png";
const PORTRAIT = "portrait.png";
const KAKAO_ICON = "Kakao.png";
const SHOES_IMAGE = "RW_Shoes.png";

const TESTIMONIAL_IMAGES = {
  DAYEON: "Dayeon.png",
  KYLE: "Kyle.png",
  MINSUN: "Minsun.png",
  PETER: "Peter.png",
  SUJIN: "Sujin.png",
  KEVIN: "Kevin.png"
};

const RWLogo = ({ className = "h-10 w-10", isHero = false }: { className?: string, isHero?: boolean }) => (
  <div className={`relative flex items-center justify-center overflow-hidden ${isHero ? '' : 'bg-brand-deep rounded-lg'} ${className}`}>
    <img 
      src={LOGO_SQUARE} 
      alt="Riverwalk Education" 
      className={`w-full h-full ${isHero ? 'object-contain' : 'object-contain p-1'}`}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Class Options", href: "#classes" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "한국어", href: "/kr" },
  ];

  const NavContent = () => {
    const location = useLocation();
    return (
      <>
        {navLinks.map((link) => {
          const isExternal = link.href.startsWith('/');
          if (isExternal) {
            return (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-brand-light transition-colors"
              >
                {link.name}
              </Link>
            );
          }
          return (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-600 hover:text-brand-light transition-colors"
            >
              {link.name}
            </a>
          );
        })}
      </>
    );
  };

  const MobileNavContent = () => {
    return (
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => {
          const isExternal = link.href.startsWith('/');
          if (isExternal) {
            return (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-zinc-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          }
          return (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    );
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const MainPage = () => (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-deep/2 -skew-x-12 transform origin-top-right -z-10" />
        <div className="section-padding grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/10 text-brand-light text-sm font-semibold border border-brand-light/20">
              <GraduationCap className="w-4 h-4" />
              <span>Empowering Students Since 2005</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-deep leading-tight font-bold">
              Unlocking Potential Through <span className="text-brand-light italic">Focused</span> Mentorship.
            </h1>
            <p className="text-xl text-brand-deep/80 max-w-lg leading-relaxed">
              Tailored educational strategies and custom made materials for students who want a personalized, professional experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-brand-deep text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="px-8 py-4 border border-zinc-200 text-zinc-600 rounded-xl font-semibold hover:bg-zinc-50 transition-all">
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <RWLogo isHero className="aspect-square w-full scale-110 rounded-[3rem]" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-50 border-y border-zinc-100">
        <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-deep font-bold">About Me</h2>
            <div className="space-y-4">
              <p className="text-lg text-brand-deep/80 leading-relaxed">
                Since 2005, I have been working with students to help them attain their English language goals by providing a fun and supportive learning environment.
              </p>
              <p className="text-lg text-brand-deep/80 leading-relaxed">
                As every learner is unique, I prepare lessons that are tailored to their individual needs and interests. This approach has allowed me to continuously help students improve their reading/writing and speaking/listening skills so they can move forward with confidence in their language journey.
              </p>
            </div>

            <div className="space-y-8 pt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-deep border-b border-zinc-200 pb-2">Education</h3>
                <ul className="space-y-3">
                  {[
                    "Bachelor of Arts 2004 McMaster University, Canada",
                    "Master of Education 2019 Vancouver Island University, Canada"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-light shrink-0 mt-1" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-brand-deep border-b border-zinc-200 pb-2">Career Highlights</h3>
                <div className="space-y-6">
                  {[
                    {
                      category: "Business English Class",
                      items: [
                        "Prime Minister's Office of South Korea",
                        "KBS Media Center",
                        "Korea Electric Power Corporation",
                        "Hanwha Chemical",
                        "Samsung Techwin"
                      ]
                    },
                    {
                      category: "Business English 1:1",
                      items: [
                        "CJ E&M Executives",
                        "SK Gas Executives"
                      ]
                    },
                    {
                      category: "Higher Education English Class",
                      items: [
                        "Kangnam University, Korea",
                        "Vancouver Island University, Canada"
                      ]
                    }
                  ].map((group, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-xs font-bold text-brand-light uppercase tracking-widest">{group.category}</h4>
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-zinc-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-light shrink-0 mt-1 opacity-70" />
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aspect-square rounded-full bg-brand-deep flex items-center justify-center relative p-8 shadow-2xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/20 shadow-inner bg-brand-deep">
                 <img 
                  src={PORTRAIT} 
                  alt="Mike - Founder of Riverwalk Education" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
              </div>
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg border border-zinc-100"
              >
                <p className="text-xs font-bold text-brand-deep">Mike</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32">
        <div className="section-padding text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif text-brand-deep font-bold">My Philosophy</h2>
            <p className="text-brand-deep/70 text-lg italic">Every student’s path to success is unique. At Riverwalk, I embrace the natural shifts and turns of your educational journey, walking with you as a dedicated partner committed to your growth and discovery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Curiosity First",
                description: "By prioritizing a student’s innate interests, I transform every lesson into a collaborative discovery that makes learning feel less like a requirement and more like a pursuit."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Building Rapport",
                description: "I focus on establishing a foundation of trust and mutual respect, ensuring that students feel safe taking the creative risks necessary for genuine linguistic and personal development."
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Committing to Growth",
                description: "I view education as an evolving, long-term journey, consistently adapting my strategies to meet the shifting needs and ambitious aspirations of every individual I mentor."
              }
            ].map((phil, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-left space-y-4 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-deep text-white flex items-center justify-center mb-6">
                  {phil.icon}
                </div>
                <h3 className="text-2xl font-serif text-brand-deep font-bold">{phil.title}</h3>
                <p className="text-brand-deep/80 leading-relaxed">{phil.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Options */}
      <section id="classes" className="bg-brand-deep py-32 text-white">
        <div className="section-padding space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-4xl md:text-6xl font-serif text-white font-bold">Class Options</h2>
              <p className="text-brand-light/80 text-lg italic tracking-wide">1:1 classes online</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Steady Stream",
                subtitle: "Two 45-Minute Sessions / Week",
                description: "Designed for consistent momentum. Frequent touchpoints allow for active practice and better retention, making this the ideal choice for long-term growth.",
                tag: "Most Popular"
              },
              {
                title: "The Deep Dive",
                subtitle: "One 60-Minute Session / Week",
                description: "A focused, high-impact hour. This format is perfect for students who prefer to immerse themselves in complex topics and enjoy a singular, concentrated block of time.",
                tag: ""
              },
              {
                title: "The Rapid Current",
                subtitle: "Special Intensive Course",
                description: "A bespoke, accelerated program tailored for specific milestones. This intensive track is for those looking to make significant progress in a condensed timeframe.",
                tag: ""
              }
            ].map((pkg, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 relative overflow-hidden group">
                {pkg.tag && (
                  <div className="absolute top-4 right-4 bg-brand-light text-brand-deep text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {pkg.tag}
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-white">{pkg.title}</h3>
                  <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">{pkg.subtitle}</p>
                </div>
                <div className="h-px bg-white/10" />
                <p className="text-zinc-100 leading-relaxed min-h-[100px]">
                  {pkg.description}
                </p>
                <div className="pt-4">
                  <a href="#contact" className="inline-block w-full py-4 text-center rounded-xl border border-brand-light text-brand-light font-bold hover:bg-brand-light hover:text-brand-deep transition-all">
                    Request Info
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="section-padding space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-deep font-bold">Frequently Asked Questions</h2>
            <p className="text-zinc-500 text-lg">Everything you need to know about starting your journey.</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-10">
            {[
              {
                q: "Do you offer a free consultation?",
                a: "Yes, I can meet with you for 10 minutes to answer your questions and talk about your goals."
              },
              {
                q: "How does payment work?",
                a: "You will pay for the 4 weeks session before it begins via e-transfer or online payment."
              },
              {
                q: "How much is the tuition fee?",
                a: "Please contact by email mike@riverwalkedu.com for pricing."
              },
              {
                q: "Can I reschedule a class?",
                a: "Yes, if you contact me at least 24 hours before our class start time, we can reschedule. However, last minute cancellations will not be rescheduled."
              },
              {
                q: "Do I need to buy a textbook?",
                a: "No, not unless there is a specific book you wish to learn with. An email is sent before each lesson containing useful resources and questions to facilitate an educational conversation."
              },
              {
                q: "Is it possible to have a consultation for my child's progress?",
                a: "Yes, I will be happy to talk with parents about their children's needs."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group space-y-4"
              >
                <div className="flex gap-4">
                  <span className="text-brand-light font-serif text-2xl font-bold opacity-30 italic">0{i+1}</span>
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-serif text-brand-deep font-bold group-hover:text-brand-light transition-colors leading-tight">
                      {item.q}
                    </h3>
                    <p className="text-zinc-600 text-lg leading-relaxed pl-1">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 overflow-hidden">
        <div className="section-padding space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-deep font-bold">Voices of Success</h2>
            <p className="text-zinc-500">Don't just take my word for it - here is what students are saying.</p>
          </div>

          <div className="flex animate-scroll gap-8 w-max">
            {[
              {
                text: "Mike’s class helped me adapt in a new school. I relied on his class very much. He always made me feel proud of my progress and I became a more confident speaker",
                author: "Dayeon",
                role: "University Student",
                image: TESTIMONIAL_IMAGES.DAYEON
              },
              {
                text: "Studying with Mike made me a confident communicator for interaction with our company's international stakeholders.",
                author: "Kyle",
                role: "Engineer",
                image: TESTIMONIAL_IMAGES.KYLE
              },
              {
                text: "Mike's class was essential for facilitating a smooth transition to a new country. His classes were well researched and tailored just for me.",
                author: "Minsun",
                role: "Pharmacist",
                image: TESTIMONIAL_IMAGES.MINSUN
              },
              {
                text: "Mike is the best teacher I've ever had! He is professional, committed, kind and fun.",
                author: "Peter",
                role: "High School History Teacher",
                image: TESTIMONIAL_IMAGES.PETER
              },
              {
                text: "I very much enjoyed taking class with Mike. His lessons were interesting and relevant for my language goals.",
                author: "Sujin",
                role: "Public School English Teacher",
                image: TESTIMONIAL_IMAGES.SUJIN
              },
              {
                text: "I needed to work on my writing for IELTS. Mike's help and patience was exactly what I needed to improve my score.",
                author: "Kevin",
                role: "High School Math Teacher",
                image: TESTIMONIAL_IMAGES.KEVIN
              },
              // Duplicate testimonials for seamless scrolling
              {
                text: "Mike’s class helped me adapt in a new school. I relied on his class very much. He always made me feel proud of my progress and I became a more confident speaker",
                author: "Dayeon",
                role: "University Student",
                image: TESTIMONIAL_IMAGES.DAYEON
              },
              {
                text: "Studying with Mike made me a confident communicator for interaction with our company's international stakeholders.",
                author: "Kyle",
                role: "Engineer",
                image: TESTIMONIAL_IMAGES.KYLE
              },
              {
                text: "Mike's class was essential for facilitating a smooth transition to a new country. His classes were well researched and tailored just for me.",
                author: "Minsun",
                role: "Pharmacist",
                image: TESTIMONIAL_IMAGES.MINSUN
              },
              {
                text: "Mike is the best teacher I've ever had! He is professional, committed, kind and fun.",
                author: "Peter",
                role: "High School History Teacher",
                image: TESTIMONIAL_IMAGES.PETER
              },
              {
                text: "I very much enjoyed taking class with Mike. His lessons were interesting and relevant for my language goals.",
                author: "Sujin",
                role: "Public School English Teacher",
                image: TESTIMONIAL_IMAGES.SUJIN
              },
              {
                text: "I needed to work on my writing for IELTS. Mike's help and patience was exactly what I needed to improve my score.",
                author: "Kevin",
                role: "High School Math Teacher",
                image: TESTIMONIAL_IMAGES.KEVIN
              }
            ].map((test, i) => (
              <div key={i} className="w-[400px] p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col justify-between space-y-8">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-light text-brand-light" />)}
                </div>
                <p className="text-zinc-700 italic leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4 border-t border-zinc-200 pt-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-brand-deep overflow-hidden relative">
                    <img 
                      src={test.image} 
                      alt={test.author} 
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) parent.classList.add('bg-brand-deep/10');
                      }}
                    />
                    <span className="text-xl absolute">{test.author[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep">{test.author}</h4>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest leading-tight">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-50">
        <div className="section-padding">
          <div className="glass rounded-[40px] p-8 md:p-20 grid md:grid-cols-2 gap-16 relative overflow-hidden backdrop-blur-3xl">
            <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
               <img src={LOGO_SQUARE} alt="" className="w-80 h-80 rotate-12" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl font-serif text-brand-deep font-bold">Let's Talk About <span className="text-brand-light italic">Your</span> Riverwalk.</h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Every journey begins with a single step. Let’s find the right pace for yours. I personally read and respond to every inquiry. Let’s find the best way forward for your educational journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-brand-deep">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-light" />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Email</p>
                    <p className="text-xl font-medium">mike@riverwalkedu.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-brand-deep">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={KAKAO_ICON} alt="Kakao" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Kakao ID</p>
                    <p className="text-xl font-medium">riverwalkedu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full max-w-md"
              >
                <img 
                  src={SHOES_IMAGE} 
                  alt="Educational Journey" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </>
  );

  const KoreanPage = () => (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center space-y-12 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-serif text-brand-deep font-bold mb-8 leading-tight">
        리버워크 에듀케이션(Riverwalk Education)에 관심을 가져주셔서 진심으로 감사드립니다.
      </h1>
      <div className="text-xl text-zinc-600 leading-relaxed space-y-6">
        <p>혹시 영어로 문의하시는 것이 어려우시다면, 편하게 한국어로 연락해 주셔도 괜찮습니다.</p>
        <p>제 한국어 실력이 아직 많이 부족하지만, 24시간 이내에 정성껏 답변해 드릴 것을 약속드립니다.</p>
        <div className="pt-8 text-brand-deep font-medium">
          <p>감사합니다.</p>
          <p>마이크 드림</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 pt-8 text-brand-deep">
        <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
          <Mail className="w-8 h-8 text-brand-light mx-auto mb-4" />
          <h3 className="text-sm font-bold opacity-50 uppercase mb-2">이메일</h3>
          <p className="text-xl font-medium">mike@riverwalkedu.com</p>
        </div>
        <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
          <img src={KAKAO_ICON} alt="Kakao" className="w-8 h-8 mx-auto mb-4 object-contain" />
          <h3 className="text-sm font-bold opacity-50 uppercase mb-2">카카오톡 ID</h3>
          <p className="text-xl font-medium">riverwalkedu</p>
        </div>
      </div>

      <div className="pt-12">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-light font-bold hover:underline">
          <ArrowRight className="w-4 h-4 rotate-180" /> 메인 페이지로 돌아가기
        </Link>
      </div>
    </div>
  );

  return (
    <BrowserRouter basename="/riverwalk-education">
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
              <img 
                src={LOGO_HORIZONTAL} 
                alt="Riverwalk Education" 
                className="h-12 w-auto object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const next = e.currentTarget.nextElementSibling as HTMLElement;
                  if (next) next.classList.remove('hidden');
                  if (next) next.classList.add('flex');
                }}
              />
              <div className="hidden items-center gap-3">
                <RWLogo className="h-10 w-10" />
                <span className="font-serif text-xl tracking-tight text-brand-deep font-semibold">Riverwalk <span className="text-brand-light">Education</span></span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavContent />
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-zinc-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Nav Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-20 left-0 w-full bg-white border-b border-zinc-100 p-6 md:hidden shadow-xl"
              >
                <MobileNavContent />
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/kr" element={<KoreanPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-brand-deep text-white py-24 border-t border-white/5">
          <div className="section-padding flex flex-col items-center gap-16">
            {/* Navigation Headings */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/80 text-base font-medium">
              <a href="/#about" className="hover:text-brand-light transition-colors">About</a>
              <a href="/#philosophy" className="hover:text-brand-light transition-colors">Philosophy</a>
              <a href="/#classes" className="hover:text-brand-light transition-colors">Classes</a>
              <a href="/#testimonials" className="hover:text-brand-light transition-colors">Testimonials</a>
              <a href="/#faq" className="hover:text-brand-light transition-colors">FAQ</a>
              <a href="/#contact" className="hover:text-brand-light transition-colors">Contact</a>
              <Link to="/kr" className="hover:text-brand-light transition-colors">한국어</Link>
            </div>

            {/* Logo and Branding - Underneath Headings */}
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <img 
                    src={LOGO_HORIZONTAL} 
                    alt="Riverwalk Education" 
                    className="h-20 w-auto brightness-0 invert object-contain" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) {
                        next.style.display = 'flex';
                        next.classList.remove('hidden');
                      }
                    }} 
                  />
                  <div className="hidden items-center gap-3">
                    <RWLogo className="h-12 w-12 brightness-0 invert" />
                    <span className="font-serif text-3xl tracking-tight font-semibold">Riverwalk <span className="text-brand-light">Education</span></span>
                  </div>
                </Link>
              </div>
              
              <p className="text-white/20 text-xs font-mono tracking-[0.2em] uppercase">
                © 2026 Riverwalk Education. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 2)); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

