import { addons, types } from "@storybook/addons";

import { ADDON_ID, PANEL_ID } from "../constants";
import { Panel } from "../Panel";

// Register the addon
addons.register(ADDON_ID, (api) => {

  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "JIRA tickets",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});
