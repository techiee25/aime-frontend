import React, { useState } from "react";
import "./FileBadge.css";
import closeicon from "../../image/close-round-icon.svg";
import { useEffect, useContext } from "react";
import { AppContext } from "../Context";

export default function FileBadge({ item, setShowFileName, showFileName }) {
  const [removeFile, setRemoveFile] = useState("");
  const { themeName } = useContext(AppContext);

  const onRemoveFile = (e) => {
    console.log(e,'checke')
    let unSelected = showFileName.filter((elen) => elen !== e);
    setShowFileName([...unSelected]);
    console.log(unSelected,'unselected')
  };

  return (
    <div
      className={`${"filebadgecontainer"} ${
        themeName == "dark" && "fileuploaddark"
      }`}
    >
      <div style={{ paddingRight: "8px" }}>{item}</div>
      <div onClick={() => onRemoveFile(item)} style={{ cursor: "pointer" }}>
        <img src={closeicon} height="24px" width="24px" />
      </div>
    </div>
  );
}
