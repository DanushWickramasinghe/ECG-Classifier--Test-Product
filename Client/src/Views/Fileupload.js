import { useRef } from "react";
import "./App.css";

export const FileUploader = ({ handleFiles }) => {
  // Create references to the hidden file input elements
  const hiddenFileInput1 = useRef(null);
  const hiddenFileInput2 = useRef(null);

  // Programmatically click the hidden file input element when the Button component is clicked
  const handleClick = (inputRef) => () => {
    inputRef.current.click();
  };

  // Call a function (passed as a prop from the parent component) to handle the user-selected files
  const handleChange = (event, fileIndex) => {
    const fileUploaded = event.target.files[0];
    handleFiles(fileUploaded, fileIndex);
  };

  const handle_Submit = async (e) => {
    e.preventDefault();
    console.log("Two files submitted.");
  };
  // define what should back-end do here when the button is clicked

  return (
    <div className="buttons">
      <button
        className="file-upload-btn"
        onClick={handleClick(hiddenFileInput1)}
      >
        Upload your .mat file here
      </button>
      <button
        className="file-upload-btn"
        onClick={handleClick(hiddenFileInput2)}
      >
        Upload your header file here
      </button>
      <input
        type="file"
        accept=".mat"
        multiple="false"
        required
        onChange={(event) => handleChange(event, 1)}
        ref={hiddenFileInput1}
        style={{ display: "none" }}
      />
      <input
        type="file"
        accept=".hea"
        multiple="false"
        required
        onChange={(event) => handleChange(event, 2)}
        ref={hiddenFileInput2}
        style={{ display: "none" }}
      />

      <button className="files-submit-btn" onClick={handle_Submit}>
        {" "}
        Submit Files
      </button>
    </div>
  );
};
