import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <div className="logo">WatchNow</div>
      </Link>
      <p>
        © 2023 WatchNow-KK - All external content remains the property of the
        rightful owner.
      </p>
    </div>
  );
}
