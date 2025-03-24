"use client";
import React, { createContext, useContext, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { QueryValue } from "@/types";

const QueryParamsContext = createContext<{
  params: Record<string, string>;
  updateParams: (updated: Record<string, QueryValue>) => void;
} | null>(null);

export const QueryParamsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paramsObject = useMemo(() => {
    const obj: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }, [searchParams]);

  const updateParams = useMemo(
    () => (updated: Record<string, QueryValue>) => {
      const newParams = new URLSearchParams(searchParams.toString());
      Object.entries(updated).forEach(([k, v]) => {
        if (v == null || v === "") {
          newParams.delete(k);
        } else {
          newParams.set(k, v);
        }
      });
      router.push(`?${newParams.toString()}`, { scroll: false });
    },
    [searchParams]
  );

  const value = useMemo(
    () => ({ params: paramsObject, updateParams }),
    [paramsObject, updateParams]
  );

  return (
    <QueryParamsContext.Provider value={value}>
      {children}
    </QueryParamsContext.Provider>
  );
};

export const useQueryParamsContext = () => {
  const ctx = useContext(QueryParamsContext);
  if (!ctx) {
    throw new Error("useQueryParams must be used inside <QueryParamsProvider>");
  }
  return ctx;
};
