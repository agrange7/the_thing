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
  return (
    <section className="section-register sections-vertical">
      <h2>Register</h2>
      <form className="register-form">
        <div className="register-form-data-container">
          <div className="register-form-data">
            <label htmlFor="username">Username</label>
            <input
              className="register-form-input"
              type="text"
              name="username"
            />

            <label htmlFor="password">Password</label>
            <input
              className="register-form-input"
              type="password"
              name="password"
            />

            <label htmlFor="email">Email</label>
            <input className="register-form-input" type="email" name="email" />

            <label htmlFor="day of birth">Day of Birth</label>
            <input
              className="register-form-input"
              type="date"
              name="day of birth"
            />

            <label htmlFor="favourite sub-genre">Favourite Sub-Genre</label>
            <select
              className="register-form-select-subgenre"
              name=""
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
            <label htmlFor="share your horror short film">
              Share your horror short film
            </label>
            <textarea
              className="register-form-textarea"
              name="share your horror short film"
              placeholder="Have you created a horror short film? Leave us a link or describe it here."
            ></textarea>
          </div>
        </div>

        <div className="register-form-button-container">
          <button type="submit">Register</button>
          <button type="reset">Delete</button>
        </div>
      </form>
    </section>
  );
};
