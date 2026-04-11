import { useEffect, useState, useMemo, useCallback } from "react";

interface AutocompleteProps {
  className: string;
}

const debouncedFn = (func, delay: number = 1000) => {
  let timeoutId = null;
  //console.log("returning debiunced function timeoutid is", timeoutId);
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const Autocomplete = ({ className }: AutocompleteProps) => {
  // useEffect(() => {
  //   fetchUsers();
  //   //console.log("rendered again");
  // }, []);
  //console.log("in Autocomplete --------------");

  const suggestions = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Grape",
    "Grapefruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Papaya",
    "Peach",
    "Pear",
    "Pineapple",
  ];
  // let filteredSuggestions: string[] = [];
  const handleKeyStrokes = (e) => {};
  const [searchText, setSearchText] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const fetchUsers = useCallback(async (user) => {
    if (!user.length) {
      setFilteredSuggestions([]);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${encodeURIComponent(user)}`
      );
      const data = await response.json();
      console.log(
        "responseJson",
        data.items.map((item) => item.login)
      );
      setFilteredSuggestions(data.items.map((item) => item.login));
    } catch (err) {
      setError("Failed to load");
      console.log("in catch error");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("handleKeyDown", e);
    if (!filteredSuggestions.length) {
      return;
    }
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        Math.min(prev + 1, filteredSuggestions.length - 1)
      );
    }
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => Math.max(prev + 1, -1));
    }
    if (e.key === "Enter" && selectedIndex >= 0) {
      selectItem(results[selectedIndex]);
    }
  };

  // const filterSuggestions = useCallback((searchText: string) => {
  //   console.log("searchText", searchText);
  //   const filtered = suggestions.filter((name) =>
  //     name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   console.log("filtered", filtered);
  //   setFilteredSuggestions(filtered);
  // }, []);
  const debouncedFilter = useMemo(
    () => debouncedFn(fetchUsers, 500),
    [fetchUsers]
  );
  //console.log("debouncedFilter", debouncedFilter);

  return (
    <div className={`${className || ""}`}>
      <header>Autocomplete</header>
      <main>
        <form>
          <label htmlFor="searchInput" className="sr-only"></label>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            value={searchText}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => {
              //console.log("inside onchange", e);
              setSearchText(e.target.value);
              debouncedFilter(e.target.value);
            }}
            style={{ border: "2px solid #000" }}
          />
          <span>🔍</span>
        </form>
        {searchText.trim().length > 0 &&
          filteredSuggestions.map((name) => <div key={name}>{name}</div>)}
      </main>
    </div>
  );
};
export default Autocomplete;
