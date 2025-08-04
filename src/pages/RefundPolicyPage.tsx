import React, { useEffect, useState } from 'react';

const RefundPolicy: React.FC = () => {
  const [showPolicy, setShowPolicy] = useState(true);
  const [showImportant, setShowImportant] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = 'Refund Policy | Noble Citizen Foundation';
    window.scrollTo(0, 0); 
  }, []);

  return (
    <section className="section bg-white text-gray-800">
      <div className="container-custom">
        <div className="min-h-screen text-gray-800">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>

            {/* Refund Policy Section */}
            <div className="mb-6 border-b border-gray-300 pb-4">
              <button
                onClick={() => setShowPolicy(!showPolicy)}
                className="text-left w-full font-semibold text-gray-700 hover:text-black transition text-xl mb-2"
              >
                ➤ Refund Policy
              </button>
              {showPolicy && (
                <p className="text-red-500">
                  As donations are received for charitable purposes, refunds are not applicable.
                </p>
              )}
            </div>

            {/* Important Section */}
            <div className="mb-6 border-b border-gray-300 pb-4">
              <button
                onClick={() => setShowImportant(!showImportant)}
                className="text-left w-full font-semibold text-gray-700  hover:text-black transition text-xl mb-2"
              >
                ➤ Important
              </button>
              {showImportant && (
                <ul className="list-disc list-inside text-red-500 space-y-2">
                  <li>
                    Donations are eligible for <strong>50% tax exemption</strong> under Section 80G of the Income Tax Act.
                  </li>
                  <li>
                    <strong>PAN number</strong> is mandatory for tax exemption purposes, as per Income Tax Department regulations.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
