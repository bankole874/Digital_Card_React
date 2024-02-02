import Twitter from "../media/twitter-square.svg";
import Facebook from "../media/facebook-square.svg";
import Instagram from "../media/instagram-square.svg";
import Github from "../media/github-square.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer--links"
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src={Twitter} alt="Twitter" />
      </a>

      <a
        className="footer--links"
        href="https://facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src={Facebook} alt="Facebook" />
      </a>

      <a
        className="footer--links"
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src={Instagram} alt="Instagram" />
      </a>

      <a
        className="footer--links"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src={Github} alt="Github" />
      </a>
    </footer>
  );
}
