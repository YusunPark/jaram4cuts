import "./App.css";
import Frame from "./components/Frame";

import html2canvas from "html2canvas";

function App() {
  const onCapture = () => {
    console.log("onCapture");
    html2canvas(document.getElementById("jaram4cuts")!).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
    });
  };

  const onSaveAs = (uri: string, filename: string) => {
    console.log("onSaveAs");
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <button onClick={onCapture}>다운받기</button>
      <table id="jaram4cuts">
        <tr>
          <td>
            {" "}
            <Frame />{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
