import { useState } from "react";
import { FaGoogle } from "react-icons/fa";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setErrorMessage("Please fill out both fields.");
        } else {

            console.log("Logging in with:", { email, password });
            setErrorMessage(""); 
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                    Login
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <a href="/forgot-password" className="text-blue-500 text-sm">
                        Forgot password?
                    </a>
                </div>

                {/* Google Login Button */}
                <div className="mt-6 text-center flex items-center justify-center gap-3 border-2 border-green-700 rounded-lg px-4 py-2 cursor-pointer">
                    <div>
                        <FaGoogle></FaGoogle>
                    </div>
                    <p>Login with google</p>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">Don&apos;t have an account?</p>
                    <a href="/register" className="text-blue-500 text-sm">
                        Register here
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
