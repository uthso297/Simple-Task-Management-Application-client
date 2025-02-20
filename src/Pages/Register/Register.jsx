import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoLink, setPhotoLink] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || photoLink === "" || password === "") {
            setErrorMessage("Please fill out all fields.");
        } else {
            console.log("Registering with:", { name, email, photoLink, password });
            setErrorMessage(""); 
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                    Register
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                        />
                    </div>
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
                        <label className="block text-gray-600" htmlFor="photoLink">
                            Profile Picture URL
                        </label>
                        <input
                            type="text"
                            id="photoLink"
                            value={photoLink}
                            onChange={(e) => setPhotoLink(e.target.value)}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your profile picture URL"
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
                        Register
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">Already have an account?</p>
                    <a href="/login" className="text-blue-500 text-sm">
                        Login here
                    </a>
                </div>

                {/* Google Login Button */}
                <div className="mt-6 text-center flex items-center justify-center gap-3 border-2 border-green-700 rounded-lg px-4 py-2 cursor-pointer">
                    <div>
                        <FaGoogle />
                    </div>
                    <p>Register with Google</p>
                </div>
            </div>
        </div>
    );
}

export default Register;
