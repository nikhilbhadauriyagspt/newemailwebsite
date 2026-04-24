import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { guidesData } from "../data/guidesData";
import { ChevronLeft, CheckCircle2, ArrowRight } from "lucide-react";

const GuideDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const guide = guidesData[id as keyof typeof guidesData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Guide Not Found</h1>
          <Link to="/guides" className="text-primary font-bold">Back to All Guides</Link>
        </div>
      </div>
    );
  }

  const Icon = guide.icon;

  return (
    <div className="min-h-screen bg-[#FAFBFF]">
      <Header />
      
      <main className="py-12 md:py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Breadcrumb */}
          <Link to="/guides" className="flex items-center gap-2 text-[#4F46E5] font-bold text-[14px] mb-8 hover:gap-3 transition-all">
            <ChevronLeft className="w-4 h-4" />
            Back to All Guides
          </Link>

          {/* Guide Header */}
          <div className="bg-white rounded-[32px] border border-[#EEF0FA] p-8 md:p-12 mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className={`w-20 h-20 rounded-[24px] ${guide.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-10 h-10 ${guide.color}`} />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-[32px] md:text-[44px] font-extrabold text-[#0F1B3D] leading-tight mb-4">
                  {guide.title}
                </h1>
                <p className="text-[16px] md:text-[18px] text-[#5B6478] font-medium leading-relaxed">
                  {guide.description}
                </p>
              </div>
            </div>
          </div>

          {/* Guide Content Sections */}
          <div className="space-y-8">
            {guide.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-[24px] border border-[#EEF0FA] p-8 md:p-10 shadow-sm">
                <h2 className="text-[22px] font-extrabold text-[#0F1B3D] mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#F0EEFF] text-[#4F46E5] flex items-center justify-center text-[14px]">
                    {index + 1}
                  </span>
                  {section.heading}
                </h2>
                
                {section.content && (
                  <p className="text-[#5B6478] font-medium leading-7 mb-6">
                    {section.content}
                  </p>
                )}

                {section.steps && (
                  <div className="grid gap-4">
                    {section.steps.map((step, sIndex) => (
                      <div key={sIndex} className="flex items-start gap-4 bg-[#FAFBFF] p-5 rounded-xl border border-[#EEF0FA]">
                        <div className="mt-1 shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                        <p className="text-[14px] text-[#0F1B3D] font-medium leading-6">{step}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Help CTA */}
          <div className="mt-12 bg-[#4F46E5] rounded-[24px] p-8 md:p-10 text-center text-white">
            <h3 className="text-[24px] font-extrabold mb-4 text-white">Still can't solve your issue?</h3>
            <p className="text-white/80 mb-8 font-medium">Our support team is available 24/7 to help you with complex technical problems.</p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-extrabold hover:shadow-xl transition-all">
              Contact Support <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuideDetail;
