"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "Popular", value: "popular" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recommended", value: "recommended" },
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  const handleClick = (filter: string) => {
    let newUrl = "";
    if (filter === active) {
      setActive("");
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter,
      });
    }
    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            active === filter.value
              ? "dark:bg-gray-800 dark:text-gray-50 font-extrabold bg-white text-orange-600 hover:bg-white border-1"
              : "dark:bg-gray-800 dark:text-gray-400 bg-white text-orange-600 hover:bg-white border-1",
            "shadow-none text-sm px-3 py-0.5 rounded-lg capitalize"
          )}
          onClick={() => handleClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
