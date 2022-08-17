const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const newColor = `rgb(${r}, ${g}, ${b})`;
  console.log(newColor);
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});
