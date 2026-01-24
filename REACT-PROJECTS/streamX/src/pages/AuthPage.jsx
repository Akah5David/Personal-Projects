import { useParams } from "react-router-dom";
import NavBar from "../reusable_components/NavBar";
import Footer from "../components/Footer";
import Form from "../reusable_components/Form";

export default function LoginPage() {
  const { type } = useParams();
  return (
    <>
      {(type === "login" || type === "reset-password") && (
        <NavBar LoadersData={null} />
      )}
      <Form authType={type} />
      <hr className="border-0 bg-[#90909092] h-[0.5px]" />
      {(type === "login" || type === "reset-password") && <Footer />}
    </>
  );
}
