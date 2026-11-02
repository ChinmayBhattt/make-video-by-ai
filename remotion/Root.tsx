import React from "react";
import { Composition } from "remotion";
import { ImanEditComp } from "./ImanEditComp";
import { MyComp } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ImanNewsEdit"
        component={ImanEditComp}
        durationInFrames={1706}
        fps={60}
        width={1080}
        height={1920}
      />
      <Composition
        id="TestComp"
        component={MyComp}
        durationInFrames={60}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
