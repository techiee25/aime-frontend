import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./DashBoardCard.css";
import { Grid } from "@mui/material";
import { Row } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import WcIcon from "@mui/icons-material/Wc";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SettingsIcon from "@mui/icons-material/Settings";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { AppContext } from "../Context";

export default function DashBoardCard(props) {
  const { themeName } = useContext(AppContext);

  const onSpouse = () => {
    props.setSpousePolicy(!props.spousePolicy);
  };

  const onChild = () => {
    props.setIsChildPolicy(!props.isChildPolicy);
  };

  return (
    <div
      className={`${
        themeName === "dark" ? "darkdashboardcard" : "mainpagecontainer"
      }`}
    >
      <div className="darkdashboardcardcontainer">
        <Row>
          <div className={`${themeName === "dark" && "darkthemetext"}`}>
            <strong>
              <h3 style={{marginLeft: '16px'}}>Policies</h3>
            </strong>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card
                sx={{ maxWidth: 345, maxHeight: 200 }}
                className={`${
                  themeName === "dark"
                    ? "darkdashboardsinglecard"
                    : "MuiCard-root"
                }`}
              >
                <PersonIcon
                  className={`${
                    themeName === "dark" ? "darkicon" : "MuiSvgIcon-root"
                  }`}
                />
                <CardContent>
                  <Typography guttenBottom variant="" component="div">
                    My Policies
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} onClick={() => onSpouse()}>
              <Card
                sx={{ maxWidth: 345, maxHeight: 200 }}
                className={`${
                  themeName === "dark"
                    ? "darkdashboardsinglecard"
                    : "MuiCard-root"
                }`}
              >
                <WcIcon
                  className={`${
                    themeName === "dark" ? "darkicon" : "MuiSvgIcon-root"
                  }`}
                />
                <CardContent>
                  <Typography guttenBottom variant="" component="div">
                    Spouse Policies
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} onClick={() => onChild()}>
              <Card
                sx={{ maxWidth: 345, maxHeight: 200 }}
                className={`${
                  themeName === "dark"
                    ? "darkdashboardsinglecard"
                    : "MuiCard-root"
                }`}
              >
                <ChildFriendlyIcon
                  className={`${
                    themeName === "dark" ? "darkicon" : "MuiSvgIcon-root"
                  }`}
                />
                <CardContent>
                  <Typography guttenBottom variant="" component="div">
                    My Policies
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Row>

        <Row>
          <div className={`${themeName === "dark" && "darkthemetext"}`}>
            <strong>
              <h3 style={{marginLeft: '16px'}}>Apps</h3>
            </strong>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card
                sx={{ maxWidth: 345, maxHeight: 200 }}
                className={`${
                  themeName === "dark"
                    ? "darkdashboardsinglecard"
                    : "MuiCard-root"
                }`}
              >
                <AssignmentIndIcon
                  className={`${
                    themeName === "dark" ? "darkicon" : "MuiSvgIcon-root"
                  }`}
                />
                <CardContent>
                  <Typography guttenBottom variant="" component="div">
                    My Profile
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{ maxWidth: 345, maxHeight: 200 }}
                className={`${
                  themeName === "dark"
                    ? "darkdashboardsinglecard"
                    : "MuiCard-root"
                }`}
              >
                <SettingsIcon
                  className={`${
                    themeName === "dark" ? "darkicon" : "MuiSvgIcon-root"
                  }`}
                />
                <CardContent>
                  <Typography guttenBottom variant="" component="div">
                    Settings
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{ maxWidth: 345, maxHeight: 200 }}
                className={`${
                  themeName === "dark"
                    ? "darkdashboardsinglecard"
                    : "MuiCard-root"
                }`}
              >
                <AnnouncementIcon
                  className={`${
                    themeName === "dark" ? "darkicon" : "MuiSvgIcon-root"
                  }`}
                />
                <CardContent>
                  <Typography guttenBottom variant="" component="div">
                    Grievance
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Row>
      </div>
    </div>
  );
}
