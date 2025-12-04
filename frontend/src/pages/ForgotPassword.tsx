import { useState } from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const canSubmit = identifier.trim().length > 0;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canSubmit) return;
        setIsSubmitting(true);

        console.log(identifier);

        // Simulate fake login with a delay
        setTimeout(() => {
            setIsSubmitting(false);
            // Navigate to home page
            navigate("/");
        }, 800);
    }


    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl flex flex-col items-center gap-6">
                <div className="w-full flex flex-col sm:flex-row items-stretch justify-center gap-6">
                    <div className="flex-1 max-w-[420px]">
                        <BackgroundGradient className="rounded-[28px] p-[0.1px]">
                            <div className="bg-black rounded-[24px] p-8 flex flex-col items-center gap-6">
                                <h1
                                    className="text-4xl tracking-tight font-bold"
                                    style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 800 }}
                                >
                                    Travelgram
                                </h1>

                                <h1 className="text-4xl tracking-tight font-bold">
                                    Forgot Password?
                                </h1>
                                <p className="text-sm text-center text-gray-500">Enter your email and we'll send you a link to reset your password.</p>

                                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                                    <label htmlFor="identifier" className="sr-only">Email or Phone Number</label>
                                    <input
                                        id="identifier"
                                        name="identifier"
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
                                        placeholder="Phone number or email"
                                        className="input bg-[#111111] border border-gray-700 placeholder-gray-500 text-white px-3 py-2 rounded focus:ring-0 focus:outline-none"
                                    />


                                    <button
                                        type="submit"
                                        disabled={!canSubmit || isSubmitting}
                                        className={`w-full py-2 rounded text-white font-semibold ${canSubmit
                                            ? "bg-[#0095f6] hover:bg-[#0087e0] active:scale-[0.995] transition"
                                            : "bg-[#2d2d2d] opacity-70 cursor-not-allowed"
                                            }`}
                                    >
                                        {isSubmitting ? "Sending link…" : "Send Link"}
                                    </button>

                                    <div className="flex items-center gap-2 my-2">
                                        <div className="flex-1 h-px bg-gray-800" />
                                        <div className="text-xs text-gray-500 uppercase">or</div>
                                        <div className="flex-1 h-px bg-gray-800" />
                                    </div>

                                    <div className="text-center">
                                        <Link to="/login" className="text-xs font-semibold transition text-blue-300 hover:text-blue-400">
                                            Back to Login
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </BackgroundGradient>
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
            </div >
        </div >
    );
};

export default ForgotPassword;
