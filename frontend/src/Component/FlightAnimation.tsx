import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullPageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Generate 25 dots for a smoother, longer trail
    const dots = Array.from({ length: 25 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader-screen"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#c1972d]"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                            className="relative w-64 h-64 flex items-center justify-center"
                        >
                            {/* The Trail of Dots - Mimicking the second image */}
                            {dots.map((_, i) => {
                                // Rotates each dot backwards from the plane
                                const rotation = i * 10;
                                // Rapidly scale down and fade out
                                const scale = Math.max(0.2, 1 - i * 0.04);
                                const opacity = Math.max(0.1, 1 - i * 0.05);

                                return (
                                    <>
                                        <div
                                            key={i}
                                            className="absolute inset-0"
                                            style={{ transform: `rotate(-${rotation}deg)` }}
                                        >
                                            <div
                                                className="absolute -ms-8 top-0 left-1/2 -translate-x-1/2 rounded-full bg-white"
                                                style={{
                                                    width: i === 0 ? '12px' : '10px', // Lead dot is slightly larger
                                                    height: i === 0 ? '12px' : '10px',
                                                    transform: `scale(${scale})`,
                                                    opacity: opacity
                                                }}
                                            />
                                        </div>

                                    </>
                                );
                            })}

                            {/* Modern Plane Icon aligned to the trail */}
                            <div className="absolute top-3  left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div style={{ transform: 'rotate(105deg)' }}>
                                    <svg
                                        width="50"
                                        height="50"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                    >
                                        <path d="M21,16L21,14L13,9L13,3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5L10,9L2,14L2,16L10,13.5L10,19L8,20.5L8,22L11.5,21L15,22L15,20.5L13,19L13,13.5L21,16Z" />
                                    </svg>
                                </div>
                            </div>


                        </motion.div>
                        <div className=" text-blue-950 text-4xl text-center md:text-6xl  font-serif mt-5 font-bold">
                            Welcome to Excelencia international
                        </div>
                    </motion.div>

                ) : (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="block"
                    >
                        {/* Your website content goes here */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FullPageLoader;