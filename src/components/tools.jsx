import React from 'react';
import {useSpring, animated} from "react-spring";

const Tools = () => {
    const style = useSpring({opacity: 1, from: {opacity: 0}});
    return (
        <animated.div style={style}>
            {console.log(style)}
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sapiente,
                voluptatibus. Amet dicta in nemo nobis nulla saepe, sed! Ipsam, libero, soluta! Culpa hic minus
                odit quaerat soluta veniam vitae.
            </h1>
        </animated.div>
    );
};

export default Tools;