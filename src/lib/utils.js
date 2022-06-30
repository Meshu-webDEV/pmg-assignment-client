import dayjs from "dayjs";

export function formatDate(date, withTime = true) {
  try {
    if (!withTime) return dayjs(date).format("YYYY/MM/DD");
    return dayjs(date).format("YYYY/MM/DD hh:mm A");
  } catch (error) {
    console.log("error formatting date", error.message);
    return "Error formatting";
  }
}

export function normalize(string = "") {
  return string.toString().replace(/ /g, "").toLowerCase();
}
