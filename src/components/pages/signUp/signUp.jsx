import "./SignUp.css";

export const SignUp = () => {
  return (
    <section className="section-register sections-vertical">
      <h2>Register</h2>
      <form className="register-form">
        <div className="register-form-data-container">
          <div className="register-form-data">
            <label for="username">Username</label>
            <input
              className="register-form-input"
              type="text"
              name="username"
            />

            <label for="password">Password</label>
            <input
              className="register-form-input"
              type="password"
              name="password"
            />

            <label for="email">Email</label>
            <input className="register-form-input" type="email" name="email" />

            <label for="day of birth">Day of Birth</label>
            <input
              className="register-form-input"
              type="date"
              name="day of birth"
            />

            <label for="favourite sub-genre">Favourite Sub-Genre</label>
            <select
              className="register-form-select-subgenre"
              name=""
              id="sub-genre"
            >
              <option value="body-horror">Body Horror</option>
              <option value="folk">Folk</option>
              <option value="found-footage">Found Footage</option>
              <option value="gothic">Gothic</option>
              <option value="giallo">Giallo</option>
              <option value="gore">Gore</option>
              <option value="home-invasion-survival">
                Home Invasion and Survival
              </option>
              <option value="horror">Horror</option>
              <option value="monsters">Monsters</option>
              <option value="paranormal">Paranormal</option>
              <option value="psychological">Psychological</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="slasher">Slasher</option>
              <option value="supernatural">Supernatural</option>
              <option value="vampires">Vampires</option>
              <option value="zombies">Zombies</option>
            </select>
          </div>
          <div className="register-textarea-container">
            <label for="share your horror short film">
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
