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
      <div className="trading-glow trading-glow--one" />
      <div className="trading-glow trading-glow--two" />
      <svg className="candles" viewBox="0 0 130 120" preserveAspectRatio="none">
        {candles.map(([open, close, low, high], index) => {
          const x = 8 + index * 10;
          const up = close >= open;
          const height = Math.max(4, Math.abs(close - open));
          return (
            <g key={index} className={up ? "candle-up" : "candle-down"}>
              <line x1={x} y1={120 - high} x2={x} y2={120 - low} />
              <rect x={x - 2.4} y={120 - Math.max(open, close)} width="4.8" height={height} rx="0.5" />
            </g>
          );
        })}
        <path className="chart-path" d="M2 101 C16 99, 18 93, 30 94 S48 81, 58 84 S76 60, 87 62 S104 44, 128 22" />
      </svg>

      <div className="market-card market-card--top"><span>XAUUSD</span><strong>SESSION FLOW</strong></div>
      <div className="market-card market-card--bottom"><span>CONTEXT</span><strong>LIQUIDITY</strong></div>

      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-top"><b>onebofx</b><span>market desk</span></div>
          <div className="phone-ticker">XAUUSD <strong>3,361.28</strong></div>
          <div className="phone-mini-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
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
    <div className="baby-visual baby-visual--scene" aria-hidden="true">
      <div className="baby-aura baby-aura--one" />
      <div className="baby-aura baby-aura--two" />
      <div className="baby-thread baby-thread--one" />
      <div className="baby-thread baby-thread--two" />

      <div className="baby-scene-card">
        <Image
          src="/babydiary-scene.jpg"
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 58vw"
          className="baby-scene-image"
          priority={false}
        />
        <div className="baby-scene-shade" />
        <div className="baby-scene-shine" />
      </div>

      <div className="baby-detail-card baby-detail-card--top">
        <span>01</span><strong>SOFT MATERIALS</strong>
      </div>
      <div className="baby-detail-card baby-detail-card--bottom">
        <span>02</span><strong>0–7 YEARS</strong>
      </div>
      <div className="baby-float baby-float--one">soft</div>
      <div className="baby-float baby-float--two">comfort</div>
    </div>
  );
}

export function CleanProVisual() {
  return (
    <div className="cleanpro-visual cleanpro-visual--scene" aria-hidden="true">
      <div className="clean-orbit clean-orbit--one" />
      <div className="clean-orbit clean-orbit--two" />
      <div className="clean-molecule clean-molecule--one"><i/><i/><i/></div>
      <div className="clean-molecule clean-molecule--two"><i/><i/></div>

      <div className="clean-scene-card">
        <Image
          src="/cleanpro-scene.png"
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 58vw"
          className="clean-scene-image"
          priority={false}
        />
        <div className="clean-scene-shade" />
        <div className="clean-scene-scan" />
      </div>

      <div className="clean-spec clean-spec--one"><span>01</span>HORECA STANDARD</div>
      <div className="clean-spec clean-spec--two"><span>02</span>PRO CLEANING</div>
      <div className="clean-lines clean-lines--real">
        <span>PROFESSIONAL CLEANING</span>
        <span>RESTAURANT · HOTEL</span>
        <span>DAILY OPERATIONS</span>
      </div>
    </div>
  );
}
