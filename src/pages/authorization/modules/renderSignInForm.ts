export function renderSignInForm() {
  const signInContainer = document.querySelector('.signin-container');
  const html = `<form class="signin-form">
                  <h2>Sign in</h2>
                  <p>Please fill in this form to enter to account.</p>
                  <label for="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="email" required class="signin-email">
                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required class="signin-password">
                  <button class="signin-button-form">Sign in</button>
                </form>`;
  signInContainer?.insertAdjacentHTML('beforeend', html);
}
