import React from "react";
import { Tabs, Tab, Card, CardContent, Typography } from "@mui/material";

const ProjectPage = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <Card>
        <CardContent>
          {selectedTab === 0 && (
            <Typography variant="body1">Content for Tab 1</Typography>
          )}
          {selectedTab === 1 && (
            <Typography variant="body1">Content for Tab 2</Typography>
          )}
          {selectedTab === 2 && (
            <Typography variant="body1">Content for Tab 3</Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectPage;
