import "./App.css";
import { UrlCreator } from "./components/UrlCreator";
import { useState, useEffect } from "react";
import { downLoaderVideo, TitleVideo } from "./api/downloaderVideo";
function App() {
  const [urlNew, setUrlNew] = useState("");

  function downloaderVideo(_url) {
    setUrlNew(_url);
    downLoaderVideo(urlNew)
      .then((response) => {
        var blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });

        TitleVideo(urlNew)
          .then((response) => {
            var videoTitle = response.data.video_title || "video"; // Si no hay título, utiliza "video" como nombre predeterminado
            var filename = videoTitle.replace(/[^a-zA-Z0-9-_]/g, "") + ".mp4"; // Limpiar el título para usar como nombre de archivo

            // Crear enlace para descargar el video
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error al obtener el título del video:", error);
          });
      })
      .catch((error) => {
        console.error("Error al descargar el video:", error);
      });
  }

  useEffect(()=>{
      console.log(urlNew)
  }, [urlNew])

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container col-md-4 offset-md-4 d-flex justify-content-center my-2 py-8 row">
        <UrlCreator downloaderVideo={downloaderVideo} />
      </div>
    </main>
  );
}

export default App;
