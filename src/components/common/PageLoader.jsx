'use client'
import { useEffect, useState } from 'react';

const PageLoader = () => {
    const [preLoader, setPreLoader] = useState(true);
    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        const timer = setTimeout(() => {
            document.documentElement.style.overflow = '';
            setPreLoader(false);
        }, 2000);
    }, []);
  return (
      <>
          {preLoader && (
              <div className="h-screen w-full bg-gradient-to-bl to-lemon via-dark-green from-green fixed inset-0 z-[70] flex justify-center items-center">
                  <img
                      src="/assets/images/webp/preloader-logo.webp"
                      alt="preloader"
                      className="duration-700 animate-bounce size-24 relative z-50"
                  />
              </div>
          )}
      </>
  )
}

export default PageLoader
