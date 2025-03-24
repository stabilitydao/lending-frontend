"use client";

import { useQueryParamsContext } from "@/components";

const useQueryParams = () => {
  return useQueryParamsContext();
};

export { useQueryParams };
