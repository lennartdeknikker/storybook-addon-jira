import { useChannel } from "@storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
} from "@storybook/types";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";
import parseTicketData from './helpers/parseTicketData';

export const withRoundTrip = (storyFn: StoryFunction<Renderer>) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: async ({ ticketId, isForSubtask }) => {
      let data = null
      if (ticketId) {
        const fetchedData = await fetch(`/api?ticketId=${ticketId}`)
        data = await fetchedData.json()
        const parsedData = parseTicketData(data)
        emit(EVENTS.RESULT, parsedData)
      }
    },
    [STORY_CHANGED]: () => {
      emit(EVENTS.RESULT, {
        overview: {},
        subtasks: {},
      });
    },
    [EVENTS.CLEAR]: () => {
      emit(EVENTS.RESULT, {
        overview: {},
        subtasks: {},
      });
    },
  });

  return storyFn();
};
