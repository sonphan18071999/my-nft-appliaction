"use client";
import React from "react";
import styles from "@/styles/pages/home-page.module.scss";
import dynamic from "next/dynamic";
import { Skeleton } from "antd";
import ComponySection from "@/components/features/ComponySection";

const Banner = dynamic(() => import("@/components/features/banner/banner"), {
  ssr: false,
  loading: () => <Skeleton style={{ width: "100%", height: 400 }} />,
});

const MarketPlace = dynamic(
  () => import("@/components/features/market-place/market-place"),
  {
    ssr: false,
    loading: () => (
      <Skeleton
        active
        paragraph={{ rows: 4 }}
        style={{ padding: "20px", height: 400 }}
      />
    ),
  },
);

const HomePage = () => {
  return (
    <div className={styles.homepage__container}>
      <Banner />
      <ComponySection />
      <MarketPlace />
    </div>
  );
};

export default HomePage;
