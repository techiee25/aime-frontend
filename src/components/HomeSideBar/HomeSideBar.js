import { useContext } from "react";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { AppContext } from "../Context";
import "./HomeSideBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HomeSideBar(props) {
  const { themeName } = useContext(AppContext);
  const dashBoard = () => {
    props.setDashBoardCard(true);
    props.setAllPolicies(false);
  };
  const allPolicies = () => {
    props.setDashBoardCard(false);
    props.setAllPolicies(true);
  };

  return (
    <div className={`homesidebar ${themeName === "dark" && "dark"}`}>
      <ProSidebarProvider>
        <Sidebar>
          <Menu>
            <AccountCircleIcon />
            <MenuItem
              className={`${themeName == "dark" && "homesidebardark"}`}
              onClick={() => {
                dashBoard();
                props.setSpousePolicy(false);
                props.setClaims(false);
                props.setIsChildPolicy(false);
              }}
            >
              {" "}
              DashBoard{" "}
            </MenuItem>
            <MenuItem
              className={`${themeName == "dark" && "homesidebardark"}`}
              onClick={() => {
                allPolicies();
                props.setDashBoardCard(false);
                props.setClaims(false);
              }}
            >
              {" "}
              All Policies{" "}
            </MenuItem>
            <MenuItem
              className={`${themeName == "dark" && "homesidebardark"}`}
              onClick={() => {
                props.setDashBoardCard(false);
                props.setAllPolicies(false);
                props.setClaims(false);
                props.setClaims(true);
                props.setSpousePolicy(false);
              }}
            >
              {" "}
              Claims{" "}
            </MenuItem>
            <MenuItem
              onClick={() => {
                props.setDashBoardCard(false);
                props.setAllPolicies(false);
                props.setClaims(false);
              }}
              disabled
            >
              {" "}
              Profile{" "}
            </MenuItem>
            <MenuItem
              onClick={() => {
                props.setDashBoardCard(false);
                props.setAllPolicies(false);
                props.setClaims(false);
              }}
              disabled
            >
              {" "}
              Saved Quote{" "}
            </MenuItem>
            <MenuItem
              onClick={() => {
                props.setDashBoardCard(false);
                props.setAllPolicies(false);
                props.setClaims(false);
              }}
              disabled
            >
              {" "}
              Tag a Quote{" "}
            </MenuItem>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
    </div>
  );
}

export default HomeSideBar;
