export default function getTimeCurrent() {
  const time = new Date();
  let date =
    time.getHours() +
    ":" +
    time.getMinutes() +
    " - " +
    time.getDate() +
    "/" +
    (time.getMonth() + 1) +
    "/" +
    time.getFullYear();
  return date;
}
