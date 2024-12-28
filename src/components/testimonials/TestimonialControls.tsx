import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

export function TestimonialControls({ 
  onPrevious, 
  onNext, 
  currentIndex, 
  total 
}: TestimonialControlsProps) {
  return (
    <div className="flex items-center justify-center gap-6 mt-12">
      <button
        onClick={onPrevious}
        className="group relative p-3 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity" />
        <ChevronLeft className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
      </button>

      <div className="flex gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`
              h-2 rounded-full transition-all duration-300 cursor-pointer
              ${currentIndex === index 
                ? 'w-8 bg-gradient-to-r from-blue-500 to-blue-600' 
                : 'w-2 bg-blue-100 hover:bg-blue-200'
              }
            `}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="group relative p-3 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Next testimonial"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity" />
        <ChevronRight className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}