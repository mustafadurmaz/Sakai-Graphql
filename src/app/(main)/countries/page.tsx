"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { useCountriesLazyQuery } from "../../../graphql/queries/countries.queries.hooks";

const Countries = () => {
  const [customers1, setCustomers1] = useState([]);

  const [getCountries, { data:data, loading, error, refetch }] =
    useCountriesLazyQuery({
      fetchPolicy: "no-cache",
    });

  const handleGetCountries = () => {
    getCountries()
      .then((res: any) => {
        // if (res?.error) {
        //   throw res.error;
        // }
        console.log("res", res);
      })
      .catch((error: any) => {
        // toast?.current?.show({
        //   severity: "error",
        //   summary: t("Error"),
        //   detail: error.response ? error.response.data.message : error.message,
        //   life: 3000,
        // });
      });
  };

  useEffect(() => {
    handleGetCountries();
  }, []);

  return <div>page</div>;
};

export default Countries;
