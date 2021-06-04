import { useChannel } from "@storybook/client-api";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";
import sortData from './helpers/sortData'

export const withRoundTrip = (storyFn) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: async ({ ticketId }) => {
      let data = null
      if (ticketId) {
        const fetchedData = await fetch(`/api?ticketId=${ticketId}`)
        data = await fetchedData.json()
      }
      const groupedOnStatus = sortData(data)

      emit(EVENTS.RESULT, groupedOnStatus);
    },
    [STORY_CHANGED]: () => {
      emit(EVENTS.RESULT, {
        toDo: [],
        inProgress: [],
        readyForTest: [],
        done: []
      });
    },
    [EVENTS.CLEAR]: () => {
      emit(EVENTS.RESULT, {
        toDo: [],
        inProgress: [],
        readyForTest: [],
        done: []
      });
    },
  });
  return storyFn();
};
