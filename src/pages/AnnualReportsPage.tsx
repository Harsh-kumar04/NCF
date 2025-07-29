import React, { useEffect } from 'react';
import groupImg from "../assets/group.jpg";
import fileIcon from "../assets/report-annual.jpg";
import filePath2020 from "../assets/files/ncf-report-2020-2021.pdf";
import filePath2021 from "../assets/files/ncf-report-2021-2022.pdf";
import filePath2022 from "../assets/files/ncf-report-2022-2023.pdf";
import filePath2023 from "../assets/files/ncf-report-2023-2024.pdf";



const reports = [
  {
    year: 2023 - 2024,
    title: "2023 - 2024 Annual Report",
    coverUrl: `${fileIcon}`,
    pdfUrl: `${filePath2023}`,
  },
  {
    year: 2022 - 2023,
    title: "2022 - 2023 Annual Report",
    coverUrl: `${fileIcon}`,
    pdfUrl: `${filePath2022}`,
  },
  {
    year: 2021 - 2022,
    title: "2021 - 2022 Annual Report",
    coverUrl: `${fileIcon}`,
    pdfUrl: `${filePath2021}`,
  },
  {
    year: 2020 - 2021,
    title: "2020 - 2021 Annual Report",
    coverUrl: `${fileIcon}`,
    pdfUrl: `${filePath2020}`,
  },
];

const AnnualReportsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Annual Reports | Noble Citizen Foundation';
  }, []);

  return (
    <main className="relative">
      {/* Hero Section with Background */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${groupImg})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            Our Annual Reports
          </h1>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24">
        {reports.map((report) => (
          <div
            key={report.year}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 hover:scale-105"
          >
            <img
              src={report.coverUrl}
              alt={`${report.year} cover`}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{report.title}</h2>
              <a
                href={report.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View PDF
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default AnnualReportsPage;
