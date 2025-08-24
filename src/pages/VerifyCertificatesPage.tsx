import { useState } from "react";
import { Search, Award, Download } from "lucide-react";
import html2canvas from "html2canvas";

interface Volunteer {
  fullName: string;
  email: string;
  volunteerTeam: string;
  dateOfJoining: string;
}

export default function VerifyCertificatesPage() {
  window.scrollTo(0, 0);
  const [certId, setCertId] = useState<string>("");
  const [result, setResult] = useState<Volunteer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const API_URL =
    "https://script.google.com/macros/s/AKfycbxklejyDchDjPqnE2fTMMGOR6ViafHB2DOKguj51x-maBbaqAF81d0U3vutSJvf2U7Xtg/exec";
  const SECRET_KEY = "MY_SECRET_KEY_123";

  const handleSearch = async () => {
    if (!certId.trim()) {
      setError("⚠️ Please enter a Certificate ID.");
      setResult(null);
      return;
    }

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const url = `${API_URL}?certificateId=${encodeURIComponent(
        certId
      )}&token=${SECRET_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        setError("❌ Certificate not found or unauthorized request.");
        setResult(null);
      } else {
        setResult({
          fullName: data.fullName,
          email: data.email,
          volunteerTeam: data.volunteerTeam,
          dateOfJoining: data.dateOfJoining,
        });
      }
    } catch (err) {
      console.error("Request failed:", err);
      setError("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  // 📌 Download Certificate as PNG Image
  const handleDownload = async () => {
    const certificateElement = document.getElementById("certificate");
    if (!certificateElement) return;

    const canvas = await html2canvas(certificateElement, {
      scale: 3,
      useCORS: true, // Fix for external images
      logging: false, // Reduces console noise
      backgroundColor: "#fff",
    });
    const imgData = canvas.toDataURL("image/png");

    // Create <a> link and trigger download
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `${result?.fullName}_Certificate.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* ===== Header ===== */}
      <header className="bg-primary-700 text-white py-3 shadow-lg mt-14">
        <h3 className="text-center text-3xl text-white md:text-4xl font-extrabold tracking-wide">
          Your Certificate Verification
        </h3>
        <p className="text-center text-gray-200 my-2 text-base md:text-lg">
          Instantly verify the authenticity of your certificate
        </p>
      </header>

      {/* ===== Main Content ===== */}
      <main className="flex-grow flex flex-col items-center p-4 md:p-8">
        {/* Search Section */}
        <section className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-8 border border-gray-200 transition-transform hover:scale-[1.01]">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700 text-center">
            Enter Your Certificate ID
          </h2>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="text"
              placeholder="e.g., NCF/AL0XX/202X"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-700 text-gray-700"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-primary-700 text-white rounded-xl hover:bg-primary-800 active:scale-95 transition flex items-center justify-center space-x-2 shadow-md"
            >
              <Search size={18} /> <span>Search</span>
            </button>
          </div>
        </section>

        {/* Loader */}
        {loading && (
          <p className="text-gray-600 font-medium animate-pulse">
            🔍 Searching for certificate...
          </p>
        )}

        {/* Error Message */}
        {!loading && error && (
          <p className="text-red-600 font-semibold bg-red-100 px-5 py-3 rounded-lg mt-4 border border-red-300 shadow-sm">
            {error}
          </p>
        )}

        {/* Result Certificate Style */}
        {result && (
          <section
            id="certificate"
            className="w-full max-w-2xl bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl p-6 md:p-10 mt-8 border-4 border-double border-primary-700 animate-fadeIn relative overflow-hidden"
          >
            {/* Decorative Border Overlay */}
            <div className="absolute inset-2 border-2 border-dashed border-gray-300 rounded-xl pointer-events-none"></div>

            {/* Seal Icon */}
            <div className="absolute -top-6 -right-6 bg-primary-700 text-white p-4 rounded-full shadow-lg">
              <Award size={36} />
            </div>

            {/* Organization Logo */}
            <div className="relative flex justify-center flex-col mb-3">
              <img
                src="/blog-posts/ncf-icon.png" // 👉 replace with your logo
                alt="Organization Logo"
                className="h-16 object-contain mx-auto"
              />
              <p className="text-center text-primary-700 mb-3 text-sm md:text-base">
                "SHAPING THE FUTURE BY PRESENT ACTION"
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-primary-700">
              Certificate of Verification
            </h2>
            <p className="text-center text-gray-600 mb-10 italic text-sm md:text-base">
              This certifies that the following details have been successfully
              verified.
            </p>

            <div className="space-y-5 text-gray-800 text-sm md:text-lg px-2 md:px-4">
              <p className="flex justify-between border-b pb-2">
                <strong>Certificate ID:</strong> {certId}
              </p>
              <p className="flex justify-between border-b pb-2">
                <strong>Name:</strong> {result.fullName}
              </p>
              <p className="flex justify-between border-b pb-2">
                <strong>Email:</strong> {result.email}
              </p>
              <p className="flex justify-between border-b pb-2">
                <strong> Position:</strong> {result.volunteerTeam}
              </p>
              <p className="flex justify-between">
                <strong>Date of Joining:</strong>{" "}
                {new Date(result.dateOfJoining).toISOString().split("T")[0]}
              </p>
            </div>

            {/* Footer Signature */}
            <div className="mt-12 flex flex-col gap-6">
              {/* Stamp + Signature (side by side, centered) */}
              <div className="flex flex-row justify-center items-center gap-5">
                {/* Stamp */}
                <div className="flex flex-col items-center">
                  <img
                    src="/blog-posts/ncf-stamp.png"
                    alt="Stamp"
                    className="h-24 w-24 object-contain"
                  />
                </div>

                {/* Signature */}
                <div className="flex flex-col items-center">
                  <img
                    src="/blog-posts/ncf-authorty-sign.png"
                    alt="Signature"
                    className="h-16 object-contain"
                  />
                </div>
              </div>

              {/* Authority Info + Licence Info in 2-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Authority Info */}
                <div className="text-center md:text-left">
                  <p className="font-semibold text-black">
                    Authorized Signatory
                  </p>
                  <p className="text-gray-500 text-sm">
                    <strong>
                      Jestin Anthony (Chairperson), <br />
                      Noble Citizen Foundation
                    </strong>
                  </p>
                </div>

                {/* Licence Info */}
                <div className="h-16 text-center md:text-right text-sm text-gray-500 border-b-2 border-gray-500">
                  Licence No. - 120163 <br />
                  CIN - U85300DL2020NPL368668
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 📌 Download + Copy Link Buttons */}
        {result && (
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 active:scale-95 transition flex items-center justify-center space-x-2 shadow-md"
            >
              <Download size={18} /> <span>Download as Image</span>
            </button>

            {/* Copy Certificate Link */}
            <button
              onClick={() => {
                const certLink = `${window.location.origin}/verify?certificateId=${certId}`;
                navigator.clipboard.writeText(certLink);
                alert("✅ Certificate link copied to clipboard!");
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 active:scale-95 transition flex items-center justify-center space-x-2 shadow-md"
            >
              <span>🔗 Copy Certificate Link</span>
            </button>
          </div>
        )}
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
