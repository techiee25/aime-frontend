import { useContext, useEffect, useState } from "react";

import AllPoliciesHome from "../AllPolicies/AllPoliciesHome";

import { AppContext } from "../Context";

import DashBoardCard from "../DashBoardCard/DashBoardCard";

import HomeSideBar from "../HomeSideBar/HomeSideBar";

import "./DashBoard.css";

import Claims from "../Claims/Claims";

import { useDispatch } from "react-redux";

import { aimeLogin } from "../../Services/aimeSlice";

function DashBoard() {
  const { themeName } = useContext(AppContext);

  const [dashBoardCard, setDashBoardCard] = useState(true);
  const [allPolicies, setAllPolicies] = useState(false);

  const [claims, setClaims] = useState(false);
  const [spousePolicy, setSpousePolicy] = useState(false);

  const [isChildPolicy, setIsChildPolicy] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (spousePolicy || isChildPolicy) {
      setDashBoardCard(false);
    }
  });

  useEffect(() => {
    dispatch(aimeLogin(true));
  }, []);

  return (
    <div
      className={`row ${themeName == "dark" ? "dark" : "dashboardcontainer"}`}
    >
      <div className="col-4">
        <HomeSideBar
          setDashBoardCard={setDashBoardCard}
          setAllPolicies={setAllPolicies}
          setClaims={setClaims}
          setSpousePolicy={setSpousePolicy}
          setIsChildPolicy={setIsChildPolicy}
        />
      </div>

      <div className="col-8">
        {dashBoardCard && (
          <DashBoardCard
            spousePolicy={spousePolicy}
            isChildPolicy={isChildPolicy}
            setSpousePolicy={setSpousePolicy}
            setIsChildPolicy={setIsChildPolicy}
          />
        )}
        {(allPolicies || spousePolicy === true || isChildPolicy === true) && (
          <AllPoliciesHome
            spousePolicy={spousePolicy}
            isChildPolicy={isChildPolicy}
          />
        )}
        {claims && <Claims />}
      </div>
    </div>
  );
}

export default DashBoard;
