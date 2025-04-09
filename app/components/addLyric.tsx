import React, { useState } from "react";
import { saveLyric } from "~/service";

const AddLyric = () => {
  const [formData, setFormData] = useState({
    title: "",
    singer: "",
    lyrics: "",
    audio: "",
    genre: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveLyric(formData);
    // Add logic to handle form submission (e.g., API call)
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, genre: value });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Add a New Song</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Title */}
        <div>
          <label htmlFor="title" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            Song Title <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the song title"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Singer */}
        <div>
          <label htmlFor="singer" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            Singer <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="singer"
            name="singer"
            value={formData.singer}
            onChange={handleChange}
            placeholder="Enter the singer's name"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Genre */}
        <div>
          <label htmlFor="genre" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            Genre <span style={{ color: "red" }}>*</span>
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleGenreChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#999",
            }}
          >
            <option value="" disabled>
              Select a genre
            </option>
            <option value="Pop">Pop</option>            
            <option value="Country">Country</option>
            <option value="Blues">Blues</option>
            <option value="Gospel">Gospel</option>
            <option value="Rock">Rock</option>
          </select>
        </div>

        {/* Lyrics */}
        <div>
          <label htmlFor="lyrics" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            Lyrics <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            id="lyrics"
            name="lyrics"
            value={formData.lyrics}
            onChange={handleChange}
            placeholder="Enter the song lyrics"
            required
            rows={6}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              resize: "vertical",
            }}
          ></textarea>
        </div>

        {/* Link */}
        <div>
          <label htmlFor="link" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            Audio/Video Link (Optional)
          </label>
          <input
            type="url"
            id="audio"
            name="audio"
            value={formData.audio}
            onChange={handleChange}
            placeholder="Enter a link to the audio or video"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddLyric;