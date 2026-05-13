let currentNode = taxonomy;
let historyStack = [];

window.onload = function () {
  navigateTo(taxonomy);
};

function navigateTo(node) {
  currentNode = node;
  renderMenu(node);
  renderContent(node);
}

function renderMenu(node) {
  const menu = document.getElementById("menuItems");
  menu.innerHTML = "";

  if (!node.children) return;

  node.children.forEach(child => {
    const btn = document.createElement("button");

    const count = getCountForNode(child);
    btn.innerText = `${child.name} (${count})`;

    btn.onclick = () => {
      historyStack.push(node);
      navigateTo(child);
    };

    menu.appendChild(btn);
  });
}

// COUNT FUNCTION
function getCountForNode(node) {
  let results = [...speciesList];

  if (node.id_a) results = results.filter(s => s.ID_a === node.id_a);
  if (node.id_b) results = results.filter(s => s.ID_b === node.id_b);
  if (node.id_c) results = results.filter(s => s.ID_c === node.id_c);
  if (node.id_d) results = results.filter(s => s.ID_d && s.ID_d === node.id_d);
  if (node.id_e) results = results.filter(s => s.ID_e && s.ID_e === node.id_e);

  return results.length;
}

// SHUFFLE
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// POPUP OPEN
function openImagePopup(src) {
  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImg");

  popupImg.src = src;
  popup.style.display = "flex";
}

// POPUP CLOSE
function closeImagePopup() {
  document.getElementById("imagePopup").style.display = "none";
}

// MAIN RENDER
function renderContent(node) {
  const main = document.querySelector(".main");

  let results = [...speciesList];

  if (node.id_a) results = results.filter(s => s.ID_a === node.id_a);
  if (node.id_b) results = results.filter(s => s.ID_b === node.id_b);
  if (node.id_c) results = results.filter(s => s.ID_c === node.id_c);
  if (node.id_d) results = results.filter(s => s.ID_d && s.ID_d === node.id_d);
  if (node.id_e) results = results.filter(s => s.ID_e && s.ID_e === node.id_e);

  results = shuffleArray(results);

  const count = results.length;

  if (results.length === 0) {
    main.innerHTML = "";
    updateTop(node.name, 0);
    return;
  }

  let html = `<div class="grid">`;

  results.forEach(s => {
    html += `
      <div class="tile">
        <img loading="eager" src="${s.image_url}" onclick="openImagePopup('${s.image_url}')">
        
        <div class="text">
          <h2>${s.name}</h2>
          <div class="meta">
            ${s.location} • ${s.time}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;

  main.innerHTML = html;

  updateTop(node.name, count);
}

function updateTop(name, count = null) {
  const topBtn = document.getElementById("topButton");

  if (count !== null) {
    topBtn.innerText = `${name} (${count})`;
  } else {
    topBtn.innerText = name;
  }
}

function handleTopClick() {
  if (historyStack.length > 0) {
    const prev = historyStack.pop();
    navigateTo(prev);
  }
}

// ESC CLOSE
document.addEventListener("keydown", function (e) {
  const popup = document.getElementById("imagePopup");

  if (e.key === "Escape" && popup.style.display === "flex") {
    closeImagePopup();
  }
});
