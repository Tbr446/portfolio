import html from "html-literal";

export default st => html`
  <section class="contact">
    <div class="exp">
      <h2>Reach out to me!</h2>
      <div class="contact-form">
        <h3>Email directly:</h3>
      <form action="https://formspree.io/f/mjvlygqo" method="POST">
        <label>
          Your email:
          <input type="email" name="_replyto" />
        </label>
        <label>
          Your name:
          <input type="text" name="name" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
    <div class="social">
    <h3><a
        href="https://www.linkedin.com/in/buck-randall-b269a31bb/"
        target="_blank"
        class="navlink"
        >Connect with me on LinkedIn</a
      >
      </h3>
    </div>
    <div class="other-contact">

      <i class="fas fa-envelope fa-2x"></i>
      <p> tbr446@gmail.com</p>
      <i class="fas fa-phone fa-2x"></i>
      <p> 314-882-2110</p>


    </div>

    <!-- MAILTO FORM EXAMPLE BELOW -->
    <!-- <form enctype="text/plain" action="mailto:tbr446@gmail.com" method="POST">
  <label for="">Your name:</label>
  <input type="text" name="yourName" value=""><br>
  <label for="">Your email:</label>
  <input type="email" value="" name="yourEmail" ><br>
  <label for="">Your message:</label>
  <textarea name="yourMessage" cols="30" rows="10"></textarea>
  <input type="submit" name="">
</form> -->
  </section>
`;
