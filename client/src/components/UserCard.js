import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import { useDarkMode } from "../components/hooks/useDarkMode";

export default function UserCard(props) {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log(darkMode, "dark mode");

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <Button
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      >
        Dark Mode
      </Button>
      <div className="cards">
        {props.user.map(data => (
          <Card inverse color="info" key={data.id}>
            <CardBody>
              <CardTitle>Player: {data.name}</CardTitle>
              <CardText>Country: {data.country}</CardText>
              <CardText>Popularity Rank: {data.id + 1}</CardText>
              <CardText>Search Interest: {data.searches}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
