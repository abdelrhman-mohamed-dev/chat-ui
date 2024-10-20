import "./glowingDiv.css"
import GlowingMovingDiv from "../ui/GlowingMoving";

const glowingDivsData = [
    {
        className: "glowing-div-1",
        translateX: ["0%", "-90%", "0%", "0%"],
        translateY: ["0%", "-50%", "0%", "0%"],
    },
    {
        className: "glowing-div-2",
        translateX: ["0%", "-90%", "0%", "0%"],
        translateY: ["0%", "-50%", "0%", "0%"],
    },
    {
        className: "glowing-div-3",
        translateX: ["0%", "100%", "0%", "0%"],
        translateY: ["0%", "-40%", "0%", "0%"],
    },
    {
        className: "glowing-div-4",
        translateX: [0, -500, 0, 0],
        translateY: [0, 50, 0, 0],
    },
    {
        className: "glowing-div-5",
        translateX: [0, -500, 0, 0],
        translateY: [0, 50, 0, 0],
    },
];


const GlowingDiv = () => {
    return (
        <>
            {glowingDivsData.map((div, index) => (
                <GlowingMovingDiv
                    key={index}
                    className={div.className}
                    translateX={div.translateX}
                    translateY={div.translateY}
                />
            ))}
        </>
    )
}

export default GlowingDiv