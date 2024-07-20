import getStorageData from "./getStorageData";

export async function blurVideo(lastVideoStopContainer) {
  let video = document.querySelector("video");
  lastVideoStopContainer.lastVideoStop = new Date().getTime();
  const blurByInput = (await getStorageData("blurByInput")) ?? 50;
  video.style.filter = `blur(${blurByInput}px)`;
}

export function unBlurVideo(lastVideoStopContainer) {
  let currentTime = new Date().getTime();
  let video = document.querySelector("video");
  if (currentTime - lastVideoStopContainer.lastVideoStop > 2000) {
    video.style.filter = "none";
  }
}
