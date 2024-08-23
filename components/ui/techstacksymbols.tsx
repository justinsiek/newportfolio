import React from 'react';

const symbolMap: { [key: string]: string } = {
  postgresql: "https://img.icons8.com/ios/50/postgreesql.png",
  react: "https://img.icons8.com/ios-glyphs/60/react.png",
  tailwind_css: "https://img.icons8.com/color/48/tailwind_css.png",
  opencv: "https://img.icons8.com/color/48/opencv.png",
  metamask: "https://img.icons8.com/ios/50/metamask-logo.png",
  python: "https://img.icons8.com/ios/50/python--v1.png",
  pytorch: "https://img.icons8.com/fluency/48/pytorch.png",
};

const TechStackSymbols = ({ symbols }: { symbols: string[] }) => {
  return (
    <div className='flex'>
      {symbols.map((symbol) => {
        const src = symbolMap[symbol];
        if (!src) return null;

        return (
          <div key={symbol} style={{ filter: symbol === 'tailwind_css' || symbol === 'opencv' || symbol === 'pytorch' ? 'grayscale(1) brightness(0)' : 'none' }}>
            <img width="48" height="48" src={src} alt={symbol} />
          </div>
        );
      })}
    </div>
  );
};

export default TechStackSymbols;