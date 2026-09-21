function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  let total;
  if (hours <= 8) {
    total = hours * rate;
  } else {
    const regularPay = 8 * rate;
    const overtimeHours = hours - 8;
    const overtimePay = overtimeHours * (rate * 1.5);
    total = regularPay + overtimePay;
  }
  return Math.round(total);
}

module.exports = { isValidShift, calculatePay };
