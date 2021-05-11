import React, { useEffect, useState } from "react";
import './Ship.css'

function Ship() {





    useEffect(() => {


        let ship = document.querySelector('.ship');
        ship.style.position = 'absolute';
        ship.style.left = 0;
        ship.style.top = 0;
        let moveBy = 10;
        window.addEventListener('keyup', (e) => {
            console.log(e.key)
            switch (e.key) {
                case 'ArrowLeft':
                    ship.style.left = parseInt(ship.style.left) - moveBy + 'px';
                    ship.style.transform = "rotate(0deg)"
                    break;
                case 'ArrowRight':
                    ship.style.left = parseInt(ship.style.left) + moveBy + 'px';
                    ship.style.transform = "rotate(90deg)"
                    break;
                case 'ArrowUp':
                    ship.style.top = parseInt(ship.style.top) - moveBy + 'px';
                    break;
                case 'ArrowDown':
                    ship.style.top = parseInt(ship.style.top) + moveBy + 'px';
                    break;
                default:
                    console.log('test');
            }
        })
    })
    return (
        <div>
            <img className="ship" src="https://media.discordapp.net/attachments/841585178626490379/841619062303227904/ET.png?width=616&height=616" alt="ET" />
        </div>
    )
}
export default Ship;