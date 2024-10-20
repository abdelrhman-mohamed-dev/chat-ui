import MovingStar from "../ui/MovingStar.jsx";
import "./starsDiv.css";

const starsData = [
    {
        src: "/imgs/star1.svg",
        className: "star-1",
        xMovement: [-20, 20, -20],
        yMovement: [-40, 40, -40],
    },
    {
        src: "/imgs/star2.svg",
        className: "star-2",
        xMovement: [-20, 20, -20],
        yMovement: [-20, 20, -20],
        width: "40px",
    },
    {
        src: "/imgs/star3.svg",
        className: "star-3",
        xMovement: [20, -20, 20],
        yMovement: [-20, 20, -20],
    },
    {
        src: "/imgs/star4.svg",
        className: "star-4",
        xMovement: [20, -20, 20],
        yMovement: [-40, 40, -40],
    },
    {
        src: "/imgs/star5.svg",
        className: "star-5",
        xMovement: [50, -90, 50],
        yMovement: [-20, 20, -20],
    },
    {
        src: "/imgs/star6.svg",
        className: "star-6",
        xMovement: [-30, 20, -30],
    },
];

const StarsDiv = () => {
    return (
        <>
            {starsData.map((star, index) => (
                <MovingStar
                    key={index}
                    src={star.src}
                    className={star.className}
                    xMovement={star.xMovement}
                    yMovement={star.yMovement}
                    width={star.width}
                />
            ))}
        </>
    );
};

export default StarsDiv;
