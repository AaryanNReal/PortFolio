'use client';

import type { Metadata } from 'next';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import  useMetadata  from './hooks/useMetadata';

export default function Home() {
  useEffect(() => {
    // Create floating particles effect
    const createParticles = () => {
      const numParticles = 20;
      const container = document.querySelector('.particles-container');
      
      if (container) {
        // Clear any existing particles
        container.innerHTML = '';
        
        for (let i = 0; i < numParticles; i++) {
          const particle = document.createElement('div');
          particle.className = 'absolute rounded-full opacity-20';
          
          // Randomize size (8-24px)
          const size = Math.floor(Math.random() * 16) + 8;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          
          // Randomize starting position
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          
          // Assign random backgrounds
          const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-emerald-400'];
          particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
          
          // Add animation with random duration
          const duration = 15 + Math.random() * 30;
          particle.style.animation = `float ${duration}s infinite ease-in-out`;
          
          container.appendChild(particle);
        }
      }
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

   useMetadata({
  title: 'Aaryan Sharma | Full Stack Developer',
  description: 'Personal portfolio of Aaryan Sharma, showcasing projects, skills, and professional experience as a Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  keywords: [
    'portfolio',
    'Aaryan Sharma',
    'full stack developer',
    'web development',
    'react developer',
    'nextjs developer',
    'typescript',
    'frontend developer',
    'backend developer'
  ],
  image: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/images/me.jpg`,
  siteName: 'Aaryan Sharma Portfolio',
});
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          50% { 
            transform: translateY(0) translateX(20px) rotate(0deg); 
          }
          75% { 
            transform: translateY(20px) translateX(10px) rotate(-5deg); 
          }
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }
        
        .bg-grid {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
      `}</style>
    
      <div className="particles-container fixed inset-0 overflow-hidden pointer-events-none z-0"></div>
      
      <div className="fixed inset-0 gradient-bg bg-grid -z-10"></div>
      
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between py-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <section id="hero" className="mb-10 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <Hero />
          </section>
          
          <section id="about" className="mb-20 relative">
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            <About />
          </section>
          
          <section id="education" className="mb-20 relative">
            <div className="absolute -left-6 -top-6 w-28 h-28 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-1000"></div>
            <Education />
          </section>
          
          <section id="experience" className="mb-20 relative">
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-3000"></div>
            <Experience />
          </section>
          
          <section id="skills" className="mb-20 relative backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl">
            <Skills />
          </section>
          
          <section id="projects" className="mb-20 relative backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl">
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <Projects />
          </section>
          
          <section id="contact" className="mb-20 relative backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl">
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <Contact />
          </section>
          
          <section id="resume" className="mb-10 relative">
            <Resume />
          </section>
        </div>
      </main>
      
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </>
  );
}