import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="bg-pink-200 h-4"></div>
      <div className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} DermaIQ. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <img 
                  src="/images/xhRjJ9mT_400x400.jpg" 
                  alt="UCL Computer Science Logo" 
                  className="h-14 w-auto rounded"
                />
              </div>
              <p className="text-green-600 font-medium">
                A UCL Computer Science Spin-Out
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pink-200 h-4"></div>
    </footer>
  );
} 