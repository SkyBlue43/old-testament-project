import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="w-1/5 bg-red-700">left</div>
      <div className="flex-1">middle</div>
      <div className="w-1/5 bg-red-700">right</div>
    </div>
  );
}

export default App;
