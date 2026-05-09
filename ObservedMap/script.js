const buttons = document.querySelectorAll(".map-button");
const maps = document.querySelectorAll(".map-image");
const stateListContainer = document.getElementById("state-list");
const mapLabel = document.querySelector(".map-label");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    maps.forEach(m => m.classList.remove("active"));
    document.getElementById(button.dataset.map).classList.add("active");

    stateListContainer.innerHTML = "";

    if (button.dataset.map === "states") {
      renderStateAndTerritoryLists();
      updateStateLabel();
    }

    if (button.dataset.map === "countries") {
      renderCountryRegions();
      updateCountryLabel();
    }

    if (button.dataset.map === "counties") {
      renderCountyRegions();
      updateCountyLabel();
    }
  });
});

/* =========================
   SHARED TILE BUILDER
========================= */

function createSection(titleText, dataArray) {
  const wrapper = document.createElement("div");

  const title = document.createElement("div");
  title.textContent = titleText;
  title.style.color = "white";
  title.style.fontWeight = "600";
  title.style.fontSize = "18px";
  title.style.textAlign = "center";
  title.style.margin = "10px 0";

  const grid = document.createElement("div");

  grid.style.display = "flex";
  grid.style.flexWrap = "wrap";
  grid.style.justifyContent = "center";
  grid.style.gap = "8px";

  grid.style.width = "78vw";
  grid.style.margin = "0 auto";

  dataArray.forEach(item => {
    const tile = document.createElement("div");

    tile.textContent = item.name;
    tile.style.background = item.color;
    tile.style.color = "white";

    tile.style.padding = "6px 8px";
    tile.style.borderRadius = "6px";

    tile.style.fontFamily = "Arial";
    tile.style.fontWeight = "600";
    tile.style.textAlign = "center";
    tile.style.fontSize = "13px";

    tile.style.whiteSpace = "nowrap";
    tile.style.minWidth = "110px";

    grid.appendChild(tile);
  });

  wrapper.appendChild(title);
  wrapper.appendChild(grid);

  return wrapper;
}

/* =========================
   STATES
========================= */

function renderStateAndTerritoryLists() {

  stateListContainer.style.display = "flex";
  stateListContainer.style.flexDirection = "column";
  stateListContainer.style.alignItems = "center";

  stateListContainer.appendChild(createSection("States", statesData));
  stateListContainer.appendChild(createSection("Territories", territoriesData));
}

function updateStateLabel() {
  const greenCount = statesData.filter(s => s.color === "green").length;
  mapLabel.textContent = `${greenCount} / 50 States Observed`;
}

/* =========================
   COUNTRIES
========================= */

function normalizeCounted(value) {
  return value === true || value === "yes";
}

function getTotalCountriesCount() {
  return [
    northAmericaData,
    southAmerica,
    europe,
    africaData,
    westAsiaData,
    asiaData,
    oceaniaData
  ].reduce((total, region) => total + region.filter(c => normalizeCounted(c.counted)).length, 0);
}

function getObservedCountriesCount() {
  return [
    northAmericaData,
    southAmerica,
    europe,
    africaData,
    westAsiaData,
    asiaData,
    oceaniaData
  ].reduce((total, region) => {
    return total + region.filter(c => normalizeCounted(c.counted) && c.color === "green").length;
  }, 0);
}

function updateCountryLabel() {
  const observed = getObservedCountriesCount();
  const total = getTotalCountriesCount();
  mapLabel.textContent = `${observed} / ${total} Countries Observed`;
}

function renderCountryRegions() {

  stateListContainer.style.display = "flex";
  stateListContainer.style.flexDirection = "column";
  stateListContainer.style.alignItems = "center";

  stateListContainer.innerHTML = "";

  stateListContainer.appendChild(createSection("North America", northAmericaData));
  stateListContainer.appendChild(createSection("South America", southAmerica));
  stateListContainer.appendChild(createSection("Europe", europe));
  stateListContainer.appendChild(createSection("Africa", africaData));
  stateListContainer.appendChild(createSection("Middle East", westAsiaData));
  stateListContainer.appendChild(createSection("Asia", asiaData));
  stateListContainer.appendChild(createSection("Australia & Pacific", oceaniaData));
}

/* =========================
   COUNTIES
========================= */

const countyStateGroups = [
  { name: "Alabama", data: alabamaData },
  { name: "Alaska", data: alaskaData },
  { name: "Arizona", data: arizonaData },
  { name: "Arkansas", data: arkansasData },
  { name: "California", data: californiaData },
  { name: "Colorado", data: coloradoData },
  { name: "Connecticut", data: connecticutData },
  { name: "Delaware", data: delawareData },
  { name: "Florida", data: floridaData },
  { name: "Georgia", data: georgiaData },
  { name: "Hawaii", data: hawaiiData },
  { name: "Idaho", data: idahoData },
  { name: "Illinois", data: illinoisData },
  { name: "Indiana", data: indianaData },
  { name: "Iowa", data: iowaData },
  { name: "Kansas", data: kansasData },
  { name: "Kentucky", data: kentuckyData },
  { name: "Louisiana", data: louisianaData },
  { name: "Maine", data: maineData },
  { name: "Maryland", data: marylandData },
  { name: "Massachusetts", data: massachusettsData },
  { name: "Michigan", data: michiganData },
  { name: "Minnesota", data: minnesotaData },
  { name: "Mississippi", data: mississippiData },
  { name: "Missouri", data: missouriData },
  { name: "Montana", data: montanaData },
  { name: "Nebraska", data: nebraskaData },
  { name: "Nevada", data: nevadaData },
  { name: "New Hampshire", data: newHampshireData },
  { name: "New Jersey", data: newJerseyData },
  { name: "New Mexico", data: newMexicoData },
  { name: "New York", data: newYorkData },
  { name: "North Carolina", data: northCarolinaData },
  { name: "North Dakota", data: northDakotaData },
  { name: "Ohio", data: ohioData },
  { name: "Oklahoma", data: oklahomaData },
  { name: "Oregon", data: oregonData },
  { name: "Pennsylvania", data: pennsylvaniaData },
  { name: "Rhode Island", data: rhodeIslandData },
  { name: "South Carolina", data: southCarolinaData },
  { name: "South Dakota", data: southDakotaData },
  { name: "Tennessee", data: tennesseeData },
  { name: "Texas", data: texasData },
  { name: "Utah", data: utahData },
  { name: "Vermont", data: vermontData },
  { name: "Virginia", data: virginiaData },
  { name: "Washington", data: washingtonData },
  { name: "West Virginia", data: westVirginiaData },
  { name: "Wisconsin", data: wisconsinData },
  { name: "Wyoming", data: wyomingData },
  { name: "Washington, D.C.", data: washingtonDCData },
];

function renderCountyRegions() {

  stateListContainer.style.display = "flex";
  stateListContainer.style.flexDirection = "column";
  stateListContainer.style.alignItems = "center";

  stateListContainer.innerHTML = "";

  countyStateGroups.forEach(group => {
    stateListContainer.appendChild(createSection(group.name, group.data));
  });
}

function updateCountyLabel() {

  let greenCount = 0;
  let totalCount = 0;

  countyStateGroups.forEach(group => {
    group.data.forEach(item => {
      totalCount++;
      if (item.color === "green") {
        greenCount++;
      }
    });
  });

  mapLabel.textContent = `${greenCount} / ${totalCount} Counties Observed`;
}

window.addEventListener("DOMContentLoaded", () => {
  const defaultButton = document.querySelector('[data-map="counties"]');
  if (defaultButton) {
    defaultButton.click();
  }
});