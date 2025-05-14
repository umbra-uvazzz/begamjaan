document.body.addEventListener("click", function(event) {
  // Create a heart div
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Position the heart where the click happened
  heart.style.left = `${event.pageX - 50}px`;
  heart.style.top = `${event.pageY - 50}px`;

  // Append the heart to the body
  document.body.appendChild(heart);
});
