import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";
import {
  FadeUp,
  StaggerChildren,
  TextReveal,
  ImageRevealMask,
  MagneticButton,
  CardTiltLayer,
  FilmGrain,
  Vignette,
  NumberCounter,
} from "@/components/motion";
import ServiceCardV4 from "@/components/ServiceCard";

const manifest = assetManifest as unknown as {
  images: Record<string, string>;
  videos: Record<string, string>;
};
const images = manifest.images;
const videos = manifest.videos;

const imageOr = (slot: string, fallback = "") => images[slot] ?? fallback;

export default function HomePage() {
  return (
    <div className="relative">
      <FilmGrain opacity={0.06} />
      <Vignette color="#1a1108" />
      <VideoHero />
      <ValuePropSection />
      <ServicesSection />
      <WhyUsSection />
      <ShowcaseGallery />
      <StatsSection />
      <ContactSection />
      <FinalCta />
    </div>
  );
}

/* ============================================================
 * 1 · HERO — HO3 bottom-anchored, T1 8s Veo loop, warm-dusk palette
 * ============================================================ */
function VideoHero() {
  const heroVideo = videos["scene-1"];
  const heroPoster = imageOr("scene-1-start", imageOr("section-about-hero"));
  return (
    <section className="relative min-h-screen flex items-end justify-start px-6 md:px-12 pb-16 md:pb-24 overflow-hidden bg-bg">
      {heroVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src={heroVideo}
          poster={heroPoster || undefined}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : heroPoster ? (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src={heroPoster}
          alt=""
          loading="eager"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a2820] via-[#221812] to-[#1a1108]" />
      )}

      {/* HO3 scrim: hard from bottom so subject lives in upper 2/3 */}
      <div className="absolute inset-0 pointer-events-none hero-scrim" />

      <div className="relative max-w-5xl">
        <FadeUp>
          <div className="font-mono text-[11px] tracking-[0.4em] uppercase mb-6 text-primary">
            {siteConfig.company.tagline}
          </div>
        </FadeUp>
        <h1 className="font-display font-light leading-[0.95] text-text text-5xl md:text-7xl lg:text-8xl">
          {siteConfig.hero.h1.map((line, i) => (
            <span
              key={i}
              className={`block ${line.accent ? "italic text-primary" : ""}`}
            >
              {line.text}
            </span>
          ))}
        </h1>
        <p className="mt-8 text-base md:text-lg text-text/80 max-w-xl leading-relaxed">
          {siteConfig.company.description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <MagneticButton
            as="a"
            href="#contact"
            className="min-h-[48px] px-7 py-3.5 rounded-full bg-primary text-bg font-display font-medium text-sm hover:brightness-110 transition-all"
          >
            {siteConfig.cta.primary}
          </MagneticButton>
          <a
            href="#services"
            className="min-h-[48px] px-7 py-3.5 rounded-full border border-text/25 bg-text/5 text-text font-display font-medium text-sm backdrop-blur-md hover:bg-text/10 inline-flex items-center justify-center transition-all"
          >
            {siteConfig.cta.secondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 font-mono text-[10px] tracking-[0.4em] text-text/40 uppercase animate-pulse">
        Scroll ↓
      </div>
    </section>
  );
}

/* ============================================================
 * 2 · VALUE PROP / ABOUT — VV3 image + copy split
 * ============================================================ */
function ValuePropSection() {
  const feature = siteConfig.features[0];
  const rest = siteConfig.features.slice(1);
  return (
    <section
      id="about"
      className="relative section-pad px-6 md:px-12 bg-bg-secondary border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <FadeUp>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase mb-4 text-primary">
              About Travel24hr
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl text-text font-light leading-[1.05] mb-6">
              {feature.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-text/70 leading-relaxed mb-8">
              {feature.description}
            </p>
          </FadeUp>
          <StaggerChildren staggerDelay={0.08} initialDelay={0.3} className="space-y-4">
            {rest.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <div className="font-display font-semibold text-text text-base">
                    {f.title}
                  </div>
                  <div className="text-text/60 text-sm mt-1 leading-relaxed">
                    {f.description}
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
        <div className="relative">
          <ImageRevealMask
            src={imageOr("section-about-hero")}
            alt="Premium travel concierge lounge at warm dusk"
            aspectClass="aspect-[4/3]"
            className="rounded-2xl border border-border bg-gradient-to-br from-accent-2/30 via-text/5 to-accent/30"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * 3 · SERVICES — SV1 grid, CV4 liquid-glass cards w/ CardTiltLayer
 * ============================================================ */
function ServicesSection() {
  return (
    <section
      id="services"
      className="relative section-pad px-6 md:px-12 bg-bg border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <FadeUp>
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-3">
              Services
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl text-text font-light leading-[1.05]">
              {siteConfig.servicesHeading}
            </h2>
          </FadeUp>
        </div>
        <StaggerChildren
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {siteConfig.services.map((svc) => (
            <CardTiltLayer key={svc.slug}>
              <ServiceCardV4
                service={svc}
                imageSrc={
                  imageOr(`service-${svc.slug}`, imageOr("section-about-hero"))
                }
              />
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ============================================================
 * 4 · WHY US — oversized manifesto word + 3-up reasons
 * ============================================================ */
function WhyUsSection() {
  const themeWord = siteConfig.sectionThemeWord;
  return (
    <section
      id="why"
      className="relative overflow-hidden section-pad px-6 md:px-12 bg-bg-accent border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.4em] uppercase mb-6 text-accent">
            {siteConfig.whyUs.heading}
          </div>
        </FadeUp>
        <div style={{ fontSize: "clamp(80px, 22vw, 320px)" }} className="block">
          <TextReveal
            as="h2"
            className="font-display italic font-light leading-[0.88] tracking-tight break-words text-primary"
            stagger={0.08}
          >
            {themeWord}
          </TextReveal>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {siteConfig.whyUs.items.map((item, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <div className="border-t border-text/15 pt-6">
                <h3 className="font-display text-2xl text-text font-light leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-text/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * 5 · SHOWCASE GALLERY — destination portrait grid w/ Ken Burns
 * ============================================================ */
function ShowcaseGallery() {
  return (
    <section
      id="gallery"
      className="relative section-pad px-6 md:px-12 bg-bg border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <FadeUp>
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-3">
              Destinations we book daily
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl text-text font-light leading-[1.05]">
              From boarding gate to hotel key.
            </h2>
          </FadeUp>
        </div>
        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {siteConfig.gallery.map((tile, i) => {
            const src = imageOr(tile.imageSlot);
            return (
              <div
                key={i}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border"
              >
                {src ? (
                  <img
                    src={src}
                    alt={tile.caption}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-2/40 via-bg-tertiary to-bg-accent" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-accent via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
                    0{i + 1}
                  </div>
                  <div className="font-display text-lg text-text">
                    {tile.caption}
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ============================================================
 * 6 · STATS — trust bar with count-up numbers
 * ============================================================ */
function StatsSection() {
  return (
    <section className="relative section-pad px-6 md:px-12 bg-bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-10 text-center">
            What always-on looks like
          </div>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.stats.map((s, i) => (
            <FadeUp key={i} delay={0.1 * i}>
              <div className="text-center border-t border-text/15 pt-6">
                <div className="font-display text-5xl md:text-7xl font-light text-primary leading-none">
                  <NumberCounter to={s.value} duration={1.6} />
                  <span>{s.unit}</span>
                </div>
                <div className="mt-3 text-xs md:text-sm text-text/70 tracking-wider uppercase">
                  {s.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * 7 · CONTACT — details + parallax image w/ pull quote
 * ============================================================ */
function ContactSection() {
  return (
    <section
      id="contact"
      className="relative section-pad px-6 md:px-12 bg-bg border-t border-border"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <FadeUp>
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-4">
              Contact
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl text-text font-light leading-[1.05] mb-6">
              Reach the concierge.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-text/70 leading-relaxed mb-8 max-w-md">
              Twenty-four hours a day, seven days a week — every day of the year. If you can name the timezone, we're already on the line.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <ul className="space-y-6 text-text">
              <li>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-text/50 mb-1">
                  Concierge line
                </div>
                <a
                  href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
                  className="font-display text-2xl hover:text-primary transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
              </li>
              <li>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-text/50 mb-1">
                  Email
                </div>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="font-display text-2xl hover:text-primary transition-colors break-all"
                >
                  {siteConfig.company.email}
                </a>
              </li>
              <li>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-text/50 mb-1">
                  Coverage
                </div>
                <div className="font-display text-2xl">
                  {siteConfig.company.location}
                </div>
              </li>
            </ul>
          </FadeUp>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/5] md:aspect-auto md:min-h-[520px]">
          {imageOr("section-cta") ? (
            <img
              src={imageOr("section-cta")}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent-2/50 via-bg-tertiary to-bg-accent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-accent via-bg-accent/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="font-display text-text italic text-2xl md:text-3xl leading-tight">
              &ldquo;{siteConfig.manifesto}&rdquo;
            </div>
            <div className="mt-4 font-mono text-[10px] tracking-[0.3em] uppercase text-primary">
              — The Travel24hr concierge desk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * 8 · FINAL CTA
 * ============================================================ */
function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32 px-6 md:px-12 border-t border-border bg-bg">
      {imageOr("section-cta") && (
        <img
          src={imageOr("section-cta")}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/70 to-bg pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <FadeUp>
          <h2 className="font-display text-5xl md:text-7xl text-text font-light leading-[1.0] mb-6">
            {siteConfig.ctaBlock.heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-lg text-text/70 mb-10 max-w-xl mx-auto leading-relaxed">
            {siteConfig.ctaBlock.description}
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <MagneticButton
              as="a"
              href="#contact"
              className="min-h-[48px] px-8 py-4 rounded-full bg-primary text-bg font-display font-medium hover:brightness-110"
            >
              {siteConfig.cta.primary}
            </MagneticButton>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="min-h-[48px] px-8 py-4 rounded-full border border-text/25 text-text font-display font-medium hover:bg-text/5 inline-flex items-center justify-center"
            >
              Email us directly
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.45}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-[11px] text-text/50 font-mono uppercase tracking-wider">
            {siteConfig.trustBar.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
