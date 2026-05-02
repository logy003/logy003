let currentNode = taxonomy;
let historyStack = [];

window.onload = function () {
  navigateTo(taxonomy);
};

function navigateTo(node) {
  currentNode = node;
  updateTop(node.name);
  renderMenu(node);
  renderContent(node);
}

function renderMenu(node) {
  const menu = document.getElementById("menuItems");
  menu.innerHTML = "";

  if (!node.children) return;

  node.children.forEach(child => {
    const btn = document.createElement("button");
    btn.innerText = child.name;

    btn.onclick = () => {
      historyStack.push(node);
      navigateTo(child);
    };

    menu.appendChild(btn);
  });
}

// 🔥 SHUFFLE FUNCTION
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 🔥 MAIN LOGIC HERE
function renderContent(node) {
  const main = document.querySelector(".main");

  let results = [...speciesList];

  if (node.id_c) {
    results = results.filter(s => s.ID_c === node.id_c);
  } else if (node.id_b) {
    results = results.filter(s => s.ID_b === node.id_b);
  } else if (node.id_a) {
    results = results.filter(s => s.ID_a === node.id_a);
  }

  // RANDOMIZE ORDER
  results = shuffleArray(results);

  if (results.length === 0) {
    main.innerHTML = "";
    return;
  }

  let html = `<div class="grid">`;

  results.forEach(s => {
    html += `
      <div class="tile">
        <img src="${s.image_url}">
        <h2>${s.name}</h2>
        <h5>${s.location}</h5>
        <h5>${s.time}</h5>
      </div>
    `;
  });

  html += `</div>`;

  main.innerHTML = html;
}

function updateTop(name) {
  document.getElementById("topButton").innerText = name;
}

function handleTopClick() {
  if (historyStack.length > 0) {
    const prev = historyStack.pop();
    navigateTo(prev);
  }
}