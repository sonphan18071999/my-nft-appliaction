import React from "react";
import {Character} from "@/models/character";
import styles from "@/styles/features/float-characters.module.scss";
import useFadeAnimation from "@/hooks/useFadeAnimation";

const FloatCharacters = () => {
    const charactersRef = useFadeAnimation({
        direction: "up",
        duration: 1.5,
    });

    const characters: Character[] = [
        {
            name: "Assassin",
            image:
                "https://raw.githubusercontent.com/sonphan18071999/tymex-interview-frontend-sonphan/refs/heads/main/nextjs-landing-page-sonphan/public/assets/images/assassin.svg",
        },
        {
            name: "Neon guy",
            image:
                "https://raw.githubusercontent.com/sonphan18071999/tymex-interview-frontend-sonphan/refs/heads/main/nextjs-landing-page-sonphan/public/assets/images/neon-guy.svg",
        },
        {
            name: "Mafia england",
            image:
                "https://raw.githubusercontent.com/sonphan18071999/tymex-interview-frontend-sonphan/refs/heads/main/nextjs-landing-page-sonphan/public/assets/images/mafia-england.svg",
        },
        {
            name: "Basketball guy",
            image:
                "https://raw.githubusercontent.com/sonphan18071999/tymex-interview-frontend-sonphan/refs/heads/main/nextjs-landing-page-sonphan/public/assets/images/basket-ball.svg",
        },
    ];
    return (
        <>
            <div className={styles.characters} ref={charactersRef}>
                {characters.map((item) => (
                    <div className={styles.character} key={item.name}>
                        <div className={styles.character_image__container}>
                            <img src={item.image} alt="Top character"/>
                        </div>
                        <div>
                            <p className={"my-2 flex justify-center"}>
                                {item.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FloatCharacters;
