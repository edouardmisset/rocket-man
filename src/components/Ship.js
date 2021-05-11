import React, { useEffect } from "react";
import './Ship.css'

function Ship() {





    useEffect(() => {


        let ship = document.querySelector('.ship');
        let angle = null
        ship.style.position = 'absolute';
        ship.style.left = 0;
        ship.style.top = 0;
        let moveBy = 10;
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                //------Lors d'un deplacement a gauche------//
                case 'ArrowLeft':
                    ship.style.left = parseInt(ship.style.left) - moveBy + 'px';
                    ship.style.transform = "rotate(-90deg)"
                    break;
                case 'ArrowRight':
                    ship.style.left = parseInt(ship.style.left) + moveBy + 'px';
                    ship.style.transform = "rotate(90deg)"
                    break;
                case 'ArrowUp':
                    ship.style.top = parseInt(ship.style.top) - moveBy + 'px';
                    ship.style.transform = "rotate(360deg)"
                    break;
                case 'ArrowDown':
                    ship.style.top = parseInt(ship.style.top) + moveBy + 'px';
                    ship.style.transform = "rotate(180deg)"
                    break;
                default:
                    console.log('test');
            }
        })


    })
    return (
        <div>
            <img className="ship" src="https://media.discordapp.net/attachments/841585178626490379/841648727763976212/x-wing.png?width=529&height=617" alt="StarWars" />
        </div>
    )
}
export default Ship;