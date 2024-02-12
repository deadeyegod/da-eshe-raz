import React, { useEffect } from 'react';
import letterContent from '../components/Marysletter';

const marysImageUrl = 'https://user-images.githubusercontent.com/27395260/108008084-7feab880-6fcd-11eb-9275-47078279037f.png';

const LetterContent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://silenthhill.disqus.com/embed.js';
    script.setAttribute('data-timestamp', String(new Date()));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 p-8">
          <h1 className="pt-10 text-4xl font-bold mb-4 text-white">Mary's Letter</h1>
          <pre id="marys-letter" className="text-red-600 text-2xl overflow-y-auto max-h-screen custom-scrollbar">{letterContent}</pre>
        </div>
        <div className=" p-6 flex justify-center "> 
        <img src={marysImageUrl} alt="Mary's Image" className="max-w-full max-h-full object-center object-cover lg:w-auto lg:h-auto" /> 
        </div>
        <div className="lg:w-1/2 p-8">
          <div id="disqus_thread" className="w-full"></div>
          <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>
      </div>
    </div>
  );
};

export default LetterContent;