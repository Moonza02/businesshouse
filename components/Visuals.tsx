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
    <div className="baby-visual" aria-hidden="true">
      <div className="fabric fabric--one" />
      <div className="fabric fabric--two" />
      <div className="wardrobe">
        <div className="wardrobe-rail" />
        <Garment x={10} shade="light" />
        <Garment x={29} shade="mid" />
        <Garment x={48} shade="light" />
        <Garment x={67} shade="dark" />
      </div>
      <div className="baby-platform">
        <div className="bear"><span className="ear e1"/><span className="ear e2"/><span className="head"><i/><b/></span><span className="body"/></div>
        <div className="folds"><i/><i/><i/></div>
      </div>
      <div className="baby-float baby-float--one">soft</div>
      <div className="baby-float baby-float--two">memory</div>
      <div className="baby-float baby-float--three">comfort</div>
    </div>
  );
}

function Garment({ x, shade }: { x: number; shade: "light" | "mid" | "dark" }) {
  return (
    <div className={`garment garment--${shade}`} style={{ left: `${x}%` }}>
      <span className="hanger" />
      <span className="garment-body"><i/><i/></span>
    </div>
  );
}

export function CleanProVisual() {
  return (
    <div className="cleanpro-visual" aria-hidden="true">
      <div className="molecules">
        <i style={{ left: "8%", top: "28%" }} /><i style={{ left: "24%", top: "17%" }} /><i style={{ left: "34%", top: "35%" }} />
        <i style={{ left: "17%", top: "52%" }} /><i style={{ left: "42%", top: "58%" }} /><b className="bond b1"/><b className="bond b2"/><b className="bond b3"/><b className="bond b4"/>
      </div>
      <div className="water-ring water-ring--one" /><div className="water-ring water-ring--two" />
      <div className="products">
        <Bottle kind="spray" size="small" label="KITCHEN" />
        <Bottle kind="jug" size="large" label="ALL PURPOSE" />
        <Bottle kind="spray" size="mid" label="SURFACE" />
        <Bottle kind="bottle" size="small" label="SANITIZER" />
      </div>
      <div className="clean-lines"><span>SAFE SURFACES</span><span>STRONG RESULTS</span><span>HORECA STANDARD</span></div>
    </div>
  );
}

function Bottle({ kind, size, label }: { kind: "spray" | "jug" | "bottle"; size: "small" | "mid" | "large"; label: string }) {
  return (
    <div className={`bottle bottle--${kind} bottle--${size}`}>
      {kind === "spray" && <div className="spray-head"><i/></div>}
      {kind === "jug" && <div className="jug-handle" />}
      {kind === "bottle" && <div className="bottle-cap" />}
      <div className="bottle-label"><strong>CP</strong><span>CleanPro</span><small>{label}</small></div>
    </div>
  );
}
