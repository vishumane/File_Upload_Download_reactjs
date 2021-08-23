
import React, { useState } from "react";

import DragArea from "./DragArea";
import FileList from "./FileList";

const Application = () => {
    const [fileList, setFileList] = useState([]);

    const addFile = (file) => {
        setFileList([...fileList, file]);

    };
    console.log(fileList);

    return (
        <div className="App">
            <h3>***File Upload****</h3>
            <h5 className="title">Drag and drop</h5>
            <DragArea addFile={addFile} />
            <FileList fileList={fileList} />
        </div>
    );
}
export default Application;