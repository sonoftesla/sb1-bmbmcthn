import React from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive?: boolean;
}

export function TestimonialCard({ testimonial, isActive = false }: TestimonialCardProps) {
  return (
    <div 
      className={`
        transform transition-all duration-500 ease-out
        ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}
    >
      <div className="relative bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] p-8 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-50 rounded-full -ml-12 -mb-12" />
        
        {/* Content container */}
        <div className="relative">
          {/* Quote icon with gradient background */}
          <div className="absolute -top-2 -left-2 w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-10" />
            <Quote className="w-6 h-6 text-blue-600" />
          </div>

          {/* Main content */}
          <div className="pt-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              "{testimonial.quote}"
            </p>

            {/* Author info with enhanced layout */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500/20 to-transparent rounded-full" />
                <div className="pl-2">
                  <p className="font-semibold text-gray-900 mb-0.5">{testimonial.author}</p>
                  <p className="text-blue-600 font-medium mb-0.5">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}