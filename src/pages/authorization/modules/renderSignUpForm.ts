export function renderSignUpForm() {
  const signUpContainer = document.querySelector('.signup-container');
  const html = `<form class="signup-form">
                  <h2>Sign up</h2>
                  <p>Please fill in this form to create an account.</p>
                  <label for="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="email" required class="signup-email">
                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required class="signup-password">
                  <button class="signup-button-form">Sign up</button>
                </form>`;
  signUpContainer?.insertAdjacentHTML('beforeend', html);
}
