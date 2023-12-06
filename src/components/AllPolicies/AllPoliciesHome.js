import { useContext, useState, useEffect } from "react";

import { AppContext } from "../Context";

import "./AllPolicies.css";

import { Box, Tab } from "@mui/material";

import  TabContext  from "@mui/lab/TabContext";

import  TabList  from "@mui/lab/TabList";
import  TabPanel  from "@mui/lab/TabPanel";

import SpinLoader from "../SpinLoader/SpinLoader";

// import data from './allpolicydata.json'

export default function AllPoliciesHome({ spousePolicy, isChildPolicy }) {
  const { themeName } = useContext(AppContext);

  const [value, setValue] = useState("1");

  const [all, setAll] = useState(true);

  const [self, setSelf] = useState(false);

  const [spouse, setSpouse] = useState(false);

  const [child, setChild] = useState(false);

  const [data, setData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    allPolicyApi();

    if (spousePolicy) {
      setAll(false);
      setSelf(false);
      setSpouse(true);

      setChild(false);
    }

    if (isChildPolicy) {
      setAll(false);
      setSelf(false);

      setSpouse(false);

      setChild(true);
    }
  }, []);

  const allPolicyApi = async () => {
    const response = await fetch("https://aime-backend.onrender.com/aime/api")
      .then((res) => res.json())
      .catch((e) => console.log(e));
    setData(response);
    console.log(response);
  };

  const ActivePolicies = data?.map((item) => {
    return (
      <>
        {all && item?.Policy_Group == "Active" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {self && item?.Policy_Group == "Active" && item.Type == "Self" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {spouse && item?.Policy_Group == "Active" && item.Type == "Spouse" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {child && item?.Policy_Group == "Active" && item.Type == "Child" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
      </>
    );
  });

  const PendingPolicies = data?.map((item) => {
    return (
      <>
        {all && item?.Policy_Group == "Pending" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {self && item?.Policy_Group == "Pending" && item.Type == "Self" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {spouse && item?.Policy_Group == "Pending" && item.Type == "Spouse" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {child && item?.Policy_Group == "Pending" && item.Type == "Child" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
      </>
    );
  });

  const ExpiredPolicies = data?.map((item) => {
    return (
      <>
        {all && item?.Policy_Group == "Expired" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {self && item?.Policy_Group == "Expired" && item.Type == "Self" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {spouse && item?.Policy_Group == "Expired" && item.Type == "Spouse" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
        {child && item?.Policy_Group == "Expired" && item.Type == "Child" && (
          <tr key={item?.id}>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Id}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Policy_Name}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Insurer}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Premium_Account}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Maturity_Date}
            </td>
            <td className={`${themeName === "dark" && "darkallpolicies"}`}>
              {item?.Next_Due_Date}
            </td>
          </tr>
        )}
      </>
    );
  });

  const All = data?.map((item) => {
    return <>{item?.Type == "All"}</>;
  });

  return (
    <div
      className={`${
        themeName === "dark" ? "darkdashboardcard" : "allpolicycontainer"
      }`}
    >
      <div>
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                aria-label="Tabs example"
                onChange={handleChange}
                variant="fullWidth"
              >
                <Tab label="ACTIVE POLICIES" value="1" />
                <Tab label="PENDING POLICIES" value="2" />
                <Tab label="EXPIRED POLICIES" value="3" />
              </TabList>
            </Box>

            <div>
              <input
                className="radio"
                type="radio"
                name="radiovalues"
                defaultChecked={spousePolicy || isChildPolicy ? false : true}
                onChange={() => {
                  setAll(true);
                  setSelf(false);
                  setSpouse(false);
                  setChild(false);
                }}
              />{" "}
              All
              <input
                className="radio"
                type="radio"
                name="radiovalues"
                onChange={() => {
                  setAll(false);
                  setSelf(true);
                  setSpouse(false);
                  setChild(false);
                }}
              />{" "}
              Self
              <input
                className="radio"
                type="radio"
                name="radiovalues"
                defaultChecked={spousePolicy}
                onChange={() => {
                  setAll(false);
                  setSelf(false);
                  setSpouse(true);
                  setChild(false);
                }}
              />{" "}
              Spouse
              <input
                className="radio"
                type="radio"
                name="radiovalues"
                defaultChecked={isChildPolicy}
                onChange={() => {
                  setAll(false);
                  setSelf(false);
                  setSpouse(false);
                  setChild(true);
                }}
              />{" "}
              Child
            </div>

            {data?.length == 0 ? (
              <SpinLoader parentheight="30vh" height="75px" width="75px" />
            ) : (
              <>
                <TabPanel value="1">
                  <div className="container">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Id
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Policy Name
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Insurer
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Premium Account
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Maturity Date
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Next Due Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>{ActivePolicies}</tbody>
                    </table>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="container">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Id
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Policy Name
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Insurer
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Premium Account
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Maturity Date
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Next Due Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>{PendingPolicies}</tbody>
                    </table>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div className="container">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Id
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Policy Name
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Insurer
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Premium Account
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Maturity Date
                          </th>
                          <th
                            className={`${
                              themeName === "dark" && "darkallpolicies"
                            }`}
                          >
                            Next Due Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>{ExpiredPolicies}</tbody>
                    </table>
                  </div>
                </TabPanel>
              </>
            )}
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
