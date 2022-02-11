import html from "html-literal";

export default st => html`
  <section id="contact">
    <div class="exp">
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
