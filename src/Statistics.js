import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import more from "./IconMoreButton.svg";

const StatisticsBar = styled.div`
  display: flex;
  background: white;
`;

const StatsName = styled.span`
  font-size: 12px;
  color: #707e88;
`;

const MainGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const StatsBlock = styled(NavLink)`
  display: flex;
  margin: 11px 0 0 0;
  padding: 2px 0 4px 0;
  text-decoration: none;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid #1da1f2;
  }

  &.active {
    border-bottom: 4px solid #1da1f2;
    color: #1da1f2;
  }
`;

const StatsCounter = styled.span`
  margin: 2px 0 0 0;
  font-size: 18px;
  color: #788a98;

  ${StatsBlock}:hover & {
    color: #1da1f2;
  }

  ${StatsBlock}.active & {
    color: #1da1f2;
  }
`;

const FollowButton = styled.button`
  padding: 9px 0 27px 0;
  margin: 12px 18px 11px 0;
  border: 1px solid #1da1f2;
  border-radius: 20px;
  box-sizing: border-box;
  background: white;
  cursor: pointer;
  color: #1da1f2;
`;

const MoreButton = styled.button`
  width: 4px;
  height: 14px;
  background-color: white;
  background-image: url(${more});
  cursor: pointer;
`;

class Statistics extends Component {
  render() {
    return (
      <StatisticsBar>
        <MainGroup>
          <StatsBlock>
            <StatsName>Tweets</StatsName>
            <StatsCounter>8,058</StatsCounter>
          </StatsBlock>

          <StatsBlock>
            <StatsName>Following</StatsName>
            <StatsCounter>721</StatsCounter>
          </StatsBlock>

          <StatsBlock>
            <StatsName>Followers</StatsName>
            <StatsCounter>1,815</StatsCounter>
          </StatsBlock>

          <StatsBlock>
            <StatsName>Lists</StatsName>
            <StatsCounter>2</StatsCounter>
          </StatsBlock>
        </MainGroup>

        <FollowButton>Follow</FollowButton>
        <MoreButton />
      </StatisticsBar>
    );
  }
}

export default Statistics;
