"use client";

import{useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";


interface Session {
    id: number;
    name: string;
    tutor: string;
    location: string;
    time: string;
    description: string;
    tags: string[];
    imagePath: string;
}
export const sessions: Session[] = [
    {
        id: 1,
        name: "Calculus I Review Session",
        tutor: "John Smith",
        location: "Patrick F. Taylor Hall 2205",
        time: "Mon, 9:00 AM - 10:30 AM",
        description: "Comprehensive review of limits, derivatives, and optimization problems.",
        tags: ["Math", "Review", "Freshman"],
        imagePath: "/images/calculus.jpg",
    },
    {
        id: 2,
        name: "Physics I Fundamentals",
        tutor: "Emily Chen",
        location: "Nicholson Hall 110",
        time: "Mon, 11:00 AM - 12:30 PM",
        description: "Learn kinematics and Newton's laws with hands-on examples.",
        tags: ["Physics", "STEM", "Exam Prep"],
        imagePath: "/images/physics.jpg",
    },
    {
        id: 3,
        name: "Intro to Programming in Python",
        tutor: "David Jones",
        location: "CEBA Room 1015",
        time: "Mon, 2:00 PM - 3:30 PM",
        description: "Hands-on introduction to loops, functions, and basic data structures.",
        tags: ["Computer Science", "Coding", "Beginner"],
        imagePath: "/images/python.jpg",
    },
    {
        id: 4,
        name: "Organic Chemistry I Study Group",
        tutor: "Sarah Lee",
        location: "Chemistry Building 312",
        time: "Mon, 4:00 PM - 5:30 PM",
        description: "Focus on reaction mechanisms, stereochemistry, and lab concepts.",
        tags: ["Chemistry", "Lab Prep", "Group"],
        imagePath: "/images/chemistry.jpg",
    },
    {
        id: 5,
        name: "English Composition Workshop",
        tutor: "Michael Thompson",
        location: "Library Room 108",
        time: "Mon, 6:00 PM - 7:15 PM",
        description: "Improve your writing, thesis structure, and essay organization.",
        tags: ["English", "Writing", "Workshop"],
        imagePath: "/images/english.jpg",
    },
    {
        id: 6,
        name: "Linear Algebra Help Session",
        tutor: "Rachel Adams",
        location: "Taylor Hall 1203",
        time: "Tue, 9:00 AM - 10:30 AM",
        description: "Covers vector spaces, linear transformations, and matrices.",
        tags: ["Math", "Linear Algebra", "Sophomore"],
        imagePath: "/images/math.jpg",
    },
    {
        id: 7,
        name: "Data Structures in Java",
        tutor: "Jacob Wilson",
        location: "CEBA Room 203",
        time: "Tue, 11:00 AM - 12:30 PM",
        description: "Introduction to arrays, lists, stacks, queues, and trees.",
        tags: ["Computer Science", "Java", "Coding"],
        imagePath: "/images/java.jpg",
    },
    {
        id: 8,
        name: "Microeconomics Principles",
        tutor: "Anna Martinez",
        location: "Business Education Complex 201",
        time: "Tue, 1:00 PM - 2:30 PM",
        description: "Covers supply and demand, market equilibrium, and consumer theory.",
        tags: ["Economics", "Business", "Undergrad"],
        imagePath: "/images/economics.jpg",
    },
    {
        id: 9,
        name: "Chemistry 1202 Lab Prep",
        tutor: "Kevin Brown",
        location: "Chemistry Building 220",
        time: "Tue, 3:00 PM - 4:30 PM",
        description: "Prepare for titration and acid-base equilibrium experiments.",
        tags: ["Chemistry", "Lab", "Prep"],
        imagePath: "/images/chemistry.jpg",
    },
    {
        id: 10,
        name: "World History Discussion Group",
        tutor: "Olivia Garcia",
        location: "Howe-Russell Hall 105",
        time: "Tue, 5:00 PM - 6:30 PM",
        description: "Explore key historical events from the Renaissance to modern times.",
        tags: ["History", "Discussion", "Humanities"],
        imagePath: "/images/history.jpg",
    },
    {
        id: 11,
        name: "Calculus II Practice",
        tutor: "Noah Patel",
        location: "Taylor Hall 202",
        time: "Wed, 9:00 AM - 10:30 AM",
        description: "Integral techniques, sequences, and series practice problems.",
        tags: ["Math", "Calculus", "Advanced"],
        imagePath: "/images/calculus2.jpg",
    },
    {
        id: 12,
        name: "Statistics for Engineers",
        tutor: "Liam Wright",
        location: "Patrick F. Taylor Hall 103",
        time: "Wed, 11:00 AM - 12:30 PM",
        description: "Learn probability distributions, confidence intervals, and regression.",
        tags: ["Engineering", "Statistics", "Data"],
        imagePath: "/images/stats.jpg",
    },
    {
        id: 13,
        name: "Intro to Machine Learning",
        tutor: "Sophia Nguyen",
        location: "CEBA Room 205",
        time: "Wed, 1:00 PM - 2:30 PM",
        description: "Cover supervised learning, classification, and linear regression basics.",
        tags: ["AI", "Machine Learning", "Coding"],
        imagePath: "/images/ai.jpg",
    },
    {
        id: 14,
        name: "Creative Writing Workshop",
        tutor: "James Anderson",
        location: "Library Room 204",
        time: "Wed, 3:00 PM - 4:30 PM",
        description: "Develop short stories, character arcs, and narrative structure.",
        tags: ["Writing", "Creative", "Workshop"],
        imagePath: "/images/writing.jpg",
    },
    {
        id: 15,
        name: "Macroeconomics Review",
        tutor: "Ethan Moore",
        location: "Business Education Complex 109",
        time: "Wed, 5:00 PM - 6:30 PM",
        description: "GDP, inflation, unemployment, and monetary policy overview.",
        tags: ["Economics", "Finance", "Review"],
        imagePath: "/images/economics2.jpg",
    },
    {
        id: 16,
        name: "Thermodynamics Tutoring",
        tutor: "Maya Carter",
        location: "Patrick F. Taylor Hall 321",
        time: "Thu, 9:00 AM - 10:30 AM",
        description: "Understand laws of thermodynamics and energy transformations.",
        tags: ["Physics", "Engineering", "Advanced"],
        imagePath: "/images/thermo.jpg",
    },
    {
        id: 17,
        name: "Digital Logic Design Help",
        tutor: "Ryan Davis",
        location: "CEBA Room 301",
        time: "Thu, 11:00 AM - 12:30 PM",
        description: "Covers Boolean algebra, K-maps, and sequential circuit analysis.",
        tags: ["Computer Engineering", "Hardware", "Logic"],
        imagePath: "/images/digital.jpg",
    },
    {
        id: 18,
        name: "Public Speaking Practice",
        tutor: "Grace Walker",
        location: "Coates Hall 110",
        time: "Thu, 1:00 PM - 2:30 PM",
        description: "Improve confidence and delivery through mock presentations.",
        tags: ["Communication", "Speech", "Soft Skills"],
        imagePath: "/images/speech.jpg",
    },
    {
        id: 19,
        name: "Database Systems Study Group",
        tutor: "Aaron Perez",
        location: "CEBA Room 210",
        time: "Thu, 3:00 PM - 4:30 PM",
        description: "Learn SQL queries, schema design, and relational models.",
        tags: ["Computer Science", "Database", "SQL"],
        imagePath: "/images/database.jpg",
    },
    {
        id: 20,
        name: "Business Law Q&A Session",
        tutor: "Isabella Rivera",
        location: "Business Complex 310",
        time: "Thu, 5:00 PM - 6:00 PM",
        description: "Case studies on contracts, torts, and business ethics.",
        tags: ["Business", "Law", "Ethics"],
        imagePath: "/images/law.jpg",
    },
    {
        id: 21,
        name: "Accounting Principles Workshop",
        tutor: "Mason Scott",
        location: "Business Education Complex 120",
        time: "Fri, 9:00 AM - 10:30 AM",
        description: "Balance sheets, income statements, and financial analysis.",
        tags: ["Accounting", "Finance", "Numbers"],
        imagePath: "/images/accounting.jpg",
    },
    {
        id: 22,
        name: "Differential Equations Study Hall",
        tutor: "Ella Morgan",
        location: "Taylor Hall 215",
        time: "Fri, 11:00 AM - 12:30 PM",
        description: "Solve linear ODEs, Laplace transforms, and modeling problems.",
        tags: ["Math", "Engineering", "Advanced"],
        imagePath: "/images/diffeq.jpg",
    },
    {
        id: 23,
        name: "Psychology 2000 Discussion",
        tutor: "Benjamin Hughes",
        location: "Howe-Russell Hall 210",
        time: "Fri, 1:00 PM - 2:30 PM",
        description: "Explore cognitive psychology, learning, and memory.",
        tags: ["Psychology", "Human Behavior", "Discussion"],
        imagePath: "/images/psych.jpg",
    },
    {
        id: 24,
        name: "Environmental Science Lab Help",
        tutor: "Chloe Baker",
        location: "Energy Coast Building 105",
        time: "Fri, 3:00 PM - 4:30 PM",
        description: "Data interpretation, lab reports, and climate systems overview.",
        tags: ["Science", "Environment", "Lab"],
        imagePath: "/images/env.jpg",
    },
    {
        id: 25,
        name: "Art History Review",
        tutor: "Lucas Gray",
        location: "Design Building 102",
        time: "Fri, 5:00 PM - 6:30 PM",
        description: "Study Renaissance, Baroque, and Impressionist art movements.",
        tags: ["Art", "History", "Visuals"],
        imagePath: "/images/art.jpg",
    },

];


export default function SessionTab(){
    const[expandedId, setExpandedId] = useState<number | null>(null);

    return(
        <div className="max-h-[80vh] overflow-y-auto p-4 space-y-4">
            {sessions.map((session) => {
                const isExpanded = expandedId == session.id;
                return(
                    <div key= {session.id}
                         className="bg-amber-100 border rounded-xl shadow-sm hover:shadow-md transition shadow duration-200 cursor-pointer"
                         onClick={()=>
                        setExpandedId(isExpanded ? null: session.id)
                    }>
                        <div className="flex justify-between items-center px-5 py-4">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {session.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {session.tutor} · {session.time} · {session.location}
                                </p>
                            </div>
                            {isExpanded ? (
                                <ChevronUp className="text-gray-400" />
                            ) : (
                                <ChevronDown className="text-gray-400" />
                            )}
                        </div>

                        {/* Expanded details */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                isExpanded ? "max-h-40 p-4" : "max-h-0 p-0"
                            }`}
                        >
                            <div className="flex flex-wrap gap-2 mb-3">
                                {session.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-700 text-xl font-extrabold px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                      </span>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm">{session.description}</p>


                            <div className="flex justify-center gap-4 mt-3">
                                <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 shadow-sm">
                                    Favorite
                                </button>
                                <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 shadow-sm">
                                    Schedule
                                </button>
                            </div>
                        </div>















                    </div>
                )
                }
            )}
        </div>
    )
}