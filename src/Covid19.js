import React, { useEffect, useState } from "react";
const Covid19 = () => {
  const [data, setData] = useState({
    country: "",
  });
  // const [search, setSearch] = useState("Pakistan");
  useEffect(() => {
    const fatchData = async () => {
      const res = await fetch("https://api.covid19api.com/summary");
      const actualData = await res.json();
      const indexactualData = actualData.Countries[131];
      setData({ ...data, country: indexactualData });
      console.log("actualDatass", indexactualData);
      console.log("api resulti", actualData);
    };
    fatchData();
  }, []);

  return (
    <>
      <h1>Covid19 Data</h1>

      <div className="main-div">
        <input
          type="search"
          className="search"
          placeholder="Search Country Name Here"
          // onChange={(event) => {
          //   setSearch(event.target.value);
          // }}
        />
        {/* <h1> Search: {search} </h1> */}
        <h2>Country Name: {data.country.Country}</h2>
        <h2>Country Code: {data.country.CountryCode}</h2>
        <h2>Registerd Cases: {data.country.TotalConfirmed}</h2>
        <h2>NewConfirmed: {data.country.NewConfirmed} </h2>
        <h2>NewDeaths: {data.country.NewDeaths}</h2>
        <h2>TotalConfirmed: {data.country.TotalConfirmed}</h2>
      </div>
    </>
  );
};
export default Covid19;
