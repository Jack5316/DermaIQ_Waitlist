import React from 'react';

const Founders = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-heading">Meet Our Founders ✨</h2>
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {/* Catherine */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-pink-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-primary">Catherine</h3>
            <div className="space-y-2 text-text">
              <p>KCL BSc(Hons) Pharmacology & Molecular Genetics</p>
              <p>UCL MSc Cell and Gene Therapy</p>
              <a 
                href="mailto:sejjc91@ucl.ac.uk" 
                className="text-secondary hover:text-accent transition-colors"
              >
                sejjc91@ucl.ac.uk
              </a>
            </div>
          </div>

          {/* Jack */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-pink-200 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-primary">Jack</h3>
            <div className="space-y-2 text-text">
              <p>UCL MSc Computer Science</p>
              <p>University of Liverpool BEng Electrical and Electronic Engineering</p>
              <a 
                href="mailto:ucabjt7@ucl.ac.uk" 
                className="text-secondary hover:text-accent transition-colors"
              >
                ucabjt7@ucl.ac.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders; 