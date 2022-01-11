import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <h1>헬로 렛츠 빌드 틱톡 클론</h1>
      <div className="app-videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
