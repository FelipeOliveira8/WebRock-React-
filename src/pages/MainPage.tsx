import { useEffect, useState } from "react";
import logo from '../assets/webRockLogo.png';
import git from '../assets/githublogo.png';
import './MainPage.css';

function MainPage() {
    const [cont, setCont] = useState(0);

    useEffect(() => {
        const sliderBox = document.querySelector<HTMLElement>(".container");
        const images = document.querySelectorAll<HTMLImageElement>(".container img");

        if (!sliderBox || images.length === 0) return;

        const interval = setInterval(() => {
            setCont((prev) => {
                const newIndex = (prev + 1) % images.length;
                
                const sliderWidth = sliderBox.clientWidth
                sliderBox.style.transform = `translateX(${-newIndex * sliderWidth}px)`;

                return newIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <section className='sectionMainPage'>
                <div className="slider">
                <div className="overlay">WebRock</div>
                    <div className="container">
                        <img src="/imagesSLIDER/image1.jpg" alt="" />
                        <img src="/imagesSLIDER/image2.jpg" alt="" />
                        <img src="/imagesSLIDER/image3.jpg" alt="" />
                        <img src="/imagesSLIDER/image4.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="aboutUs">
                <div>
                    <h1>QUEM SOMOS?</h1>
                    <p>Somos um site dedicado a você, fã do Rock Nacional! Aqui, oferecemos informações completas sobre as melhores bandas do Brasil, trazendo tudo o que você precisa saber sobre o universo do rock brasileiro. Fique por dentro das novidades, histórias e destaques das principais bandas do país.</p>
                    
                </div>
                <img src={logo} alt="Logo" />
            </section>
            <footer>
                <p>
                    Este site não tem intuito lucrativo, sendo apenas uma demonstração ilustrativa. 
                    O objetivo é testar as aplicações de desenvolvimento utilizando React.js.
                </p>
                <div>
                    <p>Desenvolvido por <b>Felipe Oliveira</b></p>
                    <a href="https://github.com/FelipeOliveira8" target="_blank" rel="noopener noreferrer">
                        <img src={git} alt="GitHub logo"/>
                        <p>FelipeOliveira8</p>
                    </a>

                </div>
            </footer>
        </>
    )
}

export default MainPage;