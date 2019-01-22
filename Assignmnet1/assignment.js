// Global variable "frames" to keep track of points
let frames;
// Function to determine the type of frame for easy calculation of points
const typeOfFrame = (currentKnocked, nextKnocked) => {
  let frameType;
  if (currentKnocked === 10) {
    frameType = 'strike';
  } else if (currentKnocked + nextKnocked === 10) {
    frameType = 'spare';
  } else if (currentKnocked + nextKnocked < 10) {
    frameType = 'open';
  } else {
    frameType = 'does not match any type';
  }
  return frameType;
};
// ValueOfFrame determines the point scored in current frame
const valueOfFrame = (rollArray, index) => {
  let points = 0;
  if (typeOfFrame(rollArray[index], rollArray[index + 1]) === 'strike') {
    if (rollArray[index + 1] === 10) {
      points = 20 + rollArray[index + 2] + rollArray[index + 3];
    } else {
      points = 10 + rollArray[index + 1] + rollArray[index + 2];
    }
  } else if (typeOfFrame(rollArray[index], rollArray[index + 1]) === 'spare') {
    points = 10 + rollArray[index + 2];
  } else if (typeOfFrame(rollArray[index], rollArray[index + 1] === 'open')) {
    points = rollArray[index] + rollArray[index + 1];
  } else {
    points = 'invalid input';
  }
  return points;
};
// Since the evaluation of points for the last one is different so separate function
const valueOfLastFrame = (lastFrame, index) => {
  let points = 0;
  if (typeOfFrame(lastFrame[index], lastFrame[index + 1]) === 'open') {
    points = valueOfFrame(lastFrame, index);
  } else {
    points = lastFrame[index] + lastFrame[index + 1] + lastFrame[index + 2];
  }
  return points;
};
// Score function calculates the final score of the Game
const score = (inputArray) => {
  frames = inputArray;
  let finalPoints = 0;
  let frameNumber = 1;
  let index = 0;
  while (frameNumber <= 10) {
    if (frameNumber < 10) {
      finalPoints += valueOfFrame(frames, index);
      frameNumber += 1;
      if (typeOfFrame(frames[index], frames[index + 1]) === 'strike') {
        index += 1;
      } else {
        index += 2;
      }
    } else if (frameNumber === 10) {
      finalPoints += valueOfLastFrame(frames, index);
      frameNumber += 1;
      break;
    }
  }
  return finalPoints;
};

module.exports = { typeOfFrame, valueOfFrame, valueOfLastFrame, score };
