export function totalTimeCurrent() {
  let now = new Date(); // Lấy thời gian hiện tại
  let date = now.getDate(); // Lấy ngày từ thời gian hiện tại
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const totalSeconds = date * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
  return totalSeconds;
}
export function totalTimeEnd(timeCurrent, dateSaleStart, totalDateSale) {
  const totalTime = (dateSaleStart + totalDateSale) * 24 * 3600 - timeCurrent;
  if (totalTime <= 0)
    return {
      date: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  const date = Math.floor(totalTime / (3600 * 24));
  const hours = Math.floor((totalTime - date * 3600 * 24) / 3600);
  const minutes = Math.floor(
    (totalTime - date * 3600 * 24 - hours * 3600) / 60
  );
  const seconds = totalTime - date * 3600 * 24 - hours * 3600 - minutes * 60;
  return {
    date,
    hours,
    minutes,
    seconds,
  };
}
