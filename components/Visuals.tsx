import Image from "next/image";

export function HouseVisual() {
  return (
    <div className="house-visual" aria-hidden="true">
      <div className="hero-orbit hero-orbit--one" />
      <div className="hero-orbit hero-orbit--two" />
      <div className="hero-monolith">
        <div className="hero-monolith__edge" />
        <div className="hero-monolith__face">
          <div className="hero-ob">OB</div>
          <span>ONEBO</span>
        </div>
      </div>
      <div className="hero-floor-lines"><i/><i/><i/><i/><i/></div>
    </div>
  );
}

export function TradingVisual() {
  const candles = [
    [22, 49, 16, 40], [39, 56, 31, 51], [49, 43, 39, 54], [44, 68, 36, 62],
    [62, 74, 54, 69], [68, 61, 57, 78], [61, 82, 58, 87], [80, 91, 70, 88],
    [88, 77, 72, 94], [76, 97, 73, 101], [95, 108, 88, 103], [103, 118, 96, 114],
  ];
  return (
    <div className="trading-visual" aria-hidden="true">
      <div className="chart-grid" />
      <svg className="candles" viewBox="0 0 130 120" preserveAspectRatio="none">
        {candles.map(([open, close, low, high], index) => {
          const x = 8 + index * 10;
          const up = close >= open;
          const top = Math.min(open, close);
          const height = Math.max(4, Math.abs(close - open));
          return <g key={index} className={up ? "candle-up" : "candle-down"}>
            <line x1={x} y1={120 - high} x2={x} y2={120 - low} />
            <rect x={x - 2.4} y={120 - Math.max(open, close)} width="4.8" height={height} rx="0.5" />
          </g>;
        })}
        <path className="chart-path" d="M2 101 C16 99, 18 93, 30 94 S48 81, 58 84 S76 60, 87 62 S104 44, 128 22" />
      </svg>
      <div className="market-card market-card--top"><span>XAUUSD</span><strong>+1.84%</strong></div>
      <div className="market-card market-card--bottom"><span>Liquidity</span><strong>NY AM</strong></div>
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-top"><b>onebofx</b><span>12.4K</span></div>
          <div className="phone-ticker">XAUUSD <strong>3,361.28</strong></div>
          <div className="phone-mini-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
          <div className="phone-panels"><i/><i/><i/><i/></div>
        </div>
      </div>
      <div className="data-stream data-stream--one">PRICE · LIQUIDITY · CONTEXT · RISK · EXECUTION ·</div>
      <div className="data-stream data-stream--two">DISCIPLINE · MARKET STRUCTURE · SESSION ·</div>
    </div>
  );
}

export function BabyVisual() {
  return (
    <div className="baby-visual baby-visual--photo" aria-hidden="true">
      <div className="baby-photo-frame">
        <Image
          src="/babydiary-showcase.jpg"
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 58vw"
          className="baby-showcase-image"
          priority={false}
        />
        <div className="baby-photo-vignette" />
        <div className="baby-photo-line baby-photo-line--one" />
        <div className="baby-photo-line baby-photo-line--two" />
      </div>
      <div className="baby-float baby-float--one">soft</div>
      <div className="baby-float baby-float--two">premium</div>
      <div className="baby-float baby-float--three">comfort</div>
    </div>
  );
}

export function CleanProVisual() {
  return (
    <div className="cleanpro-visual cleanpro-visual--catalog" aria-hidden="true">
      <div className="clean-catalog-frame">
        <Image
          src="/cleanpro-catalog.png"
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 58vw"
          className="clean-catalog-image"
          priority={false}
        />
        <div className="clean-catalog-shade" />
        <div className="clean-catalog-scan" />
      </div>
      <div className="clean-orbit clean-orbit--one" />
      <div className="clean-orbit clean-orbit--two" />
      <div className="clean-lines">
        <span>PROFESSIONAL CLEANING</span>
        <span>HORECA STANDARD</span>
        <span>CATALOG / PRODUCT SYSTEM</span>
      </div>
    </div>
  );
}
