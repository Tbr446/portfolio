import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo class="navlink">${link.text}</a></li>`
      )}
    </ul>
  </nav>
`;

/* <nav><h1 class="name">Buck Randall</h1><a class="navlink" href="contact-me.html">Contact me</a>
<a class="navlink" href="projects.html">My projects</a></nav> */
