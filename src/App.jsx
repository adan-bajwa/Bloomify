import { motion } from "framer-motion";

const img = (n) => `/flowers/${n}.jpeg`;
const GITHUB = "https://github.com/adan-bajwa/";
const photos = ["b6", "rose", "b4", "sunflower", "b2", "b1", "b3", "b5"];
const colors = [
  ["Blush Pink", "#F7A6BE"], ["Sunshine Yellow", "#FFD43B"], ["Cobalt Blue", "#1F3A9E"],
  ["Orchid Purple", "#8E44B8"], ["Dusty Rose", "#B9706F"], ["Leaf Green", "#5B8C5A"],
];
const steps = [
  ["Pick the yarn", "Every colour is chosen by hand, soft and bright."],
  ["Crochet the petals", "Stitch by stitch, each petal is worked in rounds."],
  ["Shape the bloom", "Layers are curled and sewn into a full rose."],
  ["Add pearl and stem", "A pearl centre and a wrapped green stem finish it."],
];
const reviews = [
  "Sample review: replace this with a real comment from a happy customer.",
  "Sample review: add what someone said about your flowers.",
  "Sample review: a short, kind sentence works best here.",
];

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay }}>
    {children}
  </motion.div>
);

const Petals = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    {Array.from({ length: 14 }).map((_, i) => (
      <span key={i} className="absolute -top-10 animate-fall text-2xl"
        style={{ left: `${(i * 73) % 100}%`, animationDuration: `${14 + (i % 6) * 3}s`, animationDelay: `${i * 1.3}s` }}>
        {["🌸", "🌼", "🌷", "💮"][i % 4]}
      </span>
    ))}
  </div>
);

const Github = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.500 11.500 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" /></svg>
);

function Nav() {
  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 90 }}
      className="fixed inset-x-0 top-0 z-50 mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-xl">
      <a href="#top" className="font-display text-xl font-extrabold">🌸 Bloomify</a>
      <div className="hidden gap-7 text-sm font-semibold md:flex">
        {[["Gallery", "#gallery"], ["Process", "#process"], ["Colours", "#colours"], ["Love", "#love"]].map(([t, h]) => (
          <a key={t} href={h} className="transition hover:text-orchid">{t}</a>
        ))}
      </div>
      <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full bg-cobalt px-5 py-2 text-sm font-bold text-white transition hover:scale-105 hover:bg-orchid">Say hello</a>
    </motion.nav>
  );
}

function Hero() {
  const tiles = [["b6", "left-0 top-6 h-56 w-44 [--r:-6deg]"], ["sunflower", "right-0 top-0 h-60 w-48 [--r:5deg] [animation-delay:-2s]"], ["rose", "left-24 bottom-0 h-64 w-48 [--r:3deg] [animation-delay:-4s]"]];
  return (
    <header id="top" className="relative z-10 overflow-hidden bg-gradient-to-br from-blush/60 via-petal to-sun/40 px-6 pb-24 pt-36">
      <div className="absolute -left-20 top-20 h-72 w-72 animate-float rounded-full bg-orchid/30 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-80 w-80 animate-float rounded-full bg-cobalt/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-block rounded-full bg-white px-4 py-1 text-sm font-bold shadow">
            Handmade with yarn and patience
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-5 font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
            Flowers that <span className="grad-text">never wilt.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 max-w-md text-lg">
            Every rose, sunflower and bouquet on this page was crocheted by hand, one stitch at a time.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-8 flex flex-wrap gap-4">
            <a href="#gallery" className="rounded-full bg-cobalt px-7 py-3 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orchid">See the flowers</a>
            <a href="#process" className="rounded-full bg-white px-7 py-3 font-bold shadow-xl transition hover:-translate-y-1">How they are made</a>
          </motion.div>
        </div>
        <div className="relative mx-auto h-[420px] w-full max-w-md">
          {tiles.map(([n, c], i) => (
            <motion.img key={n} src={img(n)} alt="Handmade crochet flower" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
              className={`absolute animate-float rounded-[2rem] border-4 border-white object-cover shadow-2xl ${c}`} />
          ))}
        </div>
      </div>
    </header>
  );
}

