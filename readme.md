issues:

- is "total granted" (2023) and "total awarded" (2008-2022) the same?
- 2009/OPS/23 grant has no specified beneficiary
- copernicus border surveillance service evolution prize

## Files

Raw data is `Grants_2008_2022.xlsx` etc

`output/valid_country_names.csv` is a lookup file for manually cleaned country names

## Scripts

To clean and prepare for visualisations, run `R/clean_data.R` (exports data to `R/output`): Loads data from all sheets of the raw excel file, assigns easier column names, unifies spelling of countries and beneficiaries and looks for keywords in the project descriptions/names. Then, the cleaned data is aggregated and exported in different ways for the visualisations.

Code for visualisations in folder `d3`.
