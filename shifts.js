function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const total = hours * rate;
  return Math.round(total);
}

module.exports = { isValidShift, calculatePay };
