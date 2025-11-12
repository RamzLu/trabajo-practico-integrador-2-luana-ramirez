import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });
  const { data, loading, hasError } = state;
  const getFetch = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("error fetch");
      }
      const data = response.json();
      setState({
        ...state,
        data: data,
        loading: false,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };
  useEffect(() => {
    getFetch();
  }, [url]);
  return {
    data,
    loading,
    hasError,
  };
};
