import html from "html-literal";
import cc from "../../assets/cc/home.jpg";
import exp from "../../assets/cc/exp.jpg";
import cc2 from "../../assets/cc/cryptoCentral.jpg";

export default () => html`
  <section id="me">
    <h2>A few of the things I've made...</h2>
    <section id="meFluff">
      <div class="projects-container">
        <div class="projects">
          <h3>CryptoClarity</h3>
          <img src="${cc}" />
          <p>
            CryptoClarity was created with crypto newcomers in mind. It was the capstone project for the coding bootcamp that I attended (SavvyCoders). This is
            currently the first iteration of the app. Light on the
            content/information. Focused on MVC architecture and DOM
            manipulation. Had fun with the calculator section. Check out
            <a
              class="link"
              href="https://cryptoclarity.netlify.app/"
              target="_blank"
              >CryptoClarity</a
            >.
          </p>
        </div>
        <div class="projects">
          <h3>Expense Tracker</h3>
          <img src="${exp}" />
          <p>
            This is my first React App. It's a basic expense tracker that can be
            updated and filtered based on date. Main focus was on the use of
            props to pass values between components. Check out my
            <a
              class="link"
              href="https://expense-traq.netlify.app/"
              target="_blank"
              >Expense Tracker</a
            >.
          </p>
        </div>
        <div class="projects">
          <h3>Crypto Central</h3>
          <img src="${cc2}" />
          <p>
            This is my first <em>intermediate</em> React App. Following the theme of cryptocurrency, this app was created to provide a hub for all things crypto. Created the UI with AntDesign and used Redux Toolkit for the API handling for consistency. Currently under construction to provide a visual using Chart.js along with adding content to the Exchanges section (App was created using a tutorial for the foundation). Check out
            <a
              class="link"
              href="https://crypto-central.netlify.app/"
              target="_blank"
              >Crypto Central</a
            >.
          </p>
        </div>


          <p class="more">MORE TO COME!!! Check back in a couple of days.</p>
        </div>
      </div>
    </section>
  </section>
`;
