import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-gray-200 text-black">
      <div className="flex flex-col w-1/5 text-center">
        <div
          onClick={() => alert("Image clicked")}
          className="h-5/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: `url(/images/kingJamesBible.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Start Now!
        </div>
        <div
          onClick={() => alert("Image clicked")}
          className="h-2/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: `url(/images/comeFollowMe.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Come Follow Me
        </div>
        <div
          onClick={() => alert("Image clicked")}
          className="h-3/10 bg-red-400 flex items-center justify-center rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: `url(/images/bronzeSerpent.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Old Testament Art
        </div>
      </div>
      <div className="flex-1 justify-center text-center m-8 text-4xl">
        Welcome to the Old Testament Project!
      </div>
      <div className="w-1/5">
        <div className="h-1/5 bg-red-400 rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"></div>
        <div className="h-4/5 bg-red-300 rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"></div>
      </div>
    </div>
  );
}

export default App;
