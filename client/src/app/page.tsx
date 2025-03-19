"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedSection = motion.section;
const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};


export default function SignupPage() {
    const [pid, setPid] = useState("");
    const [nameFirst, setNameFirst] = useState("");
    const [nameLast, setNameLast] = useState("");
    const [email, setEmail] = useState("");
    const [school, setSchool] = useState("");
    const [year, setYear] = useState("");
    const [experience, setExperience] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, experience });
        setSubmitted(true);
    };
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white">
            {/* Header */}
            <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50 py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <Image 
                                src="/comp110.png" 
                                alt="COMP 110 Logo" 
                                width={50} 
                                height={50}
                                className="mr-3"
                            />
                            <span className="text-2xl font-bold">HACK 110</span>
                        </div>
                    </Link>
                    <nav>
                        <ul className="flex gap-8">
                            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
                            <li><Link href="/map" className="hover:text-blue-400 transition">Map</Link></li>
                            <li><Link href="/workshops" className="hover:text-blue-400 transition">Workshops</Link></li>
                            <li><Link href="/workshops" className="hover:text-blue-400 transition">Past Projects</Link></li>
                            <li><Link href="/#signup-form" className="text-blue-400 font-bold hover:text-blue-300 transition">Sign Up</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Register Button */}

            <section 
                className="h-screen flex items-center justify-center relative overflow-hidden"
                style={{ paddingTop: "80px" }}
            >
                <div className="container mx-auto px-4 z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-6xl font-bold mb-6">Join Hack 110</h1>
                        <p className="text-xl max-w-2xl mx-auto mb-10">
                            Ready to code, collaborate, and create? Sign up for the most exciting hackathon at UNC!
                        </p>
                        <div className="flex justify-center">
                            <a 
                                href="#signup-form" 
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition"
                            >
                                Register Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-24 bg-black bg-opacity-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
                        >
                            <div className="text-blue-400 text-4xl mb-4">14</div>
                            <h3 className=" text-black text-2xl font-semibold mb-2">Hours of Coding</h3>
                            <p className="text-black">Immerse yourself in a coding marathon where what is taught in class comes to life.</p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
                        >
                            <div className="text-blue-400 text-4xl mb-4">60+</div>
                            <h3 className="text-black text-2xl font-semibold mb-2">Participants</h3>
                            <p className="text-black">Join your classmates to build projects, networks, and friendships</p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
                        >
                            <div className="text-blue-400 text-4xl mb-4">14</div>
                            <h3 className="text-black text-2xl font-semibold mb-2">Workshops</h3>
                            <p className="text-black">Hone your computor science skills with our TA lead workshops</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Signup Form Section */}
            <section id="signup-form" className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white bg-opacity-10 p-10 rounded-xl backdrop-blur-md"
                        >
                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="text-5xl mb-6">🎉</div>
                                    <h2 className="text-3xl font-bold mb-4">Registration Complete!</h2>
                                    <p className="text-black mb-6">Thank you for registering for Hack 110. We'll be in touch soon!</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-black text-3xl font-bold mb-8 text-center">Register for Hack 110</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-6">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                                PID
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                value={pid}
                                                onChange={(e) => setPid(e.target.value)} // fix this
                                                className="w-full p-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                                First Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                value={nameFirst}
                                                onChange={(e) => setNameFirst(e.target.value)}
                                                className="w-full p-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                                Last Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                value={nameLast}
                                                onChange={(e) => setNameLast(e.target.value)}
                                                className="w-full p-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full p-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="experience" className="block mb-2 text-sm font-medium">
                                                Year
                                            </label>
                                            <select
                                                id="experience"
                                                value={year}
                                                onChange={(e) => setYear(e.target.value)}
                                                className="w-full p-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            >
                                                <option value="">What is your year</option>
                                                <option value="freshman">Freshman</option>
                                                <option value="sophmore">Sophmore</option>
                                                <option value="junior">Junior</option>
                                                <option value="senior">Senior</option>
                                            </select>
                                        </div>
                                        
                                        
                                        <div className="mb-6">
                                            <label htmlFor="experience" className="block mb-2 text-sm font-medium">
                                                Programming Experience
                                            </label>
                                            <select
                                                id="experience"
                                                value={experience}
                                                onChange={(e) => setExperience(e.target.value)}
                                                className="w-full p-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            >
                                                <option value="">Select your experience level</option>
                                                <option value="beginner">Beginner (0-1 years)</option>
                                                <option value="intermediate">Intermediate (1-3 years)</option>
                                                <option value="advanced">Advanced (3+ years)</option>
                                            </select>
                                        </div>
                                        
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition"
                                            >
                                                Submit Registration
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 bg-black bg-opacity-70">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <Image 
                                src="/comp110.png" 
                                alt="COMP 110 Logo" 
                                width={40} 
                                height={40}
                                className="inline-block mr-2"
                            />
                            <span className="font-bold">HACK 110</span>
                        </div>
                        <div className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Team 110. All rights reserved.
                        </div>
                        <div className="mt-6 md:mt-0 flex gap-4">
                            <a href="#" className="hover:text-blue-400 transition">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};