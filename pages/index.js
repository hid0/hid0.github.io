export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-slate-400">Hello world!</h1>
      <iframe
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/track/4ARcfREq6OpIVfVImAPFpc?utm_source=generator"
        width="100%"
        height={352}
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
}
