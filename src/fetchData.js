import { useEffect, useState } from "react";

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const sheet = await (
        await fetch(`/.netlify/functions/simple-be/sheet-data`)
      ).json();

      setData(sheet);
    };

    fetchData();
  }, []);

  return data;
};
