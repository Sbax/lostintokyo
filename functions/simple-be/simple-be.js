const sheets = require("./sheets");
const { getPlaces } = sheets;

exports.handler = async (event) => {
  const path = event.path.split("/").pop();

  if (path === "sheet-data") {
    const places = await getPlaces();

    if (places.error) {
      return {
        statusCode: 500,
        body: JSON.stringify(places.error),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(places),
    };
  }

  return {
    statusCode: 500,
    body: JSON.stringify({ data: "Wrong API call" }),
  };
};
