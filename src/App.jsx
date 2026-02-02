import "./App.css";
import phoneImg from "./assets/img/phone2.png";
import fbImg from "./assets/img/fb.png";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="phones">
          <img src={phoneImg} alt="phone preview" className="phone-img" />
        </div>

        <div className="auth">
          <div className="card">
            <h1 className="logo">Instagram</h1>
            <input
              type="text"
              placeholder="Phone number, username or email address"
            />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Log in</button>

            <div className="or">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            <button className="fb-btn">
              <img src={fbImg} alt="facebook" className="fb-icon" />
              Log in with Facebook
            </button>
            <p className="forgot">Forgotten your password?</p>
          </div>

          <div className="signup">
            <p>
              Don't have an account? <span>Sign up</span>
            </p>
          </div>

          <div className="apps">
            <p>Get the app.</p>
            <div className="stores">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                alt="google play"
              />
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                alt="microsoft"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#meta">Meta</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#jobs">Jobs</a>
          <a href="#help">Help</a>
          <a href="#api">API</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#locations">Locations</a>
          <a href="#lite">Instagram Lite</a>
          <a href="#threads">Threads</a>
          <a href="#contact">Contact uploading and non-users</a>
          <a href="#verified">Meta Verified</a>
        </div>
        <div className="footer-bottom">
          <select className="language-select">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
          </select>
          <p className="copyright">© 2024 Instagram from Meta</p>
        </div>
      </footer>
    </>
  );
}
