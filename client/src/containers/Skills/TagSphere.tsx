import React, { useEffect, useRef, useState } from "react";
import "./TagSphere.scss";
import { SKILLS } from "../../lib/constants/Constants";
import { boat } from "../../assets";

declare const window: any;

const TagSphere = () => {
  const [isError, setIsError] = useState(false);
  const boatRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //@ts-ignore
  function RSquare(c, w, h, cx, cy) {
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(cx, cy);
    c.globalAlpha = 1;
    var can = canvasRef.current;
    var ctx = can!.getContext("2d");
    var img = boatRef.current;
    //@ts-ignore
    ctx.drawImage(img, -70, -85, img.width * 1, img.height * 1);
  }

  useEffect(() => {
    const TagCanvas = window.TagCanvas;
    TagCanvas.wheelZoom = false;
    TagCanvas.textHeight = 30;
    TagCanvas.textColour = null;
    TagCanvas.outlineMethod = "both";
    TagCanvas.outlineIncrease = 5;
    TagCanvas.decel = 0.98;
    TagCanvas.shadowBlur = 3;
    TagCanvas.fadeIn = 1000;
    TagCanvas.activeCursor = "default";
    TagCanvas.noSelect = true;
    TagCanvas.weight = true;
    TagCanvas.shuffleTags = true;
    try {
      TagCanvas.Start("canvas", "tags", { centreFunc: RSquare });
    } catch (e) {
      setIsError(true);
    }
  }, []);

  return (
    <div className="tagcanvas">
      <div id="canvasContainer" className={`${isError && "hide-elems"}`}>
        <canvas width={760} height={670} id="canvas" ref={canvasRef}></canvas>
      </div>

      <div id="tags">
        <ul>
          {SKILLS.map((skill, i) => (
            <li key={i}>
              <a
                href={skill.href}
                className={
                  skill.weight == 1 ? "blue-weighted" : "purple-weighted"
                }
              >
                {skill.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <img src={boat} ref={boatRef} id="boat" className="hide-elems" />
    </div>
  );
};

export default TagSphere;
