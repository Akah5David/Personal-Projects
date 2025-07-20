import logoImg from "../assets/svgs/logo.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className="h-screen w-screen bg-green-500">
      <div>
        <div className="flex gap-2 items-center min-w-max ">
          <img src={logoImg} alt="Logo" className="h-[60px] w-[30px] " />
          <h3 className="text-white font-bold font-serif text-[25px]">
            Streaming X
          </h3>
        </div>
        <div>
          <p> Copyright © Streaming X | Designed by</p>
          <p>
            <Link>David Akah</Link> - Powered by<Link>Android</Link>
          </p>
        </div>

        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>

      <div>
        <h3>Pages(pulic)</h3>
        <div>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/category/single">Category single</Link>
          <Link to="/Video single">Video single</Link>
          <Link to="/Pricing">Pricing</Link>
          <Link to="/Pricing single">Pricing single</Link>
          <Link to="/Director page">Director page</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Rest password">Rest password</Link>
          <Link to="/Update password">Update password</Link>
          <Link to="/Access denied">Access denied</Link>
          <Link to="/User Account">User Account</Link>
        </div>
      </div>

      <div>
        <h3>Pages(Membership)</h3>
        <div>
          <Link to="/Home">Home</Link>
          <Link to="/Category single">Category single</Link>
          <Link to="/Video single">Video single</Link>
        </div>
      </div>
    </section>
  );
}
