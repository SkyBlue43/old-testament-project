import Accordion from "./Accordian";
import "./App.css";

function App() {
  const cardBase =
    "relative group rounded-xl shadow-lg cursor-pointer overflow-hidden flex items-center justify-center transition transform hover:scale-[1.04] hover:shadow-2xl";

  const overlay =
    "absolute inset-0 bg-black/40 group-hover:bg-black/30 transition";

  const label =
    "relative text-white font-bold drop-shadow-lg text-xl md:text-2xl";

  return (
    <div className="flex w-screen h-screen text-black overflow-hidden bg-gradient-to-br from-stone-200 to-stone-400 font-title">
      {/* LEFT COLUMN */}
      <div className="flex flex-col w-1/5 p-4 space-y-6 text-center">
        <div
          onClick={() =>
            (window.location.href =
              "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng")
          }
          className={`${cardBase} h-[50%]`}
          style={{
            backgroundImage: `url(/images/kingJamesBible.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={overlay} />
          <span className={label}>Start Now</span>
        </div>

        <div
          onClick={() =>
            (window.location.href =
              "https://rsc.byu.edu/my-gospel-study/come-follow-me/2022")
          }
          className={`${cardBase} h-[20%]`}
          style={{
            backgroundImage: `url(/images/comeFollowMe.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={overlay} />
          <span className={label}>Come Follow Me</span>
        </div>

        <div
          onClick={() =>
            (window.location.href =
              "https://www.churchofjesuschrist.org/media/collection/old-testament-all-gospel-art-images?lang=eng")
          }
          className={`${cardBase} h-[30%]`}
          style={{
            backgroundImage: `url(/images/bronzeSerpent.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={overlay} />
          <span className={label}>Old Testament Art</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center overflow-y-auto px-10 py-8 text-center">
        <h1 className="mb-6 font-bold text-5xl drop-shadow-md">
          Welcome to My Old Testament Project!
        </h1>

        <p className="text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed bg-white/60 p-6 rounded-xl shadow">
          “We tend to love the scriptures that we spend time with. We may need
          to balance our study in order to love and understand all scripture… Do
          not discount or devalue the Holy Bible.”
          <br />
          <span className="font-semibold">
            — President M. Russell Ballard, *The Miracle of the Holy Bible*
            (2007)
          </span>
        </p>

        <h2 className="mt-10 font-bold text-4xl drop-shadow-sm">
          Choose Your Translation:
        </h2>

        <div className="w-full max-w-2xl mt-8 bg-white/50 p-4 rounded-xl shadow-lg backdrop-blur">
          <Accordion />
        </div>

        <h2 className="mt-10 font-bold text-2xl">
          <a
            href="https://docs.google.com/document/d/1oEbtdwkL1ZsU6GI6aFp1iIEVrvKgJKIsTyVrbJOk0IA/edit?tab=t.0"
            className="text-blue-700 underline hover:text-blue-900 transition"
          >
            Additional Resources
          </a>
        </h2>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col w-1/5 p-4 space-y-6">
        <div
          onClick={() =>
            (window.location.href =
              "https://open.spotify.com/playlist/6wpxszkV72Q63Z881xQzOe?si=OZl3Guq1Sz2nJt6P_UAgeA")
          }
          className={`${cardBase} h-[30%]`}
          style={{
            backgroundImage: `url(/images/davidMusic.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={overlay} />
          <span className={label}>Christian Music</span>
        </div>

        <div
          onClick={() =>
            (window.location.href =
              "https://open.spotify.com/show/0K5mzHO17TG1t20kUr0oIb?si=b996ffd0da1b4f8d")
          }
          className={`${cardBase} h-[30%]`}
          style={{
            backgroundImage: `url(/images/yReligion.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={overlay} />
          <span className={label}>Y Religion</span>
        </div>

        <div
          onClick={() => (window.location.href = "https://scriptures.byu.edu")}
          className={`${cardBase} h-[20%]`}
          style={{
            backgroundImage: `url(/images/scriptures.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={overlay} />
          <span className={label}>Scripture Citation Index</span>
        </div>

        <div
          onClick={() =>
            (window.location.href =
              "https://johnhiltoniii.com/wp-content/uploads/2022/02/Isaiah-Map-2022-rev.pdf")
          }
          className={`${cardBase} h-[20%]`}
          style={{
            backgroundImage: `url(/images/mapIsaiah.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={overlay} />
          <span className={label}>Isaiah Map</span>
        </div>
      </div>
    </div>
  );
}

export default App;
