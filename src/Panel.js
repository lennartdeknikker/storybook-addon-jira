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
    [EVENTS.RESULT]: ({parsedData, isForSubtask}) => {
      if (!isForSubtask) {
        setResults(parsedData)
        setFetchingState(false)
      } else {
        // add result changing logic here.
        console.log('data for subticket to add', parsedData)
      }
    },
  });

  const fetchData = (ticketId, isForSubtask = false) => {
    setFetchingState(true)
    emit(EVENTS.REQUEST, {ticketId: ticketId, isForSubtask: isForSubtask})
  }

  return (
    <AddonPanel {...props}>
      <PanelContent
        fetchingState={fetchingState}
        results={results}
        fetchData={fetchData}
        clearData={() => emit(EVENTS.CLEAR)}
      />
    </AddonPanel>
  );
};
