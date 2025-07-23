import { Link } from "react-router-dom";

export default function SubscribeButton() {
  return (
    <Link
      to="/"
      className="bg-[#19a3ff] py-2 px-4 rounded-full font-medium text-white"
    >
      Subscribe
    </Link>
  );
}
