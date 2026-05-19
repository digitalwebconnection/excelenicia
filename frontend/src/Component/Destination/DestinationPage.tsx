import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import CourseSection from "./CourseSection";
import WhyStudy from "./WhyStudy";
import EducationSection from "./EducationSystem";
import Documents from "./Documents";
import IntakeSection from "./ListSection";
import destinationsData from "./destinationsData";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const DestinationPage = () => {
  const { country } = useParams();
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!country) return;

    const normalizedCountry = country.toLowerCase();
    const cacheKey = `country_detail_cache_${normalizedCountry}`;

    // 1. Try to load from localStorage cache first
    let initialData = null;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        initialData = JSON.parse(cached);
      } catch (e) {
        // ignore
      }
    }

    // 2. If no cache, check if we have local static data in destinationsData
    if (!initialData && destinationsData[normalizedCountry as keyof typeof destinationsData]) {
      initialData = destinationsData[normalizedCountry as keyof typeof destinationsData];
    }

    if (initialData) {
      setPageData(initialData);
      setLoading(false);
      setError("");
    } else {
      setPageData(null); // Clear previous page data to avoid showing old country
      setLoading(true);
      setError("");
    }

    // 3. Always fetch from server to get the latest data (stale-while-revalidate)
    fetch(`${API}/countries/${normalizedCountry}`)
      .then(r => {
        if (!r.ok) throw new Error("Country not found");
        return r.json();
      })
      .then(data => {
        setPageData(data);
        localStorage.setItem(cacheKey, JSON.stringify(data));
        setError("");
      })
      .catch(e => {
        // Only show error if we don't have any cached or fallback data
        if (!initialData) {
          setError(e.message || "Failed to load destination data");
        }
        console.warn("Failed to fetch fresh country data:", e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [country]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4 text-blue-950">
        <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
          <circle cx="12" cy="12" r="10" strokeOpacity=".2"/>
          <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
        </svg>
        <p className="text-lg font-medium">Loading destination…</p>
      </div>
    </div>
  );

  if (error || !pageData) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <p className="text-3xl font-bold text-blue-950 mb-3">Destination Not Found</p>
        <p className="text-gray-500">{error || "This country hasn't been added yet."}</p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{pageData.meta?.title || pageData.name || "Destination"}</title>
        {pageData.meta?.description && <meta name="description" content={pageData.meta.description} />}
        {pageData.meta?.keywords && <meta name="keywords" content={pageData.meta.keywords} />}
        {pageData.meta?.canonical && <link rel="canonical" href={pageData.meta.canonical} />}
        {pageData.meta?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ 
              __html: pageData.meta.schema.replace(/<script.*?>|<\/script>/gi, '').trim() 
            }}
          />
        )}
      </Helmet>
      <Hero data={pageData.hero} />
      <WhyStudy data={pageData.whyStudy} />
      <EducationSection data={pageData.educationSystem} />
      <Documents data={pageData.documents} />
      <IntakeSection data={pageData.intakes} />
      <CourseSection data={pageData.courses} />
    </>
  );
};

export default DestinationPage;