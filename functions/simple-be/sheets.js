const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const spreadsheetId = process.env.DATA_SHEET;
const googleKey = process.env.GOOGLE_SHEETS_API_KEY;

const getSheet = (range) => {
  const sheets = google.sheets({
    version: "v4",
    auth: googleKey,
  });

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(
      {
        spreadsheetId,
        range,
      },
      (error, res) => {
        if (error) {
          reject({ error: `The API returned an error: ${error}` });
          return;
        }

        const rows = res.data.values;
        resolve(rows);
      }
    );
  });
};

const toKebabCase = (string) =>
  string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

const getPlaces = () =>
  getSheet("places!A2:J")
    .then((response) =>
      response.reduce(
        (
          { places },
          [
            name,
            address,
            lat,
            lng,
            episode,
            what,
            note,
            japaneseName,
            photo,
            favorite,
          ]
        ) => {
          if (lat && lng)
            places.push({
              name,
              slug: toKebabCase(name),
              address,
              lat: parseFloat(lat),
              lng: parseFloat(lng),
              episode: parseInt(episode),
              what,
              note,
              japaneseName,
              photo,
              favorite: favorite === "TRUE",
            });

          return { places };
        },
        {
          places: [],
        }
      )
    )
    .catch((error) => error);

module.exports = {
  SCOPES,
  getPlaces,
};
