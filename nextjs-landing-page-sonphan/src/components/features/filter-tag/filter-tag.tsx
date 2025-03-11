"use client";
import React from "react";
import { Button, Typography } from "antd";
import styles from "@/styles/features/filter-tag.module.scss";
import { IFilterTag } from "@/models/filter-form";
import { useSearchStore } from "@/hooks/useSearchStore";

const FilterTag: React.FC = () => {
  const { searchByTag, setActiveTag, activeTag } = useSearchStore();
  const tagConfigs: IFilterTag[] = [
    { name: "All" },
    { name: "Upper Body" },
    { name: "Lower Body" },
    { name: "Hat" },
    { name: "Shoes" },
    { name: "Accessory" },
    { name: "Legendary" },
    { name: "Mythic" },
    { name: "Epic" },
    { name: "Rare" },
  ];

  return (
    <div className={styles.filter__tag}>
      {tagConfigs.map((item) => (
        <Button
          className={`secondary-btn ${activeTag === item.name ? "secondary-active-btn" : ""}`}
          key={item.name}
          onClick={() => {
            setActiveTag(item.name);
            searchByTag();
          }}
        >
          <Typography className={"text-white"}>{item.name}</Typography>
        </Button>
      ))}

      <Button className={"secondary-btn"}>
        <Typography className={"text-white"}>^</Typography>
      </Button>
    </div>
  );
};

export default FilterTag;
