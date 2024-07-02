import { Link } from "react-router-dom";

export default function FormExtra() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-white focus:ring-black-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
          Remember me
        </label>
      </div>
      <div className="text-sm">
        <Link
          to="/forgetPassword"
          className="font-medium text-white hover:text-gray-200 "
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}
