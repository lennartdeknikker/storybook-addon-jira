import React, { Fragment, useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { Icons } from "@storybook/components";
import CommentSection from "./overview/CommentSection";
import PropertyBar from "./overview/PropertyBar";
import TicketLink from "./overview/TicketLink";
import Descript from './overview/Descript';


const ListWrapper = styled.ul({
  listStyle: "none",
  fontSize: 14,
  padding: 0,
  margin: 0,
});

const Wrapper = styled.div({
  display: "flex",
  width: "100%",
  borderBottom: `1px solid ${convert(themes.normal).appBorderColor}`,
  "&:hover": {
    background: convert(themes.normal).background.hoverable,
  },
});

const Icon = styled(Icons)({
  height: 10,
  width: 10,
  minWidth: 10,
  color: convert(themes.normal).color.mediumdark,
  marginRight: 10,
  transition: "transform 0.1s ease-in-out",
  alignSelf: "center",
  display: "inline-flex",
});

const HeaderBar = styled.div({
  padding: convert(themes.normal).layoutMargin,
  paddingLeft: '30px',
  paddingRight: '30px',
  overflow: 'hidden',
  background: convert(themes.normal).color.medium,
  color: "inherit",
  textAlign: "left",
  cursor: "pointer",
  borderLeft: "3px solid transparent",
  width: "100%",
  display: 'flex',
  "&:focus": {
    outline: "0 none",
    borderLeft: `3px solid ${convert(themes.normal).color.secondary}`,
  }
});

const DetailView = styled.div({
  padding: convert(themes.normal).layoutMargin,
  paddingLeft: '30px',
  paddingRight: '30px',
  marginBottom: convert(themes.normal).layoutMargin,
  backgroundColor: convert(themes.normal).color.lightest
});

export const ListItem = ({ tabSubtask, fetchData }) => {
  const overviewData = tabSubtask?.data?.overview
  const [opened, setOpened] = useState(false);

  const clickHandler = () => {
    if (!overviewData) fetchData(tabSubtask.id, true)
    setOpened(!opened)
  }


  return (
    <Fragment>
      <Wrapper>
        <HeaderBar onClick={clickHandler} role="button">
          <Icon
            icon="chevrondown"
            size={10}
            color={convert(themes.normal).appBorderColor}
            style={{
              transform: `rotate(${opened ? 0 : -90}deg)`,
            }}
          />
          <TicketLink ticketId={tabSubtask.id} summary={tabSubtask.summary} textColor={convert(themes.normal).color.lightest} fontSize="1rem" />
        </HeaderBar>
      </Wrapper>
      {opened && overviewData ? 
      <DetailView>
        <PropertyBar
          reporter={overviewData?.reporter}
          assignedTo={overviewData?.assignedTo}
          priority={overviewData?.priority}
          created={overviewData?.created}
          lastUpdated={overviewData?.lastUpdated}
        />
        {overviewData?.description && <Descript descriptionAdfString={overviewData.description} /> }
        {overviewData?.comments?.items?.length > 0 && <CommentSection {...tabSubtask.data.overview.comments} /> }
      </DetailView>        
      : null
      }
    </Fragment>
  );
};

const List = ({ tabSubtasks, fetchData }) => (
  <ListWrapper>
    {tabSubtasks.map((tabSubtask, id) => (
      <ListItem key={id} tabSubtask={tabSubtask} fetchData={fetchData}></ListItem>
    ))}
  </ListWrapper>
);

export default List