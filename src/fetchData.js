import { useEffect, useState } from "react";
const key = "lostintokyo";
const expirationKey = `${key}:expiration`;
const dataKey = `${key}:data`;
const preferencesKey = `${key}:preferences`;

const saveData = (data) => {
  sessionStorage.setItem(
    expirationKey,
    JSON.stringify({
      expiresAt: new Date(new Date().getTime() + 5 * 1 * 10e4),
    })
  );

  sessionStorage.setItem(dataKey, JSON.stringify(data));
};

const checkSavedData = () => {
  const saved = sessionStorage.getItem(expirationKey);
  if (saved) {
    const { expiresAt } = JSON.parse(saved);

    if (Date.parse(new Date()) > Date.parse(expiresAt)) {
      sessionStorage.clear();
    }
  }

  const savedData = sessionStorage.getItem(dataKey);

  if (savedData) {
    return JSON.parse(savedData);
  }
};

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    const saved = checkSavedData();
    if (saved) {
      setData(saved);

      return;
    }

    const fetchData = async () => {
      const sheet = await (
        await fetch(`/.netlify/functions/simple-be/sheet-data`)
      ).json();

      saveData(sheet);
      setData(sheet);
    };

    fetchData();
  }, []);

  return data;
};

export const savePreferences = (preferences) =>
  localStorage.setItem(preferencesKey, JSON.stringify(preferences));

export const getPreferences = () => {
  const string = localStorage.getItem(preferencesKey);
  if (!string) return {};

  return JSON.parse(string) || {};
};
