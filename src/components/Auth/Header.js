import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10 ">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
        {heading}
      </h2>
      <p className=" text-center text-sm text-white mt-6">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-white hover:text-gray-200"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
