import { useState } from "react";

export const UrlCreator = ({ downloaderVideo  }) => {
  const [newUrl, setNewUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    downloaderVideo(newUrl);
    localStorage.setItem("url", newUrl);
    setNewUrl("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter a new url video youtube"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
        ></input>
        <button>downloader video</button>
      </form>
    </div>
  );
};
