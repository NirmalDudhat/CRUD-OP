import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand">Mern</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                All Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
