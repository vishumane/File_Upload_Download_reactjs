import React, { useState } from "react";


const DragArea = (props) => {
    const [isDraggedOver, setIsDraggedOver] = useState(false);

    const dragEnterHandler = (e) => {
        e.preventDefault();
        setIsDraggedOver(true);
        if (isDraggedOver) {
            e.target.style.border = "4px dotted green"
        }
    };

    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setIsDraggedOver(false);
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    const dragDropHandler = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        // e.target.style.border = "4px dotted green"

        if (file) {
            props.addFile(file);
        }
    };

    const handleFileInput = async (e) => {
        // handle validations
        const file = e.target.files[0];
        const base64 = await convertBase64(file)
        console.log(base64)
        if (file) {
            props.addFile(file);

        }
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }


    const baseStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        transition: 'border .3s ease-in-out'
    };

    //   const collect=(e)=>{
    //   const file = e.target.files;
    // var formData=new FormData();
    // for (let i = 0; i < file.length; i++) {
    //     formData.append(`images[${i}]`, file[i])
    // }
    //   }
    //onDrop

    return (
        <div
            className="drag"
            onDragEnter={dragEnterHandler}
            onDragLeave={dragLeaveHandler}
            onDrop={dragDropHandler}
            onDragOver={dragOverHandler}
        >
            <p style={baseStyle}> Drag your files here {isDraggedOver && "DRAGGING"}
                <input type="file" onChange={handleFileInput} multiple></input>

            </p>
        </div>
    );
}
export default DragArea;
