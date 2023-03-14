import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = () => {
  return <div>Ball</div>;
};

const BallCanvas = ({ icon }) => {
  return <div>Ball Canvas</div>;
};

export default BallCanvas;
