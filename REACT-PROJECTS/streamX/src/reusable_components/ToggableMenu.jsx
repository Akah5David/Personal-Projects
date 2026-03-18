import { Link } from "react-router-dom";

export default function ToggableMenu({ categories, explore, type }) {
  // const explore_arr = Object.keys(explore);

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1") // add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
  };

  const getReadableKeys = (obj) => {
    let result = [];

    const traverse = (current) => {
      Object.keys(current).forEach((key) => {
        if (typeof current[key] === "object" && !Array.isArray(current[key])) {
          traverse(current[key]); // go deeper
        } else {
          result.push(formatKey(key));
        }
      });
    };

    traverse(obj);
    return result;
  };

  const explore_arr = getReadableKeys(explore);

  console.log(explore_arr);

  return (
    <>
      <div className="pt-7.5 pb-6.5 pl-10 bg-[#aaaaaa] flex flex-col gap-2.5">
        <h4 className="font-bold text-xl">
          {type === "tv" ? "TV Series" : "Explore"}
        </h4>
        <div className="flex flex-col gap-2.5">
          {explore_arr.map((exp, index) => (
            <Link Key={index}>{exp}</Link>
          ))}
        </div>
      </div>
      <div className="pt-7.5 pb-6.5 pl-10 col-span-2 flex flex-col gap-2.5 bg-[#ffffff]">
        <h4 className="font-bold text-xl">Categories</h4>
        <div className="grid grid-cols-2 gap-2.5">
          {categories.map((category) => (
            <Link Key={category.id} className="hover:bg-[#aaaaaa41]">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
