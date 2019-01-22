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
  if (rollArray[index] === 10) {
    points = ;
  }
};
const bowlingGame = () => {
  const points = [];
  const roll = (pinsKnockedDown) => {
    points.push(pinsKnockedDown);
  };
};
