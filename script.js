// const startingMinutes = 10;
// let time = startingMinutes * 60;
// const countdownEl = document.getElementById("countdown")

// setInterval(timeOut, 1000)

// function timeOut() {
//     const minutes = Math.floor(time / 60)
//     let seconds = time % 60;

//     countdownEl.innerHTML = `${minutes}:${seconds}`
//     time--;
// }
let generateOTP = () => {
  const otpLength = 6;

  const otp = Math.floor(Math.random() * Math.pow(10, otpLength));

  document.getElementById("text").innerText = otp;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", generateOTP);
