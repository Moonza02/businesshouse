export function OneboHouseMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`house-mark ${compact ? "house-mark--compact" : ""}`} aria-label="Onebo Business House">
      <div className="house-monogram" aria-hidden="true">
        <span className="house-monogram__o">O</span>
        <span className="house-monogram__b">B</span>
      </div>
      <div className="house-wordmark">
        <strong>ONEBO</strong>
        <span>BUSINESS HOUSE</span>
      </div>
    </div>
  );
}

export function OneboFxMark() {
  return (
    <div className="onebofx-mark" aria-label="onebofx">
      <div className="onebofx-bars" aria-hidden="true">
        <i /><i /><i /><i />
      </div>
      <div>
        <strong>onebo<span>fx</span></strong>
        <small>TRADING &amp; ANALYTICS</small>
      </div>
    </div>
  );
}

export function CleanProMark() {
  return (
    <div className="cleanpro-mark" aria-label="CleanPro HoReCa">
      <div className="cleanpro-cp">CP<span>✦</span></div>
      <div className="cleanpro-name">
        <strong>CleanPro</strong>
        <span>HoReCa</span>
      </div>
    </div>
  );
}
