import { colorRange } from "./colors.js";
async function createColorScale() {
  const csv_data = await d3.csv(
    "../R/output/frontex_grants_countries_total_centroid.csv"
  );

  // Step 1: Calculate total "eur" value per country
  const countryTotals = {};

  csv_data.forEach(function (d) {
    const countryName = d.country; // Assuming the country name is stored in the "country" property
    d.eur = +d.eur;
    const eurValue = +d.eur; // Assuming the "eur" property contains the value to be summed up

    if (!countryTotals[countryName]) {
      countryTotals[countryName] = 0;
    }
    countryTotals[countryName] += eurValue;
  });

  // Step 2: Sort country names based on total "eur" value
  const sortedCountryNames = Object.keys(countryTotals).sort((a, b) => {
    return countryTotals[b] - countryTotals[a];
  });

  // Step 3: Return sorted country names for use in the HTML file
  return { colorRange, sortedCountryNames };
}

export { createColorScale };
