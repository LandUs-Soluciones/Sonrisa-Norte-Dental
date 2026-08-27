import { useEffect, useState } from "react";
import {
  DENTISTS_DATA,
  EMPLOYEES_DATA,
  SERVICES_DATA,
} from "../config/clinicData";

const STORAGE_KEY = "sonrisa-norte-admin-content";

const DEFAULT_CONTENT = {
  services: SERVICES_DATA,
  dentists: DENTISTS_DATA,
  employees: EMPLOYEES_DATA,
};

const mergeCollection = (defaultItems, storedItems) => {
  if (!Array.isArray(storedItems)) return defaultItems;

  return storedItems.map((storedItem) => {
    const defaultItem = defaultItems.find((item) => item.id === storedItem.id);
    return defaultItem ? { ...defaultItem, ...storedItem } : storedItem;
  });
};

const createId = (value) => {
  const normalized = value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `${normalized || "registro"}-${Date.now().toString(36)}`;
};

const readStoredContent = () => {
  if (typeof window === "undefined") return DEFAULT_CONTENT;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_CONTENT;

    const parsedContent = JSON.parse(stored);

    return {
      ...DEFAULT_CONTENT,
      ...parsedContent,
      services: mergeCollection(SERVICES_DATA, parsedContent.services),
      dentists: mergeCollection(DENTISTS_DATA, parsedContent.dentists),
      employees: mergeCollection(EMPLOYEES_DATA, parsedContent.employees),
    };
  } catch {
    return DEFAULT_CONTENT;
  }
};

export default function useClinicContent() {
  const [content, setContent] = useState(readStoredContent);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const addItem = (collection, item) => {
    setContent((current) => ({
      ...current,
      [collection]: [
        ...current[collection],
        {
          ...item,
          id: createId(item.title || item.name || collection),
        },
      ],
    }));
  };

  const updateItem = (collection, id, item) => {
    setContent((current) => ({
      ...current,
      [collection]: current[collection].map((entry) =>
        entry.id === id ? { ...entry, ...item, id } : entry,
      ),
    }));
  };

  const removeItem = (collection, id) => {
    setContent((current) => ({
      ...current,
      [collection]: current[collection].filter((entry) => entry.id !== id),
    }));
  };

  const resetContent = () => {
    setContent(DEFAULT_CONTENT);
  };

  return {
    ...content,
    addItem,
    updateItem,
    removeItem,
    resetContent,
  };
}
