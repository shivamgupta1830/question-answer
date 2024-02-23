const btn = document.querySelectorAll(".btn");
const ans = document.querySelectorAll(".answer");
const ques = document.querySelectorAll(".question");
const box = document.querySelectorAll(".question-box");

// Method-1 (DOM Traversing) #################################################

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const text = button.innerHTML;

    text === "↓" ? (button.innerHTML = "↑") : (button.innerHTML = "↓");

    const question_box = e.currentTarget.parentElement.parentElement;
    const answer = question_box.children[1];
    answer.classList.toggle("show");
  });
});

// Method-2 (Using Selectors)#################################################

// box.forEach((box) => {
//   const button = box.querySelector(".btn");
//   const answer = box.querySelector(".answer");
//   console.log(button, answer);

//   button.addEventListener("click", () => {
//     const text = button.innerHTML;
//     if (text === "+") {
//       button.innerHTML = "-";
//     } else {
//       button.innerHTML = "+";
//     }

//     answer.classList.toggle("show");
//   });
// });
