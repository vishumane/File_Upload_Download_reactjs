import React from "react";
const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
//format of conversion bytes to MB

const FileItem = (props) => {
    return (
        <div className="file-item">
            <p>{props.id}</p>
            <h3 className="file-title"> file: {props.name} </h3>
            <p className="file-size"> size :{formatBytes(props.size)}</p>
        </div>

    );
};


const FileList = (props) => {
    return (
        <div className="file-list">
            {props.fileList.map((item) => (
                <FileItem name={item.name} size={item.size} key={item.id} />
            ))}

        </div>
    );
}
export default FileList;