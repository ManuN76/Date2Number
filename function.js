window.function = function (dt) {
  if (dt === undefined) return;

  dt = glide2Date(dt.value, "short");

  let dateRef = new Date("1899/12/31");

  let dateDif = dt - dateRef - 1;
  let dateDifDay = dateDif / 1000 / (24 * 3600);
  dateDifDay = Math.ceil(dateDifDay);

  return dateDifDay;
};
