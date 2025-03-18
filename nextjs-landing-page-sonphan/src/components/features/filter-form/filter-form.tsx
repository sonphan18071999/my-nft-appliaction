"use client";
import { Input, Typography } from "antd";
import SystemSelect from "@/components/commons/system-select/system-select";
import React, { useCallback, useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import styles from "@/styles/features/filter-form.module.scss";
import SystemSlider from "@/components/commons/system-slider/system-slider";
import { FilterFormFields, FilterType } from "@/models/filter-form";
import useDebounce from "@/hooks/useDebounce";
import { useSearchStore } from "@/hooks/useSearchStore";

interface CustomSelectProps {
  label: string;
  options: { value: string; label: string }[];
  handleSelect: (value: string) => void;
  defaultValue?: string;
}

const FilterForm: React.FC = () => {
  const [filters, setFilters] = useState<FilterFormFields>({
    tier: undefined,
    theme: undefined,
    time: undefined,
    price: undefined,
  });

  const {
    searchByMultipleFields,
    searchByInput,
    setInputSearch,
    setMultipleFieldsFilter,
    loading,
    currentFilterActive,
  } = useSearchStore();

  const [searchText, setSearchText] = useState<string | undefined>("");
  const debouncedSearchText = useDebounce(searchText, 500);

  const handleSelect = (
    key: keyof typeof filters,
    value: string | number[],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const selectConfigs: CustomSelectProps[] = [
    {
      label: "Tier",
      options: [
        { value: "Basic", label: "Basic" },
        { value: "Premium", label: "Premium" },
        { value: "Deluxe", label: "Deluxe" },
      ],
      handleSelect: (value: string) => handleSelect("tier", value),
      defaultValue: filters.tier,
    },
    {
      label: "Theme",
      options: [
        { value: "Dark", label: "Dark" },
        { value: "Light", label: "Light" },
        { value: "Colorful", label: "Colorful" },
        { value: "Halloween", label: "Halloween" },
      ],
      handleSelect: (value: string) => handleSelect("theme", value),
      defaultValue: filters.theme,
    },
    {
      label: "Time",
      options: [
        { value: "latest", label: "Latest" },
        { value: "oldest", label: "Oldest" },
      ],
      handleSelect: (value: string) => handleSelect("time", value),
      defaultValue: filters.time,
    },
  ];

  const handleSearch = useCallback(() => {
    setInputSearch(debouncedSearchText);
    searchByInput();
  }, [debouncedSearchText]);

  const handleSliderValueChange = (values: number[]) => {
    handleSelect("price", values);
  };

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <>
      <div className={styles.filter__form}>
        <div className={styles.search__container}>
          <Input
            id="quick-search"
            placeholder="Quick search"
            prefix={<SearchOutlined className={styles.search__icon} />}
            className={styles.search__input}
            aria-label="Quick search"
            onChange={($event) => setSearchText($event.target.value)}
          />
        </div>
        <SystemSlider
          start={0.01}
          end={200}
          onInputChange={handleSliderValueChange}
        />
        {selectConfigs.map((config) => (
          <SystemSelect
            label={config.label}
            options={config.options}
            handleSelect={config.handleSelect}
            key={config.label}
            defaultValue={config.defaultValue}
          />
        ))}
        <div className={styles.action__buttons}>
          <button
            className="flex items-center gap-2 text-white"
            onClick={() => setFilters({})}
          >
            <img
              src="/assets/icons/reset-filter.svg"
              alt="reset icon"
              width={20}
              height={20}
            />
            <Typography className="text-white">Reset filter</Typography>
          </button>

          <button
            className="primary-btn px-10"
            onClick={() => {
              setMultipleFieldsFilter(filters);
              searchByMultipleFields();
            }}
            disabled={loading && currentFilterActive === FilterType.FILTER_FORM}
          >
            <Typography className="text-white">
              {loading && currentFilterActive === FilterType.FILTER_FORM
                ? "Searching..."
                : "Search"}
            </Typography>
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterForm;
