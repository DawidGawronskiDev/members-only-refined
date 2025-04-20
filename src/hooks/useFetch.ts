"use client";

import { useCallback, useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const getData = useCallback(async () => {
    setLoading(true);

    await fetch(url)
      .then((blob) => blob.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (!err.message) {
          setError("Failed to fetch data");
        } else {
          setError(err.message);
        }
      });

    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { loading, error, data, refetch: getData };
}
