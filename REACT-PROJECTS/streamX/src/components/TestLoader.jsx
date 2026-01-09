import { useEffect } from "react";
import { Homepage } from "../api/loader";

export default function TestLoader() {
  useEffect(() => {
    Homepage().then((result) => {
      console.log("Loader result:", result);
    });
  }, []);

  return <div>Check console</div>;
}
