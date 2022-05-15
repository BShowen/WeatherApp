export function tempToColor(temp) {
  if (temp > -10 && temp < 40) {
    return "temp-color-1";
  } else if (temp >= 40 && temp < 50) {
    return "temp-color-2";
  } else if (temp >= 50 && temp < 60) {
    return "temp-color-3";
  } else if (temp >= 60 && temp < 70) {
    return "temp-color-4";
  } else if (temp >= 70 && temp < 80) {
    return "temp-color-5";
  } else if (temp >= 80 && temp < 90) {
    return "temp-color-6";
  } else if (temp >= 90 && temp < 100) {
    return "temp-color-7";
  } else if (temp >= 100 && temp < 120) {
    return "temp-color-8";
  }
}
