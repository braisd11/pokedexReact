import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./items.module.css";
import { Item } from "../types/types";
import Header from "../components/Header";
import { waitFor } from "../utils/utils";
import { fetchItems } from "../api/fetchItems";
import { LoadingScreen } from "../components/LoadingScreen";

const Items = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Item[]>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAllItems = async () => {
      setIsLoading(true);
      await waitFor(500);
      const allItems = await fetchItems();
      setItems(allItems);
      setIsLoading(false);
    };
    fetchAllItems();
  }, []);

  if (isLoading || !items) {
    return <LoadingScreen />;
  }

  const filteredItem = items?.filter((item) => {
    return item.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <div>
        <main>
          <nav className={styles.nav}>
            {filteredItem?.map((item) => (
              <Link
                key={item.id}
                className={styles.listItem}
                to={`/${item.name.toLowerCase()}`}
              >
                <div className={styles.listItemText}>
                  <span>{item.name}</span>
                  <span>{item.id}</span>
                </div>
              </Link>
            ))}
          </nav>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Items;
