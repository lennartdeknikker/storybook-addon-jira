import { useChannel } from "@storybook/client-api";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";
import parseData from './helpers/parseData'

// something to have a look at:
// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-storyfn

export const withRoundTrip = (storyFn) => {
  const clearData = () => {
    emit(EVENTS.RESULT, {
      overview: {},
      subtasks: {},
      data: {}
    });
  }

  const emit = useChannel({
    [EVENTS.REQUEST]: async ({ ticketId }) => {
      let data = null
      if (ticketId) {
        const fetchedData = await fetch(`/api?ticketId=${ticketId}`)
        data = await fetchedData.json()
      }
      const parsedData = parseData(data)

      emit(EVENTS.RESULT, parsedData);
    },
    [STORY_CHANGED]: clearData,
    [EVENTS.CLEAR]: clearData,
  });
  return storyFn();
};
