import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackgroundGradient } from "../components/ui/background-gradient";
// import TravelgramLogo from "../assets/react.svg";

const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="18" height="18">
        <path fill="#EA4335" d="M271.1,105.7c31.1,0,59.3,10.7,81.4,31.7l59.8-59.8c-38.3-36.5-88.7-56.9-141.2-56.9c-82.4,0-153.6,31.4-203.7,85.2l66.9,51.8C169.8,142.6,216.3,105.7,271.1,105.7z" />
        <path fill="#4285F4" d="M473.5,229.5c0-14.8-1.2-28.7-3.4-42H271.1v79.4h111.9c-4.8,24-18.7,46.2-39.7,60.7l67.2,52.1c40.3-37.4,63.6-91.1,63.6-153.2V229.5z" />
        <path fill="#FBBC05" d="M153.2,326.5c-4.4-12.6-6.7-26.2-6.7-40.4c0-14.2,2.3-27.8,6.7-40.4V192.4H86.8c-10.4,21.3-16.4,45.8-16.4,78.2c0,32.4,6,56.9,16.4,78.2L153.2,326.5z" />
        <path fill="#34A853" d="M271.1,510.9c59.8,0,111.4-19.8,148.6-53.9l-67.2-52.1c-18.7,12.6-43.2,20-71.4,20c-54.8,0-101.3-36.9-117.9-86.2H87.1l-0.3,53.4C117.5,479.5,188.7,510.9,271.1,510.9z" />
    </svg>
);

const TravelgramLogo = "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuTValJJROe9mXHFAghEMMEsqgCNpKS2trAncS8osxXCn9fdcrmhaPGLLE-N7PJtKsMJekw0S5btLJNnLlII91B_NYioJEFw2SO-ookeAlZgdaG7anR49NzWNdbEP_lMPab_ieHuEeDF_i_85glG0IRmZv0EdJt2BS74IrJORVd1EZowEvxkE5wVBhRw4p1DkhwdvI5wfI-OEhR9hAWEoWbQyNX8p0s-cHfAnei_oOUd2aJigDS0tNrD12S2vJuWEW7qDY3kxc54";

function Login() {
    const navigate = useNavigate?.() ?? (() => { });
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const canSubmit = identifier.trim().length > 0 && password.length > 0;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canSubmit) return;
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            try {
                navigate("/");
            } catch {
                /* no-op if useNavigate not available (e.g., user not using router) */
            }
        }, 800);
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl flex flex-col items-center gap-6">
                <div className="w-full flex flex-col sm:flex-row items-stretch justify-center gap-6">
                    <div className="hidden sm:flex items-center justify-center flex-1">
                        <div className="w-full h-full bg-gradient-to-b from-[#0f0f0f] to-[#060606] rounded-2xl border border-gray-800 shadow-lg overflow-hidden relative">
                            <img
                                src={TravelgramLogo}
                                alt="Feed preview"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: login card */}
                    <div className="flex-1 max-w-[420px]">

                        <div className="flex-1 max-w-[420px]">
                            <BackgroundGradient className="rounded-[28px] p-[0.1px]">
                                <div className="bg-black rounded-[24px] p-8 flex flex-col items-center gap-6">
                                    <h1
                                        className="text-4xl tracking-tight font-bold"
                                        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 800 }}
                                    >
                                        Travelgram
                                    </h1>

                                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                                        <label htmlFor="identifier" className="sr-only">Phone number, username, or email</label>
                                        <input
                                            id="identifier"
                                            name="identifier"
                                            value={identifier}
                                            onChange={(e) => setIdentifier(e.target.value)}
                                            placeholder="Phone number, username, or email"
                                            className="input bg-[#111111] border border-gray-700 placeholder-gray-500 text-white px-3 py-2 rounded focus:ring-0 focus:outline-none"
                                        />

                                        <div className="relative">
                                            <label htmlFor="password" className="sr-only">Password</label>
                                            <input
                                                id="password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Password"
                                                className="input bg-[#111111] border border-gray-700 placeholder-gray-500 text-white px-3 py-2 rounded w-full focus:ring-0 focus:outline-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </button>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={!canSubmit || isSubmitting}
                                            className={`w-full py-2 rounded text-white font-semibold ${canSubmit
                                                ? "bg-[#0095f6] hover:bg-[#0087e0] active:scale-[0.995] transition"
                                                : "bg-[#2d2d2d] opacity-70 cursor-not-allowed"
                                                }`}
                                        >
                                            {isSubmitting ? "Logging in…" : "Log In"}
                                        </button>

                                        <div className="flex items-center gap-2 my-2">
                                            <div className="flex-1 h-px bg-gray-800" />
                                            <div className="text-xs text-gray-500 uppercase">or</div>
                                            <div className="flex-1 h-px bg-gray-800" />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => alert("Google login placeholder")}
                                            className="w-full flex items-center justify-center gap-2 py-2 rounded text-sm font-semibold text-[#0095f6] hover:underline"
                                        >
                                            <GoogleIcon className="text-[#1877f2]" />
                                            <span className="text-[#1877f2]">Sign up with Google</span>
                                        </button>

                                        <div className="text-right">
                                            <Link to="/forgot-password" className="text-xs text-gray-400 hover:text-white">
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </BackgroundGradient>
                        </div>


                        {/* Signup card */}
                        <div className="bg-[#000000] border border-gray-800 p-6 rounded-lg mt-4 text-center transition duration-300 ease-in-out hover:shadow-lg hover:shadow-white/12">
                            <p className="text-sm text-gray-300">
                                Don't have an account?{" "}
                                <Link to="/register" className="text-[#0095f6] font-semibold hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>




                        {/* Get the app */}
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-400 mb-3">Get the app.</p>
                            <div className="flex items-center justify-center gap-3">
                                <a
                                    href="#"
                                    aria-label="Download on the App Store"
                                    className="inline-block"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                                        alt="App Store"
                                        className="h-9"
                                    />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Get it on Google Play"
                                    className="inline-block"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        className="h-9"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer small text like travelgram */}
                <footer className="text-xs text-gray-500 text-center mt-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">Meta</span>
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">About</span>
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">Blog</span>
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">Jobs</span>
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">Help</span>
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">API</span>
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">Privacy</span>
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">Terms</span>
                        <span className="hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">Locations</span>
                    </div>
                    <div className="mt-3">© {new Date().getFullYear()} Travelgram</div>
                </footer>
            </div>
        </div>
    );
}

export default Login;
