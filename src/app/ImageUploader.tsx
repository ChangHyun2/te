"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { setEmitFlags } from "typescript";

export default function ImageUploader({
  onLoadImg,
  onChangeFiles,
}: {
  onLoadImg: any;
  onChangeFiles: any;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);

  const handleFiles: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    if (!e.target.files) return;

    setProgress(0);
    onChangeFiles();
    setFiles(Array.from(e.target.files));
  };

  useEffect(() => {
    const file = files[progress];
    console.log({ files, progress });
    if (file) {
      const { name, size, type } = file;

      const fileReader = new FileReader();

      console.log("read");
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        const imgSrc = fileReader.result;

        if (typeof imgSrc === "string") {
          setProgress((prev) => prev + 1);
          console.log({ name, imgSrc });
          onLoadImg({ name, imgSrc });
        }
      };
    }
  }, [files, progress]);

  return (
    <div>
      <input
        id="images"
        type="file"
        name="image"
        accept="image/*"
        multiple={true}
        onChange={handleFiles}
      />
      <input
        id="images"
        type="file"
        name="image"
        accept="image/*"
        capture
        onChange={handleFiles}
      />
    </div>
  );
}
