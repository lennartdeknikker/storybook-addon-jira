import React, { useState } from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS } from "./constants";
import { PanelContent } from "./components/PanelContent";

export const Panel = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setResults] = useAddonState(ADDON_ID, {
    overview: {},
    subtasks: {},
    data: {}
  });

  const [fetchingState, setFetchingState] = useState(false)

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => {
      setResults(newResults)
      setFetchingState(false)
    },
  });

  return (
    <AddonPanel {...props}>
      <PanelContent
        fetchingState={fetchingState}
        results={results}
        fetchData={(ticketId) => {
          setFetchingState(true)
          emit(EVENTS.REQUEST, {ticketId: ticketId})
        }}
        clearData={() => emit(EVENTS.CLEAR)}
      />
    </AddonPanel>
  );
};
