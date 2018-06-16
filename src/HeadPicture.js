import React, { Component } from "react";
import styled from "styled-components";
import picture from "./HeadPicture.png";

const Picture = styled.div`
  height: 379px;
  width: 100%;
  background-size: cover;
  background-image: url(${picture});
`;

class HeadPicture extends Component {
  render() {
    return (
      <div>
        <Picture src={picture} />
      </div>
    );
  }
}

export default HeadPicture;
