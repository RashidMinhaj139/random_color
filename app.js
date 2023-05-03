function getcode() {
  let random_num = Math.floor(Math.random() * 16777215); //complete logic is here
  let random_color = "#" + random_num.toString(16);//complete logic is here
  console.log(random_num, random_color);
  document.body.style.backgroundColor = random_color;
  document.getElementById("code").innerText = random_color;
//   document.getElementById("btn").style.backgroundColor=random_color;
navigator.clipboard.writeText(random_color)
}

document.getElementById("btn").addEventListener("click", getcode);

getcode();

