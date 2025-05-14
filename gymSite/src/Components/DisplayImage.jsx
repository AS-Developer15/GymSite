import React from "react";

function DisplayImage() {
  return (
    <div className="imgDisplay">
  
<h1>
    <center>

    Image Gallery
    </center>
</h1>
      <div className="rowA">
        <img src="https://themewagon.github.io/gymlife/img/gallery/gallery-1.jpg" alt="" />
        <img src="https://themewagon.github.io/gymlife/img/gallery/gallery-2.jpg" alt="" />
        <img src="https://themewagon.github.io/gymlife/img/gallery/gallery-3.jpg" alt="" />
      </div>

      <div className="rowB">
        <img src="https://themewagon.github.io/gymlife/img/gallery/gallery-4.jpg" alt="" />
        <img src="https://themewagon.github.io/gymlife/img/gallery/gallery-5.jpg" alt="" />
        <img src="https://themewagon.github.io/gymlife/img/gallery/gallery-6.jpg" alt="" />
      </div>
    </div>
  );
}

export default DisplayImage;
