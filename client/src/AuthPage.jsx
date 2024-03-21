import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3000/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background flex justify-center items-center">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title font-bold text-2xl py-3">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth c">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" placeholder="User Name"/>
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;