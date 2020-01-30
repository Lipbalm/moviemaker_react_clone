import React, { FC } from "react";
import { IVideoProps } from "../../Modules/Interfaces";
import {
  ItemWrapper,
  ImageWrapper,
  StillImage,
  ItemInfo,
  InfoTop,
  InfoMid,
  InfoBot,
  ItemDate
} from "./ListStyle";
import { ItemTitle } from "../WidgetComponents/WidgetStyle";

const VideoItem: FC<IVideoProps> = ({
  episode_id,
  episode_number,
  title,
  air_date,
  image_path,
  overview
}) => {
  return (
    <ItemWrapper>
      <ImageWrapper>
        <StillImage></StillImage>
      </ImageWrapper>
      <ItemInfo>
        <InfoTop>
          <ItemTitle>{`${episode_number}. ${title}`}</ItemTitle>
          <ItemDate>{air_date}</ItemDate>
        </InfoTop>
        <InfoMid>{overview}</InfoMid>
        <InfoBot></InfoBot>
      </ItemInfo>
    </ItemWrapper>
  );
};

export default VideoItem;
