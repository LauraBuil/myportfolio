//import { motion } from 'framer-motion'

type DetailsBallProps = {
    golfBall: string
}

export default function BouncingGolfBall({golfBall}: DetailsBallProps) {
    return (
        <section className="bouncingBall">
            <section className="bouncingBall__container">
                <img
                    src={golfBall}
                    alt="Golf Ball"
                    className="bouncingBall__container__img"
                    // animate={{
                    //     x: ["0%", "100%"],
                    //     rotate: [0, 360] // Rotation complète sur un cycle
                    // }}
                    // transition={{
                    //     x: {
                    //         duration: 2,
                    //         repeat: Infinity,
                    //         repeatType: "reverse",
                    //         ease: "easeInOut",
                    //     },
                    //     rotate: {
                    //         duration: 2,
                    //         repeat: Infinity,
                    //         ease: "linear",
                    //     }
                    // }}
                />
            </section>
        </section>
    );
}
