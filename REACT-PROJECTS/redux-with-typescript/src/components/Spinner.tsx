import { useEffect, useState } from "react";
interface spinnerProps {
  text: string;
}

export default function Spinner({ text }: spinnerProps) {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      setTime(text);
    }, 50);
  }, [text]);

  console.log("spinner time", time);

  return (
    <div className="spinner">
      <h4>{time}</h4>
    </div>
  );
}
