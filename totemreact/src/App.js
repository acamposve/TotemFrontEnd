import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { NewTagContextProvider } from "./contexts/NewTagContext";
import "./App.css";
import Chips from "./components/Chips";

const API_BASE_URL = "http://localhost:3000";

const App = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNewsItems, setFilteredNewsItems] = useState([]);

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/news`);
      setNewsItems(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <NewTagContextProvider
      value={{
        newsItems,
        setNewsItems,
        isLoading,
        setLoading,
        fetchNews,
        setSearchQuery,
        searchQuery,
        filteredNewsItems,
        setFilteredNewsItems,
      }}
    >
      <Navbar />
      <Chips />
    </NewTagContextProvider>
  );
};

export default App;
