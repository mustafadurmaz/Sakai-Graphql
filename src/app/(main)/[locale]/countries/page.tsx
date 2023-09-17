"use client";
import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import {
  DataTable,
  DataTableExpandedRows,
  DataTableFilterMeta,
} from "primereact/datatable";
import {
  Column,
  ColumnFilterApplyTemplateOptions,
  ColumnFilterClearTemplateOptions,
  ColumnFilterElementTemplateOptions,
} from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { Slider } from "primereact/slider";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { ToggleButton } from "primereact/togglebutton";
import { Rating } from "primereact/rating";

import { InputText } from "primereact/inputtext";
import { Demo } from "../../../../types/types";

import { useCountriesLazyQuery } from "../../../../graphql/queries/countries.queries.hooks";

const Countries = () => {
  const [countries, setCountries] = useState<Demo.Country[]>([]);
  const [filters1, setFilters1] = useState<DataTableFilterMeta>({});
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const [idFrozen, setIdFrozen] = useState(false);
  const [products, setProducts] = useState<Demo.Product[]>([]);
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [expandedRows, setExpandedRows] = useState<
    any[] | DataTableExpandedRows
  >([]);
  const [allExpanded, setAllExpanded] = useState(false);

  const [getCountries, { data: data, loading, error, refetch }] =
    useCountriesLazyQuery({
      fetchPolicy: "no-cache",
    });

  
  const handleGetCountries = () => {
    setLoading1(true);
    getCountries()
      .then((res: any) => {
        if (res?.error) {
          throw res.error;
        }
        console.log("res", res);
        setCountries(res.data.countries);
        setLoading1(false);
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

  interface Represenative {
    name: string;
    image: string;
  }

  const representatives: Represenative[] = [
    { name: "Amy Elsner", image: "amyelsner.png" },
    { name: "Anna Fali", image: "annafali.png" },
    { name: "Asiya Javayant", image: "asiyajavayant.png" },
    { name: "Bernardo Dominic", image: "bernardodominic.png" },
    { name: "Elwin Sharvill", image: "elwinsharvill.png" },
    { name: "Ioni Bowcher", image: "ionibowcher.png" },
    { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
    { name: "Onyama Limba", image: "onyamalimba.png" },
    { name: "Stephen Shaw", image: "stephenshaw.png" },
    { name: "XuXue Feng", image: "xuxuefeng.png" },
  ];

  const statuses = [
    "unqualified",
    "qualified",
    "new",
    "negotiation",
    "renewal",
    "proposal",
  ];

  const clearFilter1 = () => {
    initFilters1();
  };

  const onGlobalFilterChange1: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const value = e.target.value;
    let _filters1 = { ...filters1 };
    (_filters1["global"] as any).value = value;

    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  };

  const renderHeader1 = () => {
    return (
      <div className="flex justify-content-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          outlined
          onClick={clearFilter1}
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue1}
            onChange={onGlobalFilterChange1}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const formatDate = (value: Date) => {
    return value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatCurrency = (value: number) => {
    return value?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const initFilters1 = () => {
    setFilters1({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      "country.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue1("");
  };

  const countryBodyTemplate = (rowData: Demo.Country) => {
    return (
      <React.Fragment>
        <img
          alt="flag"
          src={`/demo/images/flag/flag_placeholder.png`}
          className={`flag flag-${rowData.code}`}
          width={30}
        />
        <span style={{ marginLeft: ".5em", verticalAlign: "middle" }}>
          {rowData.name}
        </span>
      </React.Fragment>
    );
  };

  const filterClearTemplate = (options: ColumnFilterClearTemplateOptions) => {
    return (
      <Button
        type="button"
        icon="pi pi-times"
        onClick={options.filterClearCallback}
        severity="secondary"
      ></Button>
    );
  };

  const filterApplyTemplate = (options: ColumnFilterApplyTemplateOptions) => {
    return (
      <Button
        type="button"
        icon="pi pi-check"
        onClick={options.filterApplyCallback}
        severity="success"
      ></Button>
    );
  };

  const representativeFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    return (
      <>
        <div className="mb-3 text-bold">Agent Picker</div>
        <MultiSelect
          value={options.value}
          options={representatives}
          itemTemplate={representativesItemTemplate}
          onChange={(e) => options.filterCallback(e.value)}
          optionLabel="name"
          placeholder="Any"
          className="p-column-filter"
        />
      </>
    );
  };

  const representativesItemTemplate = (option: Represenative) => {
    return (
      <div className="p-multiselect-representative-option">
        <img
          alt={option.name}
          src={`/demo/images/avatar/${option.image}`}
          width={32}
          style={{ verticalAlign: "middle" }}
        />
        <span style={{ marginLeft: ".5em", verticalAlign: "middle" }}>
          {option.name}
        </span>
      </div>
    );
  };

  const dateFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        dateFormat="mm/dd/yy"
        placeholder="mm/dd/yyyy"
        mask="99/99/9999"
      />
    );
  };

  const balanceFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    return (
      <InputNumber
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };

  const statusFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        itemTemplate={statusItemTemplate}
        placeholder="Select a Status"
        className="p-column-filter"
        showClear
      />
    );
  };

  const statusItemTemplate = (option: React.ReactNode) => {
    return <span className={`customer-badge status-${option}`}>{option}</span>;
  };

  const activityFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    return (
      <React.Fragment>
        <Slider
          value={options.value}
          onChange={(e) => options.filterCallback(e.value)}
          range
          className="m-3"
        ></Slider>
        <div className="flex align-items-center justify-content-between px-2">
          <span>{options.value ? options.value[0] : 0}</span>
          <span>{options.value ? options.value[1] : 100}</span>
        </div>
      </React.Fragment>
    );
  };

  const verifiedFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    return (
      <TriStateCheckbox
        value={options.value}
        onChange={(e) => options.filterCallback(e.value)}
      />
    );
  };

  const toggleAll = () => {
    if (allExpanded) collapseAll();
    else expandAll();
  };

  const expandAll = () => {
    let _expandedRows = {} as { [key: string]: boolean };
    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
    setAllExpanded(true);
  };

  const collapseAll = () => {
    setExpandedRows([]);
    setAllExpanded(false);
  };

  const searchBodyTemplate = () => {
    return <Button icon="pi pi-search" />;
  };

  const imageBodyTemplate = (rowData: Demo.Product) => {
    return (
      <img
        src={`/demo/images/product/${rowData.image}`}
        onError={(e) =>
          (e.currentTarget.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.image}
        className="shadow-2"
        width={100}
      />
    );
  };

  const priceBodyTemplate = (rowData: Demo.Product) => {
    return formatCurrency(rowData.price as number);
  };

  const ratingBodyTemplate = (rowData: Demo.Product) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate2 = (rowData: Demo.Product) => {
    return (
      <span
        className={`product-badge status-${rowData.inventoryStatus?.toLowerCase()}`}
      >
        {rowData.inventoryStatus}
      </span>
    );
  };

  const header = (
    <Button
      icon={allExpanded ? "pi pi-minus" : "pi pi-plus"}
      label={allExpanded ? "Collapse All" : "Expand All"}
      onClick={toggleAll}
      className="w-11rem"
    />
  );

  const header1 = renderHeader1();

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h5>Filter Menu</h5>
          <DataTable
            value={countries}
            paginator
            className="p-datatable-gridlines"
            showGridlines
            rows={10}
            dataKey="id"
            filters={filters1}
            filterDisplay="menu"
            loading={loading1}
            responsiveLayout="scroll"
            emptyMessage="No customers found."
            header={header1}
          >
            <Column
              field="code"
              header="Code"
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="emoji"
              header="Flag"
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="name"
              header="Name"
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="capital"
              header="Capital"
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="continent.name"
              header="Continent"
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="currency"
              header="Currency"
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "12rem" }}
              // body={statusBodyTemplate}
              filter
              filterElement={statusFilterTemplate}
            />
            <Column
              field="phone"
              header="Phone"
              showFilterMatchModes={false}
              style={{ minWidth: "12rem" }}
              // body={activityBodyTemplate}
              filter
              filterElement={activityFilterTemplate}
            />
            {/* <Column
            field="verified"
            header="Verified"
            dataType="boolean"
            bodyClassName="text-center"
            style={{ minWidth: "8rem" }}
            // body={verifiedBodyTemplate}
            filter
            filterElement={verifiedFilterTemplate}
          /> */}
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Countries;
