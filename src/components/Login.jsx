export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit..");
   
  }
  return (
    <form onSubmit={handleSubmit}>
    <p className="example">Without UseState</p>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">
          Login
        </button>
        {/* <button className="button" type="submit" onClick={handleSubmit}>
          Login
        </button> */}
        {/* <button className="button" type="button" onClick={handleSubmit}>
          Login
        </button> */}
      </p>
    </form>
  );
}
