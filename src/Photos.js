import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (index < 9) {
              return (
                <div className="col-4" key={photo.keyword}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid mb-3 rounded"
                      alt={photo.alt}
                    />
                  </a>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}