import html from "html-literal";
import cc from "../../assets/cc/home.jpg";

export default () => html`
  <section id="me">
    <h2>A few of the things I've made..</h2>
    <section id="meFluff">
      <div class="projects-container">
        <div class="projects">
          <h3>CryptoClarity</h3>
          <img src="${cc}" />
          <p>
            CryptoClarity was created with crypto newcomers in mind. This is
            currently the first iteration of the app. Light on the
            content/information. Focused on MVC architecture and DOM
            manipulation. Had fun with the calculator section. Check out
            <a
              class="link"
              href="https://cryptoclarity.netlify.app/"
              target="_blank"
              >CryptoClarity</a
            >
          </p>
        </div>
        <div class="projects">
          MORE TO COME!!! Check back in a couple of days.
        </div>
      </div>
    </section>
  </section>
`;
