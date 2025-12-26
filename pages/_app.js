import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Component {...pageProps} />
    </div>
  );
}
