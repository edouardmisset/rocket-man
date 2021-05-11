import React, { useEffect } from "react";
import './Ship.css'

function Ship({ ship, setShip }) {


    const { angle, position } = ship;
    const { x, y } = position;

    function moveShip(e) {
        switch (e.key) {
            //------Lors d'un deplacement a gauche------//
            case 'ArrowLeft':
                setShip({ ...ship, angle: angle - 1 })
                break;
            case 'ArrowRight':
                setShip({ ...ship, angle: angle + 1 })
                break;
            case 'ArrowUp':
                // redefinir position
                setShip({
                    ...ship, position: {
                        x: x + Math.cos(angle),
                        y: y + Math.sin(angle)

                    }
                })
                break;

            default:
                console.log('test');
        }
        let rocket = document.querySelector('.rocket');
        rocket.style.transform = `rotate(${10 * angle}deg)`;
        console.log(x, y)
        rocket.style.top = `${x}px`;
        rocket.style.left = `${y}px`;
    }


    useEffect(() => {
        window.addEventListener('keydown', moveShip)
        return () => {
            window.removeEventListener('keydown', moveShip)
        }

    }, [ship])
    return (
        <div>
            <img className="rocket" src="https://media.discordapp.net/attachments/841585178626490379/841648727763976212/x-wing.png?width=529&height=617" alt="StarWars" />
        </div>
    )
}
export default Ship;