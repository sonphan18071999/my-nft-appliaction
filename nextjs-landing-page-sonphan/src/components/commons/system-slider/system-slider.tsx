"use client";
import { Slider, Typography } from "antd";
import React from "react";
import styles from "@/styles/common/system-slider.module.scss";
import { SliderRangeProps } from "antd/es/slider";

interface SystemSliderProps {
  start: number;
  end: number;
  onInputChange: (values: number[]) => void;
}

const SystemSlider: React.FC<SystemSliderProps> = ({
  start,
  end,
  onInputChange,
}) => {
  const [selectedValues, setSelectedValues] = React.useState<number[]>([
    start,
    end,
  ]);

  const customTooltip = (value: number | undefined): string => {
    if (value === undefined) return "0";
    const convertETH = ((value / 100) * end).toFixed(0);
    return `${convertETH} ETH`;
  };

  const handleChange: SliderRangeProps["onChange"] = (values: number[]) => {
    const convertedETHs = values.map(
      (item) => +((item / 100) * end).toFixed(0),
    );
    setSelectedValues(values);
    onInputChange(convertedETHs);
  };

  return (
    <div className={styles.system__slider}>
      <Typography className="text-[#89888B] font-semibold uppercase">
        Price
      </Typography>
      <Slider
        range={{ draggableTrack: true }}
        value={selectedValues}
        onChange={handleChange}
        tooltip={{ formatter: customTooltip }}
      />
      <div className={styles.price__range}>
        <Typography className="text-white">{start} ETH</Typography>
        <Typography className="text-white">{end} ETH</Typography>
      </div>
    </div>
  );
};

export default SystemSlider;
