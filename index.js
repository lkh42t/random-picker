const pickButton = document.getElementById("pick");

pickButton.addEventListener("click", () => {
  const candidatesEl = document.getElementById("candidates");
  const nOfPickEl = document.getElementById("n-of-pick");

  if (!candidatesEl.reportValidity() || !nOfPickEl.reportValidity()) {
    return;
  }

  const candidates = candidatesEl.value.split("\n").filter((e) => e !== "");
  const nOfPick = Math.min(parseInt(nOfPickEl.value), candidates.length);

  const picked = document.getElementById("picked");
  picked.innerHTML = "";

  const template = document.getElementById("picked-item-tmpl");

  for (let i = 0; i < nOfPick; ++i) {
    const idx = Math.floor(Math.random() * candidates.length);
    const deleted = candidates.splice(idx, 1);

    const item = template.content.cloneNode(true);
    const text = item.querySelector(".mdc-list-item__text");
    text.textContent = deleted[0];

    picked.appendChild(item);
  }
});

window.addEventListener("keydown", (ev) => {
  if (ev.ctrlKey && ev.key === "Enter") {
    pickButton.click();
  }
});
