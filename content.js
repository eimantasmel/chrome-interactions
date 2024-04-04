import getStorageData from "./utils/getStorageData.js";
import doubleClickEvent from "./utils/doubleClick";
import { unBlurVideo, blurVideo } from "./utils/bluring.js";

let lastKeyDownContainer = { lastKeyDown: null };
let lastVideoStopContainer = { lastVideoStop: 0 };
const blurListener = () => blurVideo(lastVideoStopContainer);
const unBlurListener = () => unBlurVideo(lastVideoStopContainer);

const changeMarker = (e) => {
  if (e.key == "*") {
    const elements = document.querySelectorAll("*");
    if (!document.body.style.cursor || document.body.style.cursor == "auto") {
      elements.forEach((element) => {
        element.style.cursor =
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='14' fill='red'/%3E%3C/svg%3E\"), auto";
      });
    } else
      elements.forEach((element) => {
        element.style.cursor = "auto";
      });
  }
};
document.body.addEventListener("keydown", async (e) => {
  const scrollByInput = (await getStorageData("scrollByInput")) ?? 500;
  const blurByInput = (await getStorageData("blurByInput")) ?? 20;
  const graynessInput = (await getStorageData("graynessInput")) ?? 100;
  const emailInput = (await getStorageData("emailInput")) ?? "";
  const workPage = (await getStorageData("workPage")) ?? "";

  if (e.key == "Shift") {
    doubleClickEvent(lastKeyDownContainer, () => {
      let video = document.querySelector("video");
      if (
        video.getAttribute("listener") &&
        video.getAttribute("listener") != "false"
      ) {
        video.setAttribute("listener", "false");
        video.removeEventListener("pause", blurListener);
        video.removeEventListener("play", unBlurListener);
        document.body.removeEventListener("keydown", changeMarker);
        video.style.filter = "none";

        const elements = document.querySelectorAll("*");
        elements.forEach((element) => {
          element.style.cursor = "auto";
        });
      } else {
        video.addEventListener("pause", blurListener);
        video.addEventListener("play", unBlurListener);
        document.body.addEventListener("keydown", changeMarker);
        video.setAttribute("listener", "true");
      }
    });
  } else if (e.ctrlKey && e.key == "`") {
    if (!e.target.style.filter || e.target.style.filter == "none")
      e.target.style.filter = `grayscale(${graynessInput / 100})`;
    else e.target.style.filter = "none";
  } else if (e.ctrlKey && e.key === "b") {
    if (!e.target.style.filter || e.target.style.filter == "none")
      e.target.style.filter = `blur(${blurByInput}px)`;
    else e.target.style.filter = "none";
  } else if (e.shiftKey && e.ctrlKey && e.key === "E") {
    window.open(emailInput, "_blank");
  } else if (e.key === "F2") {
    window.open(workPage, "_blank");
  } else if (e.key === "F3") {
    window.open(
      `chrome-extension://${chrome.runtime.id}/options.html`,
      "_blank"
    );
  } else if (e.ctrlKey && e.key == "ArrowDown")
    window.scrollBy(0, scrollByInput);
  else if (e.ctrlKey && e.key == "ArrowUp")
    window.scrollBy(0, -1 * scrollByInput);
});
