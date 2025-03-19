"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
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

            {/* About Section */}
            <section className="container mx-auto px-4 py-24 mt-16">
                <h2 className="text-4xl font-bold mb-12 text-center">About Hack 110</h2>
                <div className="space-y-20">
                    {/* Introduction Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-opacity-10 p-8 rounded-lg backdrop-blur-sm relative h-64"
                        >
                            <Image 
                                src="/past_110s/F24-StittersonLobby.png" 
                                alt="COMP 110 Logo" 
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm h-64"
                        >   
                            <h3 className="text-black text-2xl font-bold mb-3">What is Hack 110</h3>
                            <p className="text-black">Hack 110 is an experience created specifically for students currently taking COMP 110 who have <b>no</b> prior experience outside of the class itself. It's a beginner-friendly hackathon designed to introduce new programmers to the world of collaborative coding.</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm h-64"
                        >
                            <h3 className="text-black text-2xl font-bold mb-3">Our Mission</h3>
                            <p className="text-black">Our goal is to build confidence in beginner programmers by providing a supportive environment where they can apply what they've learned, work with peers, and create something meaningful without feeling intimidated.</p>
                        </motion.div>
                    </div>

                    {/* Event Details */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center">The Experience</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                                <h3 className="text-black text-2xl font-bold mb-4">What to Expect</h3>
                                <ul className="text-black space-y-3 list-disc pl-5">
                                    <li>Beginner-friendly workshops</li>
                                    <li>Mentorship from experienced programmers</li>
                                    <li>Collaborative team formation</li>
                                    <li>Fun coding challenges</li>
                                    <li>Prizes and recognition</li>
                                    <li>Free food and swag</li>
                                </ul>
                            </div>
                            <div className="relative h-80 rounded-lg overflow-hidden">
                                <Image 
                                    src="/past_110s/F24-TAJudge.png" 
                                    alt="Students at Hack 110" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Photo Gallery */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="relative h-48 rounded-lg overflow-hidden"
                                >
                                    <Image 
                                        src={`/gallery-${i}.png`} 
                                        alt={`Hack 110 Gallery Image ${i}`} 
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Testimonials */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-white text-3xl font-bold mb-8 text-center">Testimonials</h2>
                        <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    quote: "As someone with zero coding experience before COMP 110, Hack 110 was the perfect way to apply what I learned in a fun, low-pressure environment.",
                                    name: "Emily Chen",
                                    title: "COMP 110 Student, Fall 2022"
                                },
                                {
                                    quote: "I was nervous about participating in a hackathon, but the mentors were incredibly helpful. I learned more in one weekend than I thought possible!",
                                    name: "Marcus Johnson",
                                    title: "COMP 110 Student, Spring 2023"
                                },
                                {
                                    quote: "Hack 110 gave me the confidence to continue pursuing computer science. I never thought I could build a working app after just one intro class.",
                                    name: "Sophia Williams",
                                    title: "COMP 110 Student, Fall 2023"
                                }
                            ].map((testimonial, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                                >
                                    <div className="text-blue-300 text-4xl mb-2">"</div>
                                    <p className="mb-4 italic">{testimonial.quote}</p>
                                    <div className="mt-auto">
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-sm text-blue-300">{testimonial.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white bg-opacity-5 p-8 rounded-lg backdrop-blur-sm"
                    >
                        <h2 className="text-black text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6 text-black">
                            {[
                                {
                                    q: "Do I need any previous coding experience?",
                                    a: "No! Hack 110 is designed specifically for students currently taking COMP 110. If you can complete the class assignments, you're ready for Hack 110."
                                },
                                {
                                    q: "Do I need to come with a team or project idea?",
                                    a: "Not at all. We'll help form teams on the first day and have plenty of project ideas."
                                },
                                {
                                    q: "What should I bring?",
                                    a: "Just your laptop, charger, and enthusiasm! We'll provide food, drinks, and all the support you need."
                                }
                            ].map((faq, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                                    <p>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
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
