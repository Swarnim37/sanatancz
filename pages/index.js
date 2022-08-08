import Head from "next/head";

import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Astrologie Sanatan</title>
        <meta
          name="description"
          content="Astrologie Sanatan, Nabízíme tyto služby - výklad osobního horoskopu, konzultace současných trendů a vývoj v blízké budoucnosti, výběr vhodné doby pro začátek podnikání, operaci, cestování, apod."
        />
        <meta
          name="Keywords"
          content=" Astrologie Sanatan, výklad horoskopu, astrologické konzultace, váš védský horoskop "
        />
        <link rel="icon" href="/img/logosvg.svg" />
      </Head>
      <Featured />
    </div>
  );
}