function Marquee() {
  const items = [...colors, ...colors];
  return (
    <div className="relative z-10 overflow-hidden bg-ink py-4 text-white">
      <div className="flex w-max animate-marquee gap-10 font-display text-xl font-bold">
        {[...items, ...items].map(([n, c], i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap"><i className="h-4 w-4 rounded-full" style={{ background: c }} />{n}</span>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <Reveal><h2 className="font-display text-4xl font-extrabold md:text-5xl">The flower collection</h2>
        <p className="mt-3 max-w-lg">Roses, a sunflower and full bouquets. Hover a photo to bring it closer.</p></Reveal>
      <div className="mt-12 columns-2 gap-4 md:columns-3">
        {photos.map((n, i) => (
          <Reveal key={n} delay={(i % 3) * 0.1} className="mb-4 break-inside-avoid">
            <motion.div whileHover={{ scale: 1.04, rotate: i % 2 ? 1.5 : -1.5 }} className="overflow-hidden rounded-3xl shadow-xl">
              <img src={img(n)} alt="Handmade crochet flowers" loading="lazy" className="w-full object-cover transition duration-700 hover:scale-110" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative z-10 bg-cobalt px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="font-display text-4xl font-extrabold md:text-5xl">How each flower is made</h2></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.12}>
              <motion.div whileHover={{ y: -10 }} className="h-full rounded-3xl bg-white/10 p-6 backdrop-blur">
                <div className="grid h-12 w-12 place-items-center rounded-full font-display text-xl font-extrabold text-ink" style={{ background: colors[i][1] }}>{i + 1}</div>
                <h3 className="mt-4 font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-white/80">{d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Colours() {
  return (
    <section id="colours" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">A bouquet in every colour</h2>
          <p className="mt-4 max-w-md">Pick a shade or mix them all. These six colours come straight from the yarn.</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {colors.map(([n, c], i) => (
              <motion.div key={n} whileHover={{ scale: 1.12, rotate: 4 }} animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 + i * 0.4 }}
                className="rounded-2xl p-4 text-center text-sm font-bold shadow-lg" style={{ background: c, color: ["#FFD43B", "#F7A6BE"].includes(c) ? "#14205E" : "#fff" }}>{n}</motion.div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.img whileHover={{ rotate: -2, scale: 1.03 }} src={img("b4")} alt="Bouquet in a blue vase" className="mx-auto max-h-[560px] rounded-[2.5rem] border-8 border-white object-cover shadow-2xl" />
        </Reveal>
      </div>
    </section>
  );
}

function Love() {
  return (
    <section id="love" className="relative z-10 bg-gradient-to-r from-blush/50 via-sun/40 to-orchid/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="font-display text-4xl font-extrabold md:text-5xl">Kind words</h2></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <motion.figure whileHover={{ y: -8, rotate: i - 1 }} className="h-full rounded-3xl bg-white p-6 shadow-xl">
                <div className="text-xl text-sun">★★★★★</div>
                <blockquote className="mt-3">{r}</blockquote>
                <figcaption className="mt-4 font-bold">Happy customer</figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="relative z-10 px-6 py-24 text-center">
      <Reveal>
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold md:text-6xl">Want to see what is next? <span className="grad-text">Come say hello.</span></h2>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-bold text-white shadow-2xl transition hover:scale-110 hover:bg-orchid"><Github /> Visit my GitHub</a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 bg-ink px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div><p className="font-display text-2xl font-extrabold">🌸 Bloomify</p><p className="text-sm text-white/70">Handmade crochet flowers by Adan</p></div>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold transition hover:text-sun"><Github /> github.com/adan-bajwa</a>
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Adan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (<><Petals /><Nav /><Hero /><Marquee /><Gallery /><Process /><Colours /><Love /><Contact /><Footer /></>);
}
