import React from 'react';

const Founders = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Founders</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Catherine */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Catherine</h3>
            <div className="space-y-2 text-gray-600">
              <p>KCL BSc(Hons) Pharmacology & Molecular Genetics</p>
              <p>UCL MSc Cell and Gene Therapy</p>
              <a 
                href="mailto:sejjc91@ucl.ac.uk" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                sejjc91@ucl.ac.uk
              </a>
            </div>
          </div>

          {/* Jack */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Jack</h3>
            <div className="space-y-2 text-gray-600">
              <p>UCL MSc Computer Science</p>
              <p>University of Liverpool BEng Electrical and Electronic Engineering</p>
              <a 
                href="mailto:ucabjt7@ucl.ac.uk" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
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