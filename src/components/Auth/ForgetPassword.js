import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    forgetPassword(email)
      .then((res) => {
        setMessage("Password reset email sent. Check your inbox.");
      })
      .catch((err) => setMessage("Error sending reset email: " + err.message));
  };

  const handleLoginAgain = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center bg-hero bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="w-full max-w-xl">
        <div className="bg-cover bg-center bg-no-repeat shadow-2xl border rounded-lg p-4 md:p-4 lg:p-8 bg-white bg-opacity-10">
          <form>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Forgot Password
            </h2>
            <p className="text-white underline mb-2">{message}</p>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                style={{ backgroundColor: "#3B3B3B" }}
                className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border text-lg text-white"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col lg:flex-row">
              <button
                className="btn bg-black font-primary w-full lg:w-1/2 text-white h-[40px] mb-2 lg:mb-0 mr-0 lg:mr-2"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
              <button
                className="btn bg-black font-primary w-full lg:w-1/2 text-white h-[40px] mb-2 lg:mb-0 ml-0 lg:ml-2"
                onClick={handleLoginAgain}
              >
                Login Again
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
