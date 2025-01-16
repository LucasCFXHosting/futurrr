'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader">
      <div className="loader-content">
        <svg className="logo-animate" viewBox="0 0 100 100">
          {/* Logo animé sera ici */}
        </svg>
      </div>
    </div>
  )
} 