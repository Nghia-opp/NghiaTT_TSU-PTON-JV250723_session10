let mathNum = Number(prompt("Điểm môn toán là :"));
let physicsNum = Number(prompt("Điểm môn vật lý là :"));
let chemistryNum = Number(prompt("Điểm môn hóa học là :"));

const totalSum = mathNum + physicsNum + chemistryNum;

const toTal = totalSum / 3

alert("Tổng điểm trung bình của bạn là " + Math.ceil(toTal));