import React, { useEffect } from 'react';

const MiniMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.innerHTML = JSON.stringify({
      "symbol": "FX_IDC:USDINR",
      "width": "100%",
      "height": 220,
      "locale": "en",
      "dateRange": "12M",
      "colorTheme": "dark",
      "isTransparent": false,
      "autosize": true,
      "largeChartUrl": ""
    });

    const container = document.getElementById('mini-map-widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" id="mini-map-widget">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default MiniMap;
