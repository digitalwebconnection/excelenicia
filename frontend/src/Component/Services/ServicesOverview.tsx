

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    UserCheck, Map, FileText, GraduationCap, Users,
    Wallet, Briefcase, Globe, Search, PlaneTakeoff, User
} from "lucide-react";
import "./process.css"; // Import the external CSS

interface Step {
    id: string;
    title: string;
    icon: React.ReactNode;
    color: string;
}

interface Point {
    x: number;
    y: number;
}

const STEPS: Step[] = [
    { id: "01", title: "Profile Evaluation", icon: <UserCheck size={18} />, color: "#c1972d" },
    { id: "02", title: "Country, Course, University shortlisting", icon: <Map size={18} />, color: "#260466" },
    { id: "03", title: "Documentation", icon: <FileText size={18} />, color: "#c1972d" },
    { id: "04", title: "Admission Assistance", icon: <GraduationCap size={18} />, color: "#260466" },
    { id: "05", title: "Interview Preparation", icon: <Users size={18} />, color: "#c1972d" },
    { id: "06", title: "Finance Support", icon: <Wallet size={18} />, color: "#260466" },
    { id: "07", title: "Career Guidance", icon: <Briefcase size={18} />, color: "#c1972d" },
    { id: "08", title: "Student Visa Assistance", icon: <Globe size={18} />, color: "#260466" },
    { id: "09", title: "Visitor Visa Assistance", icon: <Search size={18} />, color: "#c1972d" },
    { id: "10", title: "Pre- and Post-Arrival Services", icon: <PlaneTakeoff size={18} />, color: "#260466" },
];

const ROAD_PATH = "M 0 55 C 9 85 15 95 20 85 S 10 40 25 45 S 55 75 55 55 S 60 15 80 35 S 22 65 255 100 ";

const getPosition = (index: number): Point => {
    // Added coordinates for all 10 steps to prevent crashes
    const coords: Point[] = [
        { x: 1.5, y: 55 },   // 01
        { x: 18, y: 89 },  // 02
        { x: 18, y: 52 },  // 03
        { x: 28, y: 44 },  // 04
        { x: 40, y: 58 },  // 05
        { x: 55, y: 62 },  // 06
        { x: 60, y: 26 },  // 07
        { x: 80, y: 30 },  // 08
        { x: 82, y: 45 },  // 09
        { x: 90, y: 67 },  // 10
    ];
    return coords[index] || coords[0];
};

export default function Roadmap() {
    const [current, setCurrent] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        let timeout: any;

        const runStep = (index: number) => {
            setCurrent(index); // student moves

            // ⏳ delay BEFORE showing card (touch effect)
            timeout = setTimeout(() => {
                setActiveStep(index); // show card after 0.5s

                // if last step
                if (index === STEPS.length - 1) {

                    setTimeout(() => {
                        setIsFinished(true); // plane

                        setTimeout(() => {
                            setIsFinished(false);
                            setActiveStep(0);
                            runStep(0); // restart
                        }, 3000);

                    }, 1000);

                    return;
                }

                // move next step
                timeout = setTimeout(() => {
                    runStep(index + 1);
                }, 2000);

            }, 500); // 👈 0.5s delay (IMPORTANT)

        };

        runStep(0);

        return () => clearTimeout(timeout);
    }, []);
    const studentPos = getPosition(current);

    return (
        <section className="roadmap-section py-20 px-10 lg:px-0 md:py-10">
            <div className="roadmap-container-main ">

                <div className="roadmap-header">
                    <h3 className="text-3xl md:text-5xl font-serif font-extrabold text-center text-[#c1972d]">Our <span className="text-blue-950">Services</span></h3>
                    <span className="text-blue-950 text-lg">Follow the path to your global career</span>
                </div>

                <div className="roadmap-visual-area">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="road-svg-element">

                        <defs>
                            <filter id="roadShadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow
                                    dx="0"
                                    dy="4"
                                    stdDeviation="6"
                                    floodColor="#000000"
                                    floodOpacity="0.4"
                                />
                            </filter>
                        </defs>

                        <path
                            d={ROAD_PATH}
                            className="road-path-bg"
                            stroke="#374151"
                            strokeWidth="35"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#roadShadow)"   // 👈 APPLY SHADOW HERE
                        />

                        <path
                            d={ROAD_PATH}
                            className="road-path-dashed"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray="12 10"
                            strokeLinecap="round"
                        />
                    </svg>
                    {/* STUDENT ICON */}
                    <motion.div
                        className="student-mover"
                        animate={{ left: `${studentPos.x}%`, top: `${studentPos.y}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="student-icon-box">
                            <motion.div
                                className="student-circle"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 0.6 }}
                            >
                                <User size={24} fill="currentColor" />
                            </motion.div>
                            <div className="student-shadow" />
                        </div>
                    </motion.div>

                    {/* STEPS */}
                    {STEPS.map((step, index) => {
                        const pos = getPosition(index);
                        const isActive = activeStep === index;
                        const isCompleted = current >= index;
                        // logic for card placement
                        const isTop = [0, 2, 5, 8].includes(index);

                        return (
                            <div
                                key={step.id}
                                className={`step-node ${isActive ? 'active' : ''}`}
                                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}

                            >
                                <div
                                    className="step-pin"
                                    style={{ backgroundColor: isCompleted ? step.color : "#94a3b8" }}
                                >
                                    <span className="step-id-text">{step.id}</span>
                                </div>

                                <motion.div
                                    className={`step-card -ms-13 md:-ms-4 h-18 md:h-auto ${isTop ? 'pos-bottom' : 'pos-top'}`}
                                    style={{ borderLeftColor: step.color }}
                                    transition={{ duration: 2.2, ease: "easeOut" }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        scale: isActive ? 1 : 0.8,
                                        y: isActive ? 0 : (isTop ? 10 : -10)
                                    }}
                                >
                                    <div className="card-header">
                                        <div className="card-icon" style={{ color: step.color }}>{step.icon}</div>

                                    </div>
                                    <h3 className="card-title">{step.title}</h3>
                                </motion.div>
                            </div>
                        );
                    })}

                    {/* FINAL PLANE */}
                    <AnimatePresence>
                        {isFinished && (
                            <motion.div
                                className="takeoff-container"
                                initial={{ left: "5%", top: "40%", rotate: 0, opacity: 0 }}
                                animate={{ left: "115%", top: "-10%", rotate: -25, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 3, ease: "easeIn" }}
                            >
                                <PlaneTakeoff size={84} />
                                <div className="plane-trail" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}