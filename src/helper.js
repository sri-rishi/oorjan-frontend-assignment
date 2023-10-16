// const determineTextColor = (data, marketData) => {
//   const previousData = marketData[index + currentIndex - 1];
//   if (!previousData) {
//     return "black";
//   }
//   if (data.open > previousData.close) {
//     return "green";
//   } else if (data.open < previousData.close) {
//     return "red";
//   } else if (data.open === data.close) {
//     return "black";
//   } else if (data.open < data.close) {
//     return "green";
//   } else {
//     return "red";
//   }
// };

// export { determineTextColor };
const dateFormat = (date) => {
  const shownDate = [];
  const dateToFormat = date.split("T").slice(0, 1);
  const splitedDateToFormat = dateToFormat[0].split("-");

  for (let i = splitedDateToFormat.length - 1; i >= 0; i--) {
    shownDate.push(splitedDateToFormat[i]);
  }

  return shownDate.join("-");
};

export { dateFormat };
