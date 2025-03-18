"use client";
import React, { Fragment } from "react";
import styles from "@/styles/banner.module.scss";
import FloatCharacters from "@/components/commons/float-character/float-character";
import useFadeAnimation from "@/hooks/useFadeAnimation";

const Banner = () => {
  const textBlockNewRef = useFadeAnimation({
    direction: "right",
    duration: 1.5,
  });
  const highLightCharacterRef = useFadeAnimation({
    direction: "up",
    duration: 1.5,
  });

  const textBlockArrivalRef = useFadeAnimation({
    direction: "left",
    duration: 1.5,
  });

  return (
    <>
      <section className={styles.banner__container}>
        <section className={styles.footer__background}></section>
        <section className={styles.banner__contents}>
          <section className={styles.textBlock}>
            <div className={styles.textBlock__new} ref={textBlockNewRef}>
              <img
                src={
                  "https://raw.githubusercontent.com/sonphan18071999/tymex-interview-frontend-sonphan/refs/heads/main/nextjs-landing-page-sonphan/public/assets/images/new__tag.svg"
                }
                alt={"New text"}
                width={"100%"}
                height={"auto"}
                className={styles.textBlock__newTag__image}
              />
            </div>
            <div
              className={styles.textBlock__arrival}
              ref={textBlockArrivalRef}
            />
            <div
              className={styles.highlight__character}
              ref={highLightCharacterRef}
            />
            <FloatCharacters />
          </section>
        </section>
      </section>
    </>
  );
};

export default Banner;
