import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { ItemTypes } from "../constants";
import Card from "./Card";

const DraggableCard = (props) => {
  const [, dragRef, preview] =
    //useDrag({
    //     item: { type: ItemTypes.CARD, ...props },
    //   });

    useDrag({
      type: ItemTypes.CARD,
      item: { ...props },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;
