import { Link } from "react-router-dom";

export default function SubscribeButton({ btnAction }) {
  return (
    <Link
      to="/"
      className="bg-[#19a3ff] py-4 px-6 rounded-full font-medium text-white"
    >
      {btnAction}
    </Link>
  );
}
