"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  route: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({ route, placeholder, otherClasses }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebouncdFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebouncdFn);
  }, [searchQuery, router, searchParams, route, pathname]);

  return (
    <Input
      type="search"
      placeholder={placeholder}
      className={`px-5 py-5 bg-yellow-50 dark:bg-gray-800 dark:ring-0 focus:border-0 outline-none focus:ring-0 focus:outline-none ring-0 
      ${otherClasses}`}
      value={searchQuery}
      autoComplete="off"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default LocalSearch;
