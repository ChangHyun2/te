"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageViewer from "./ImageViewer";

export default function ImageLoader() {
  const [imgSrces, setImgSrces] = useState<{ [name in string]: string }>({});

  const handleChangeFiles = () => {
    setImgSrces({});
  };

  const handleLoadImg = ({
    name,
    imgSrc,
  }: {
    name: string;
    imgSrc: string;
  }) => {
    setImgSrces((prev) => {
      const next = { ...prev };
      next[name] = imgSrc;
      return next;
    });
  };

  return (
    <div>
      <ImageUploader
        onChangeFiles={handleChangeFiles}
        onLoadImg={handleLoadImg}
      />
      <div className="mb-10"></div>
      <ImageViewer imgSrces={imgSrces} />
    </div>
  );
}
