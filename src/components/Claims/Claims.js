import React, { useState, useContext } from "react";
import "./Claims.css";

import MultiStepProgressBar from "../MultiStepProgressBar/MultiStepProgressBar";
import { Dropdown } from "react-bootstrap";

import { Box, Tab } from "@mui/material";

import FileBadge from "../FileBadge/FileBadge";

import  TabContext  from "@mui/lab/TabContext";

import  TabList  from "@mui/lab/TabList";
import  TabPanel  from "@mui/lab/TabPanel";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import checkmarkicon from "../../image/checkmark.svg";

import alerticon from "../../image/alerticon.svg";

import { AppContext } from "../Context";

export default function Claims() {
  const [isValue, setIsValue] = useState(false);

  const [isNewValue, setIsNewValue] = useState(false);

  const [tab, setTab] = useState("1");

  const [page, setPage] = useState("pageone");

  const [showFileName, setShowFileName] = useState([]);

  const [maxFileUpload, setMaxFileUpload] = useState(false);

  const [myClaims, setMyClaims] = useState(false);

  const [show, setShow] = useState(false);

  const { themeName } = useContext(AppContext);

  const handleClose = () => setShow(false);

  const handleChange = (event) => {
    setIsValue(event.target.textContent);
  };

  const newhandleChange = (event) => {
    setIsNewValue(event.target.textContent);
  };

  const onTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const onReset = () => {
    setShowFileName([]);

    setMaxFileUpload(false);
  };

  const nextPage = (page) => {
    (isValue && isNewValue) != "" && setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    // switch (pageNumber) {
    // case "1":
    // setPage("pageons");
    // break;
    // case "2":
    // setPage("pagetwo");}
  };

  const fileUpload = (e) => {
    const fileName_ = [...e?.target?.files];
    let test = fileName_?.map((elen) => elen?.name);
    if (e?.target?.files?.length > 4) {
      setMaxFileUpload(true);
      setShowFileName([...test.slice(0, 4)]);
    } else {
      setShowFileName([...test]);
    }
  };

  const onMyClaims = () => {
    setMyClaims(true);
    setShow(true);
  };

  return (
    <div className="Claimscontainer">
      <Box>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              aria-label="Tabs example"
              onChange={onTabChange}
              variant="fullWidth"
            >
              <Tab className="testtest" label="MAKE CLAIM" value="1" />
              <Tab label="MY CLAIMS" value="2" />/
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="multistepprogresscontainer">
              <MultiStepProgressBar
                page={page}
                onPageNumberClick={nextPageNumber}
              />
            </div>
            {!myClaims &&
              {
                pageone: (
                  <div className="custdetailscontainer">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className={`${themeName == "dark" && "darkdropdown"}`}
                      >
                        {isValue ? isValue : "Insured"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu onClick={handleChange}>
                        <Dropdown.Item>Test Customer 1</Dropdown.Item>
                        <Dropdown.Item>Test Customer 2</Dropdown.Item>
                        <Dropdown.Item>Test Customer 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className={`${themeName == "dark" && "darkdropdown"}`}
                      >
                        {isNewValue ? isNewValue : "Policy Name"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu onClick={newhandleChange}>
                        <Dropdown.Item>Test Customer 1</Dropdown.Item>
                        <Dropdown.Item>Wanderlust Platinum</Dropdown.Item>
                        <Dropdown.Item>Smart Driver Plan</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="buttoncontainer">
                      <button className="backbtncust">Back</button>
                      <button
                        className={`${
                          isValue?.length > 0 && isNewValue?.length > 0
                            ? themeName == "dark"
                              ? "nextbtncust1dark"
                              : "nextbtncust1"
                            : "disablednextbtn"
                        }`}
                        onClick={() => nextPage("pagetwo")}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ),
                pagetwo: (
                  <div>
                    <div className="fileupparent">
                      <div className="uploadboxcontainer">
                        <input
                          type="file"
                          className="multifileupload"
                          onChange={fileUpload}
                          multiple
                          title=" "
                        />
                        <div
                          className={`${"uploadfile"} ${
                            themeName == "dark" && "fileuploaddark"
                          }`}
                        >
                          {" "}
                          File Upload{" "}
                        </div>
                      </div>
                      <span
                        className={`${"resetbutton"} ${
                          themeName == "dark" && "fileuploaddark"
                        }`}
                        onClick={onReset}
                      >
                        Reset
                      </span>
                    </div>

                    {showFileName && (
                      <div className="filebadgecont">
                        {showFileName?.map((item) => {
                          return (
                            <React.Fragment key={item}>
                              <FileBadge
                                item={item}
                                showFileName={showFileName}
                                setShowFileName={setShowFileName}
                              />
                            </React.Fragment>
                          );
                        })}
                      </div>
                    )}

                    {maxFileUpload == true && (
                      <div className="maxfileerrormsg">
                        <img src={alerticon} width="24px" height="24px" />
                        <span className="uploaderrortxt">
                          You have uploaded maximum number of documents
                        </span>
                      </div>
                    )}

                    <div className="buttoncont">
                      <button
                        className={`${
                          themeName == "dark"
                            ? "nextbtncust1dark"
                            : "backbtncust1"
                        }`}
                        onClick={() => nextPage("pageone")}
                      >
                        Back
                      </button>
                      <button
                        className={`${
                          showFileName?.length > 0
                            ? themeName == "dark"
                              ? "nextbtncust1dark"
                              : "nextbtncust1"
                            : "disablednextbtn"
                        }`}
                        onClick={() => nextPage("pagethree")}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ),

                pagethree: (
                  <div>
                    <div
                      className={`${"submitedropdown"} ${
                        themeName == "dark" && "darkdropdown"
                      }`}
                    >
                      <span className="ddvalue">{isValue}</span>
                    </div>
                    <div
                      className={`${"submitedropdown"} ${
                        themeName == "dark" && "darkdropdown"
                      }`}
                    >
                      <span className="ddvalue">{isNewValue}</span>
                    </div>
                    <span
                      className={`${"uploadedfiles"} ${
                        themeName == "dark" && "darktextuploaded"
                      }`}
                    >
                      Uploaded Files
                    </span>

                    {showFileName && (
                      <div className="filebadgecont">
                        {showFileName?.map((item) => {
                          return (
                            <React.Fragment key={item}>
                              <FileBadge
                                item={item}
                                showFileName={showFileName}
                                setShowFileName={setShowFileName}
                              />
                            </React.Fragment>
                          );
                        })}
                      </div>
                    )}

                    <div className="buttoncont2">
                      <button
                        className={`${
                          themeName == "dark"
                            ? "nextbtncust1dark"
                            : "backbtncust1"
                        }`}
                        onClick={() => nextPage("pagetwo")}
                      >
                        Back
                      </button>
                      <button
                        className={`${
                          themeName == "dark"
                            ? "nextbtncust1dark"
                            : "nextbtncust1"
                        }`}
                        style={{ width: "64px" }}
                        onClick={() => onMyClaims()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                ),
              }[page]}
            {myClaims && (
              <div>
                <div
                  className="d-flex"
                  style={{ justifycontent: "center", marginTop: "100px" }}
                >
                  <img src={checkmarkicon} width="24px" height="24px" />
                  <div className="sbmtclaimstxt">
                    Claims Submitted Successfully
                  </div>
                </div>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Claims</Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{ color: "green" }}>
                    Claims Submitted Successfullly
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      className="submitreset"
                      onClick={() => {
                        nextPage("pageone");
                        setMyClaims(false);
                      }}
                    >
                      Reset
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            )}
          </TabPanel>
          <TabPanel value="2">
            {myClaims && (
              <div>
                <div
                  className={`row ${
                    themeName == "dark" ? "headingclaimsdark" : "headingclaims"
                  }`}
                >
                  <div className="col-2">SL.No</div>
                  <div className="col-3">Insured</div>
                  <div className="col-4">Policy</div>
                  <div className="col-3">Status</div>
                </div>
                <div
                  className={`row ${
                    themeName == "dark" ? "headingclaimsdark" : "headingclaims"
                  }`}
                >
                  <div className="col-2">1</div>
                  <div className="col-3">{isValue}</div>
                  <div className="col-4">{isNewValue}</div>
                  <div className="col-3">Submitted</div>
                </div>
              </div>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
