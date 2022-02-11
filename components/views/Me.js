import html from "html-literal";
import me from "../../assets/ME.svg";

export default () => html`
  <section id="me">

  <div class="bio-container"><img class="me"  src="${me}" alt="Buck!!!">
  <h1>About me</h1>

  <p>I'm a finance and economics enthusiast with a passion for cryptocurrency and all things technology</p>
  <p>Full Stack Bootcamp grad (1/20/22)</p>

  <div class="exp">
  <h3>Education</h3>
  <ul class="edu">
    <li>Webster Groves High School Class of 2013</li>
    <li>University of Missouri St. Louis, Graduated Dec. 2018</li>
    <ul>
      <li>Bachelor Degree in Business Administration</li>
      <li>Emphasis in Finance</li>
      <li>GPA 3.5</li>

    </ul>
    <li>Savvy Coders Full Stack Web Development Bootcamp</li>
    <ul>
      <li>Bootcamp completed Jan. 20, 2022</li>
      <li>Check out the first iteration of my capstone application <a class="link" href="https://cryptoclarity.netlify.app/" target="_blank">CryptoClarity</a></li>
    </ul>
  </ul>

  <h3>Professional Experience</h3>
  <ul>
    <li> UHY Advisors - Public Accountant <span class="exp-dates">12/2019 - 11/2021</span></li>
    <ul>
      <li>Aided in the merger process of Becker and Rosen CPAs, to UHY Advisors; supervised the transition of
        sensitive client information during this process. Volunteered to help the audit department during
        staffing shortages, drafted financial statements and participated in on-site audits. Provided tax
        preparation and planning services for individuals, partnerships, and corporations. Maintained consistent
        communication with up to 25 clients regarding various tax related issues. Worked on-site at a client’s
        office to prepare federal, state, and international tax returns for a business with over $500 million in
        revenue.</li>
    </ul>
    <li> Becker and Rosen CPA's - Public Accountant <span class="exp-dates">09/2018 - 12/2019</span></li>
    <ul>
      <li>Prepared tax returns for individuals. Focused on the detail and accuracy of each tax return to maintain
        client trust. Participated on the audit team to provide reliable and accurate financial statements for
        clients.</li>
    </ul>
    <li> Dewey's Pizza - Pizza Cook and Part Time Manager <span class="exp-dates">11/2010 - 09/2018</span></li>
    <ul>
      <li>Led a kitchen of 7 cooks through any given shift, ensured seamless transition of food from the kitchen to
        the customer’s table, analyzed and adjusted inventory based on current and projected business, and
        communicated errors and concerns to the general manager.</li>
  </ul>
</div>
<div class="skills-container">
<h3 class="skills-title">Skills</h3>
  <table class="skills-table">

      <tr>
        <td>
          <table class="skills">
            <tr class="row">
              <td>JavaScript</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>HTML</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>CSS</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>Node</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>Express</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>MongoDB</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>Axios</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>Navigo</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>HTTP RESTful API’s</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>VS Code</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>

          </table>
        </td>

        <td>

          <table class="skills">
            <tr class="row">
              <td>Markdown</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>GitHub</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>Git</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>UI/UX</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>Jira</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>Agile</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>OOP</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>SPA’s</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>CRUD Operations</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
            <tr class="row">
              <td>Deploying to Netlify and Heroku</td>
              <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></td>
            </tr>
          </table>

        </td>
      </tr>

  </table>
</div>









</div>
  </section>
`;
