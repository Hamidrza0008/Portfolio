import React, { useEffect, useState, useRef } from "react";

export default function TypeWriter({ text, speed = 100 }) {
    const [displayText, setDisplayText] = useState("");
    const index = useRef(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        setDisplayText(""); 
        index.current = 0;

        const type = () => {
            if (index.current < text.length) {
                // Add current char
                setDisplayText(text.slice(0, index.current + 1));
                index.current++;

                timeoutRef.current = setTimeout(type, speed);
            }
        };

        type();

        return () => clearTimeout(timeoutRef.current);
    }, [text, speed]);

    return (
        <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold">
            {displayText}
            <span className="cursor text-white">|</span>
        </span>
    );
}
