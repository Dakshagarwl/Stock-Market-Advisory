import React, { useEffect } from 'react';

const StockIndex = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "description": "", "proName": "BSE:SENSEX" },
        { "description": "", "proName": "FX_IDC:USDINR" },
        { "description": "", "proName": "NASDAQ:NDX" }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "compact",
      "colorTheme": "dark",
      "locale": "en"
    });

    document.getElementById('tradingview-widget-container').appendChild(script);

    return () => {
      // Cleanup to avoid memory leaks when component is unmounted
      document.getElementById('tradingview-widget-container').removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default StockIndex;
