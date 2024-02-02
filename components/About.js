import Photo from "../media/laura-smith.png";
import LinkedIn from "../media/linkedin-brands.svg";
import Email from "../media/envelope-solid.svg";

export default function About() {
  return (
    <main className="about">
      <div>
        <img className="about--photo" src={Photo} />
      </div>
      <div>
        <h1 className="about--name">Laura Smith</h1>
        <h4 className="about--position">Frontend Developer</h4>
        <a
          className="about--website"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <p className="about--website__text">laurasmith.website</p>
        </a>
      </div>
      <div className="about--connect">
        <a
          className="about--connect__email"
          href="mailto:damilarehammed.hd@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="about--connect__email__icon"
            src={Email}
            alt="Email"
          />
          <span>Email</span>
        </a>
        <a
          className="about--connect__linkedin"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="about--connect__linkedin__icon"
            src={LinkedIn}
            alt="Linkedin"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </main>
  );
}
