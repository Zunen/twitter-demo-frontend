import React, { Component } from "react";
import styled from "styled-components";
import home from "./IconHome.svg";
import moments from "./IconMoments.svg";
import notifications from "./IconNotifications.svg";
import messages from "./IconMessages.svg";
import logo from "./TwitterLogo.svg";
import avatar from "./avatar.png";

const HeadContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
`;

const HeadNavMenu = styled.div`
  margin: 0 0 0 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 412px;
  margin: 0 0 0 176px;
`;

const HeadMenuButtons = styled.a`
  margin: 1px 0 0 0;
  font-size: 13px;
  font-family: Helvetcia Neue, Helvetic, Arial, sans-serif;
  text-decoration: none;
  cursor: pointer;
  color: #667580;
`;

const HeadMenuIcon = styled.svg`
  margin-right: 4px;
  height: 20px;
`;

const HeadMenuItem = styled.div`
  display: flex;
  align-items: center;
  max-width: 100px;
`;

const TwitterIcon = styled.svg`
  margin: 16px 0 8px 0;
  height: 20px;
`;

const HeaderRightGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Search = styled.input`
  width: 220px;
  padding: 9px 0 8px 11px;
  margin: 6px 18px 7px 0;
  border: solid 1px #f5f8fa;
  font-size: 12px;
  font-family: Helvetcia Neue, Helvetic, Arial, sans-serif;
  box-sizing: border-box;
  border-radius: 100px;
  color: #687b8a;
  background: #f5f8fa;

  background-repeat: no-repeat;
  background-position: 193px 9px;
`;

const Avatar = styled.img`
  width: 26px;
  height: 20px;
  margin: 12px 28px 10px 0;
`;

const TweetButton = styled.button`
  margin: 6px 10px 8px 0;
  padding: 0 16px 0 16px;
  font-family: Helvetcia Neue, Helvetic, Arial, sans-serif;
  font-size: 14px;
  text-align: center;
  line-height: 14px;
  color: #ffffff;
  background: #1da1f2;
  border-radius: 100px;
  border: none;
`;

class Header extends Component {
  render() {
    return (
      <HeadContainer>
        <HeadNavMenu>
          <HeadMenuItem>
            <HeadMenuIcon src={home} alt="" />
            <HeadMenuButtons>Home</HeadMenuButtons>
          </HeadMenuItem>
          <HeadMenuItem>
            <HeadMenuIcon src={moments} alt="" />
            <HeadMenuButtons>Moments</HeadMenuButtons>
          </HeadMenuItem>
          <HeadMenuItem>
            <HeadMenuIcon src={notifications} alt="" />
            <HeadMenuButtons>Notifications</HeadMenuButtons>
          </HeadMenuItem>
          <HeadMenuItem>
            <HeadMenuIcon src={messages} alt="" />
            <HeadMenuButtons>Messages</HeadMenuButtons>
          </HeadMenuItem>
        </HeadNavMenu>

        <TwitterIcon scr={logo} alt="" />

        <HeaderRightGroup>
          <Search placeholder="Search Twitter" />
          <Avatar src={avatar} alt="" />
          <TweetButton>Tweet</TweetButton>
        </HeaderRightGroup>
      </HeadContainer>
    );
  }
}

export default Header;
