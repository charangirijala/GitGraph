import { LightningElement, wire } from "lwc";

import DOMTOIMAGE from "@salesforce/resourceUrl/domtoimage";
import { loadScript } from "lightning/platformResourceLoader";

export default class DomToImage extends LightningElement {
  domtoimageLoaded = false;
  renderedCallback() {
    if (!this.domtoimageLoaded) {
      this.domtoimageLoaded = true;
      Promise.all([loadScript(this, DOMTOIMAGE)])
        .then(() => {
          console.log("Dom to Image loaded", domtoimage);
        })
        .catch((err) => {
          console.log("Dom to Image not loaded", err);
        });
    }
  }

  handleConvertToPng() {
    console.log("handleConvertToPng clicked");
    const element = this.template.querySelector(".content-to-convert");
    var scale = 2;
    domtoimage
      .toBlob(element, {
        width: element.clientWidth * scale,
        height: element.clientHeight * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left"
        }
      })
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        console.log("Image created: ", img);
        this.template.querySelector(".image-container").appendChild(img);
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  }
}
