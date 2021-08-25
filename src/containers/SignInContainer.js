import React from 'react';

const SignInContainer = () => (
  <>
    <div>
      <h3>Sign In</h3>
    </div>
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Passowrd"
          required
        />
      </div>
      <div>
        <label>
          Show passord
          <input type="checkbox" name="showPassword" />
        </label>
      </div>
      <div>
        <button type="submit">Sign In</button>
      </div>
    </form>
  </>
);

export default SignInContainer;
