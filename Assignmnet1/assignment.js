const typeOfFrame = (currentKnocked, nextKnocked) =>{
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
const valueOfLastFrame = (lastFrame, index) => {
  let points = 0;
};

module.exports = { typeOfFrame, valueOfFrame };
