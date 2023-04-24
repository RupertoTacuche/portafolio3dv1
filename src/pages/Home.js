import { useState } from "react"
import { Pannellum } from "pannellum-react";

import industrial from '../images/interior_views_industrial_robots.jpg'
import manufacturing from '../images/interior_views_manufacturing_robots.jpg'

const Home = () => {
    const [currentScene, setCurrentScene]= useState(industrial)
    return (
        <>
            <div className="h-screen flex">
                <Pannellum
                    width="100%"
                    height="100%"
                    image={currentScene}
                    yaw={300}
                    hfov={110}
                    autoLoad
                    autoRotate={-5}
                    compass={true}
                    showZoomCtrl={false}
                    mouseZoom={false}
                    onLoad={() => {
                        console.log("panorama loaded");
                    }}
                >
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-10}
                        yaw={-120}
                        handleClick={(evt, name) =>
                            setCurrentScene(currentScene !== industrial ? industrial : manufacturing)
                        }
                    />
                </Pannellum>

            </div>
        </>
    )
}
export default Home