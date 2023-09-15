import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import notFound from "../../images/pnf.png";
import "./PageNotFound.scss";

export default function PageNotFound() {
  return (
    <div className="main">
      <div className="back">
        <Link to="/">
          <IoMdArrowRoundBack className="back-button" />
        </Link>
      </div>
      <div className="main-image">
        <img src={notFound} alt={"Not Found"} />
      </div>
    </div>
  );
}
