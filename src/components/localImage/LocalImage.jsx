import { memo } from "react";
import React from "react";
import "./LocalImage.css";
import { TiDelete } from "react-icons/ti";
const LocalImage = ({ files, setFiles }) => {
  const handleRemoveImage = (index) => {
    setFiles((prev) => [...prev].filter((_, inx) => inx !== index));
  };
  return (
    <div className="local__images">
      {Object.values(files)?.map((image, index) => (
        <div className="local__image" key={index}>
          <img
            src={URL.createObjectURL(image)}
            alt="img"
            width={150}
            height={100}
          />
          <TiDelete onClick={() => handleRemoveImage(index)} />
        </div>
      ))}
    </div>
  );
};

export default memo(LocalImage);
