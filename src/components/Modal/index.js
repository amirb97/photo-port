import React from "react";

function Modal(currentPhoto) {
    console.log(currentPhoto);
    const {name, description, photo} = currentPhoto.currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={photo} alt="current category" />
                <p>{description}</p>
                <button type="button">
                Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;
