import { useState, useEffect } from "react";
import UploadService from "../Services/FileUploadService";
import IFile from "../Types/File";

const ImageUpload: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setProgress(0);
  };

  const upload = () => {
    setProgress(0);
    if (!currentImage) return;

    //Name file
    const generatedFileName = `image_${Date.now()}_${Math.floor(
      Math.random() * 1000
    )}`;

    UploadService.upload(currentImage, generatedFileName)
      .then((response) => {
        setMessage(response.data.message);
        return UploadService.getFiles();
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the Image!");
        }

        setCurrentImage(undefined);
      });
  };

  useEffect(() => {
    UploadService.getFiles()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setImageInfos(response.data);
        } else {
          console.error("Invalid data structure from server:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  }, []);

  return (
    <div className="">
      <div>
        <div>
          <label className="flex items-center justify-center relative overflow-hidden bg-brownd text-white font-semibold p-3 rounded-md cursor-pointer hover:bg-brownl">
            <input
              type="file"
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
              accept="image/*"
              onChange={selectImage}
            />
            <span className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
              Upload
            </span>
          </label>
        </div>

        <div className="w-1">
          <button
            className=""
            disabled={!currentImage}
            onClick={upload}
          ></button>
        </div>
      </div>

      {currentImage && progress > 0 && (
        <div className="">
          <div
            className=""
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      {previewImage && (
        <div className="rounded-full overflow-hidden w-48 h-48">
          <img
            className="w-full h-full object-cover"
            src={previewImage}
            alt=""
          />
        </div>
      )}

      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}

      {imageInfos.length > 0 && (
        <div className="opacity-0 mt-3">
          <div className="opacity-0">List of Images</div>
          <ul className="opacity-0 list-group list-group-flush">
            {imageInfos.map((img: IFile, index: number) => (
              <li className="list-group-item" key={index}>
                <img src={img.url} height="80px" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
