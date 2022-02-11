import html from "html-literal";

let copyrightYear = new Date().getFullYear();

export default () => html`
  <footer>
    <div class="cw">
      &copy;${copyrightYear}
      <a
        href="https://www.linkedin.com/in/buck-randall-b269a31bb/"
        target="_blank"
        class="navlink"
        >Buck Randall</a
      >
    </div>
    <div class="bottom-angle"></div>
  </footer>
`;
