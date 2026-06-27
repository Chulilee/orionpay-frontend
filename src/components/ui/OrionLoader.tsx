'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface OrionLoaderProps {
  size?: number;
  text?: string;
  fullscreen?: boolean;
  className?: string;
}

export default function OrionLoader({
  size = 120,
  text = 'Loading OrionPay...',
  fullscreen = false,
  className = '',
}: OrionLoaderProps) {
  const prefersReducedMotion = useReducedMotion();

  const shouldReduceMotion = prefersReducedMotion ?? false;

  const containerClasses = fullscreen
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/90 backdrop-blur-sm'
    : 'inline-flex flex-col items-center justify-center';

  return (
    <div className={`${containerClasses} ${className}`}>
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Orbit Ring with glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px solid transparent',
            background: 'linear-gradient(#050816, #050816) padding-box, linear-gradient(135deg, #4F8CFF, #8B5CF6, #38BDF8) border-box',
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.4), 0 0 40px rgba(79, 140, 255, 0.2), inset 0 0 20px rgba(56, 189, 248, 0.1)',
          }}
          animate={shouldReduceMotion ? {} : {
            boxShadow: [
              '0 0 20px rgba(56, 189, 248, 0.4), 0 0 40px rgba(79, 140, 255, 0.2), inset 0 0 20px rgba(56, 189, 248, 0.1)',
              '0 0 30px rgba(56, 189, 248, 0.6), 0 0 60px rgba(79, 140, 255, 0.3), inset 0 0 30px rgba(56, 189, 248, 0.2)',
              '0 0 20px rgba(56, 189, 248, 0.4), 0 0 40px rgba(79, 140, 255, 0.2), inset 0 0 20px rgba(56, 189, 248, 0.1)',
            ],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main circular logo that rotates */}
        <motion.svg
          width={size * 0.7}
          height={size * 0.7}
          viewBox="0 0 100 100"
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={shouldReduceMotion ? {} : {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <defs>
            <linearGradient id="orionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F8CFF" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          {/* Orion constellation outline within the circle */}
          <path
            d="M50 15 L65 35 L60 55 L50 70 L40 55 L35 35 Z"
            fill="none"
            stroke="url(#orionGradient)"
            strokeWidth="2"
          />
          <path d="M35 35 L15 45" stroke="url(#orionGradient)" strokeWidth="1.5" />
          <path d="M65 35 L85 45" stroke="url(#orionGradient)" strokeWidth="1.5" />
          <path d="M40 55 L30 80" stroke="url(#orionGradient)" strokeWidth="1.5" />
          <path d="M60 55 L70 80" stroke="url(#orionGradient)" strokeWidth="1.5" />
        </motion.svg>

        {/* Center star that pulses */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-white"
          style={{
            boxShadow: '0 0 10px #FFFFFF, 0 0 20px #38BDF8',
          }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Small planet that orbits */}
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6, #4F8CFF)',
            boxShadow: '0 0 8px rgba(139, 92, 246, 0.8)',
            left: '50%',
            top: '5%',
            transform: 'translateX(-50%)',
          }}
          animate={shouldReduceMotion ? {} : {
            rotate: 360,
            x: [0, 0],
            y: [0, 0],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Loading text */}
      {text && (
        <motion.p
          className="mt-4 text-white/80 text-sm font-medium"
          style={{ textShadow: '0 0 10px rgba(56, 189, 248, 0.5)' }}
          animate={shouldReduceMotion ? {} : {
            opacity: [0.6, 1, 0.6],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}