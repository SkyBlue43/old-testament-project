import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen bg-gray-200 text-black overflow-hidden">
      {/* LEFT COLUMN */}
      <div className="flex flex-col w-1/5 text-center">
        {/* Start Now */}
        <div
          onClick={() =>
            (window.location.href =
              "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng")
          }
          className="relative h-5/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg 
          transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10"
          style={{
            backgroundImage: `url(/images/kingJamesBible.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
          <span className="relative text-white text-xl font-bold drop-shadow-lg">
            Start Now!
          </span>
        </div>

        {/* Come Follow Me */}
        <div
          onClick={() =>
            (window.location.href =
              "https://rsc.byu.edu/my-gospel-study/come-follow-me/2022")
          }
          className="relative h-2/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg 
          transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10"
          style={{
            backgroundImage: `url(/images/comeFollowMe.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
          <span className="relative text-white text-lg font-bold drop-shadow-lg">
            Come Follow Me
          </span>
        </div>

        {/* Old Testament Art */}
        <div
          onClick={() =>
            (window.location.href =
              "https://www.churchofjesuschrist.org/media/collection/old-testament-all-gospel-art-images?lang=eng")
          }
          className="relative h-3/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg 
          transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10"
          style={{
            backgroundImage: `url(/images/bronzeSerpent.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg" />
          <span className="relative text-white text-lg font-bold drop-shadow-lg">
            Old Testament Art
          </span>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-start m-8 text-4xl text-center">
        <h1 className="mb-6 font-bold">Welcome to My Old Testament Project!</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          “We tend to love the scriptures that we spend time with. We may need
          to balance our study in order to love and understand all scripture… Do
          not discount or devalue the Holy Bible.”
          <br />— President M. Russell Ballard, *The Miracle of the Holy Bible*
          (2007)
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-1/5">
        {/* Christian Music */}
        <div
          onClick={() =>
            (window.location.href =
              "https://open.spotify.com/playlist/6wpxszkV72Q63Z881xQzOe?si=OZl3Guq1Sz2nJt6P_UAgeA")
          }
          className="relative h-3/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg 
          transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10"
          style={{
            backgroundImage: `url(/images/davidMusic.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
          <span className="relative text-white text-lg font-bold drop-shadow-lg">
            Christian Music
          </span>
        </div>

        {/* Y Religion */}
        <div
          onClick={() =>
            (window.location.href =
              "https://open.spotify.com/show/0K5mzHO17TG1t20kUr0oIb?si=b996ffd0da1b4f8d")
          }
          className="relative h-3/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg
          transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10"
          style={{
            backgroundImage: `url(/images/yReligion.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
          <span className="relative text-white text-lg font-bold drop-shadow-lg">
            Y Religion
          </span>
        </div>

        {/* Scripture Citation Index */}
        <div
          onClick={() => (window.location.href = "https://scriptures.byu.edu")}
          className="relative h-2/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg 
          transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10"
          style={{
            backgroundImage: `url(/images/scriptures.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
          <span className="relative text-white text-lg font-bold drop-shadow-lg">
            Scripture Citation Index
          </span>
        </div>

        {/* Isaiah Map */}
        <div
          onClick={() =>
            (window.location.href =
              "https://johnhiltoniii.com/wp-content/uploads/2022/02/Isaiah-Map-2022-rev.pdf")
          }
          className="relative h-2/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg
          transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10"
          style={{
            backgroundImage: `url(/images/mapIsaiah.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg" />
          <span className="relative text-white text-lg font-bold drop-shadow-lg">
            Isaiah Map
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
