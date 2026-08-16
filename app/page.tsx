import Image from "next/image";
import { CleanProMark, OneboFxMark, OneboHouseMark } from "@/components/BrandMark";
import { ArrowDownIcon, ArrowUpRightIcon, BoxIcon, DiamondIcon, GrowthIcon, InstagramIcon, PhoneIcon, PinIcon, ShieldIcon, TelegramIcon } from "@/components/Icons";
import { Reveal, SiteChrome } from "@/components/SiteChrome";
import { BabyVisual, CleanProVisual, HouseVisual, TradingVisual } from "@/components/Visuals";
import { site } from "@/lib/site";

const values = [
  { icon: DiamondIcon, title: "Quality", text: "Har bir yo‘nalishda standart birinchi o‘rinda." },
  { icon: GrowthIcon, title: "Result", text: "Ko‘rinish emas — o‘lchanadigan natija muhim." },
  { icon: ShieldIcon, title: "Trust", text: "Ishonch bir marta emas, har kuni quriladi." },
  { icon: BoxIcon, title: "Growth", text: "Har bir loyiha uzoq muddatli o‘sish uchun quriladi." },
];

export default function Home() {
  return (
    <SiteChrome>
      <main>
        <section className="hero section" id="home">
          <div className="hero-bg" aria-hidden="true" />
          <div className="container hero-grid">
            <Reveal className="hero-copy">
              <div className="micro-label">BUILD <span>•</span> CREATE <span>•</span> GROW</div>
              <h1><span>ONEBO</span><small>BUSINESS HOUSE</small></h1>
              <p className="hero-slogan">{site.slogan}</p>
              <p className="hero-description">Uchta yo‘nalish. Bitta biznes falsafasi. Biz shunchaki loyihalarni yuritmaymiz — ularni qadriyat, sifat va natijalar bilan rivojlantiramiz.</p>
              <div className="hero-actions">
                <a className="button button--solid" href="#brands">Yo‘nalishlarni ko‘rish <ArrowDownIcon /></a>
                <a className="button button--ghost" href="#about">Onebo haqida <ArrowUpRightIcon /></a>
              </div>
            </Reveal>
            <Reveal className="hero-art"><HouseVisual /></Reveal>
          </div>
          <div className="hero-ticker" aria-label="Onebo Business House yo‘nalishlari">
            <span>01 / 03</span><b>ONEBOFX</b><i /> <b>BABYDIARY</b><i /> <b>CLEANPRO HORECA</b><span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <div id="brands" className="anchor-offset" />

        <section className="brand-section brand-section--onebo section" id="onebofx">
          <div className="section-no">01 <span>/ 03</span></div>
          <div className="container brand-layout">
            <Reveal className="brand-copy">
              <OneboFxMark />
              <p className="eyebrow">{site.brands.onebofx.eyebrow}</p>
              <h2>{site.brands.onebofx.headline}</h2>
              <p className="brand-description">{site.brands.onebofx.copy}</p>
              <div className="brand-tags">{site.brands.onebofx.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="brand-button" href={site.brands.onebofx.telegram} target="_blank" rel="noreferrer"><TelegramIcon /> Telegram kanalga o‘tish <ArrowUpRightIcon /></a>
            </Reveal>
            <Reveal className="brand-art"><TradingVisual /></Reveal>
          </div>
          <div className="brand-sidecopy" aria-hidden="true"><strong>ANALYZE.</strong><strong>PLAN.</strong><strong>EXECUTE.</strong></div>
        </section>

        <section className="brand-section brand-section--baby section" id="babydiary">
          <div className="section-no section-no--dark">02 <span>/ 03</span></div>
          <div className="container brand-layout brand-layout--reverse">
            <Reveal className="brand-copy brand-copy--baby">
              <div className="baby-logo-wrap">
                <Image src="/babydiary-logo.png" alt="BabyDiary" width={640} height={615} priority={false} />
              </div>
              <p className="eyebrow">{site.brands.babydiary.eyebrow}</p>
              <h2>{site.brands.babydiary.headline}</h2>
              <p className="brand-description">{site.brands.babydiary.copy}</p>
              <div className="brand-tags">{site.brands.babydiary.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="brand-button brand-button--baby" href={site.brands.babydiary.telegram} target="_blank" rel="noreferrer"><TelegramIcon /> Telegram kanalga o‘tish <ArrowUpRightIcon /></a>
            </Reveal>
            <Reveal className="brand-art"><BabyVisual /></Reveal>
          </div>
          <div className="brand-sidecopy brand-sidecopy--dark" aria-hidden="true"><strong>SOFT.</strong><strong>COMFY.</strong><strong>PREMIUM.</strong></div>
        </section>

        <section className="brand-section brand-section--clean section" id="cleanpro">
          <div className="section-no">03 <span>/ 03</span></div>
          <div className="container brand-layout">
            <Reveal className="brand-copy">
              <CleanProMark />
              <p className="eyebrow">{site.brands.cleanpro.eyebrow}</p>
              <h2>{site.brands.cleanpro.headline}</h2>
              <p className="brand-description">{site.brands.cleanpro.copy}</p>
              <div className="brand-tags">{site.brands.cleanpro.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="brand-button brand-button--clean" href={site.brands.cleanpro.telegram} target="_blank" rel="noreferrer"><TelegramIcon /> Katalog va kanal <ArrowUpRightIcon /></a>
            </Reveal>
            <Reveal className="brand-art"><CleanProVisual /></Reveal>
          </div>
          <div className="brand-sidecopy" aria-hidden="true"><strong>CLEAN SPACES.</strong><strong>STRONG BUSINESS.</strong></div>
        </section>

        <section className="about-section" id="about">
          <div className="container">
            <Reveal className="about-heading">
              <p className="eyebrow">WHY ONEBO?</p>
              <h2>Bir-biridan farqli bizneslar.<br />Bitta talab: <em>sifat.</em></h2>
              <p>Onebo Business House’da har bir loyiha o‘z xarakteriga ega. Ularni birlashtiradigan narsa — intizom, vizual madaniyat, mijozga hurmat va o‘sishga bo‘lgan talab.</p>
            </Reveal>
            <div className="values-grid">
              {values.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} className="value-card">
                  <div className="value-index">0{index + 1}</div>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="container contact-grid">
            <Reveal className="contact-title">
              <p className="eyebrow">ONEBO BUSINESS HOUSE</p>
              <h2>One day<br />or <em>day one.</em></h2>
              <p>Hamkorlik, loyiha yoki yo‘nalishlarimiz bo‘yicha bog‘lanish uchun eng qulay usulni tanlang.</p>
            </Reveal>
            <Reveal className="contact-panel">
              <a href={site.phoneHref} className="contact-row"><PhoneIcon /><div><span>Telefon</span><strong>{site.phoneDisplay}</strong></div><ArrowUpRightIcon /></a>
              <a href="https://t.me/onebofx" target="_blank" rel="noreferrer" className="contact-row"><TelegramIcon /><div><span>Telegram</span><strong>@onebofx</strong></div><ArrowUpRightIcon /></a>
              <a href={site.instagram.href} target="_blank" rel="noreferrer" className="contact-row"><InstagramIcon /><div><span>Instagram</span><strong>{site.instagram.label}</strong></div><ArrowUpRightIcon /></a>
              <div className="contact-row contact-row--static"><PinIcon /><div><span>Manzil</span><strong>{site.location}</strong></div></div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <OneboHouseMark />
          <p>{site.slogan}</p>
          <div className="footer-links">
            <a href={site.brands.onebofx.telegram} target="_blank" rel="noreferrer">onebofx</a>
            <a href={site.brands.babydiary.telegram} target="_blank" rel="noreferrer">BabyDiary</a>
            <a href={site.brands.cleanpro.telegram} target="_blank" rel="noreferrer">CleanPro HoReCa</a>
          </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Onebo Business House</span><span>Build · Create · Grow</span></div>
      </footer>
    </SiteChrome>
  );
}
