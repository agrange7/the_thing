import { useState } from "react";
import "./SignUp.css";

const subGenres = [
  { value: "body-horror", label: "Body Horror" },
  { value: "folk", label: "Folk" },
  { value: "found-footage", label: "Found Footage" },
  { value: "gothic", label: "Gothic" },
  { value: "giallo", label: "Giallo" },
  { value: "gore", label: "Gore" },
  { value: "home-invasion-survival", label: "Home Invasion and Survival" },
  { value: "horror", label: "Horror" },
  { value: "monsters", label: "Monsters" },
  { value: "paranormal", label: "Paranormal" },
  { value: "psychological", label: "Psychological" },
  { value: "sci-fi", label: "Sci-Fi" },
  { value: "slasher", label: "Slasher" },
  { value: "supernatural", label: "Supernatural" },
  { value: "vampires", label: "Vampires" },
  { value: "zombies", label: "Zombies" },
];

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    birthDate: "",
    subGenre: subGenres[0].value,
    horrorFilm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      email: "",
      birthDate: "",
      subGenre: subGenres[0].value,
      horrorFilm: "",
    });
  };

  return (
    <section className="section-register sections-vertical">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-form-data-container">
          <div className="register-form-data">
            <label htmlFor="username">Username</label>
            <input
              className="register-form-input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              className="register-form-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              className="register-form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="birthDate">Day of Birth</label>
            <input
              className="register-form-input"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />

            <label htmlFor="sub-genre">Favourite Sub-Genre</label>
            <select
              className="register-form-select-subgenre"
              name="subGenre"
              value={formData.subGenre}
              onChange={handleChange}
              id="sub-genre"
            >
              {subGenres.map((genre) => (
                <option key={genre.value} value={genre.value}>
                  {genre.label}
                </option>
              ))}
            </select>
          </div>
          <div className="register-textarea-container">
            <label htmlFor="horrorFilm">Share your horror short film</label>
            <textarea
              className="register-form-textarea"
              name="horrorFilm"
              value={formData.horrorFilm}
              onChange={handleChange}
              placeholder="Have you created a horror short film? Leave us a link or describe it here."
            ></textarea>
          </div>
        </div>

        <div className="register-form-button-container">
          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>
            Delete
          </button>
        </div>
      </form>
    </section>
  );
};
