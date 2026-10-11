"use strict";

const STORAGE_KEY = "binbuddy-demo-rules-v1";

const CATEGORIES = [
  { id: "paper", label: "Paper", icon: "📄" },
  { id: "packaging", label: "Packaging", icon: "📦" },
  { id: "glass", label: "Glass", icon: "🫙" },
  { id: "organic", label: "Organic waste", icon: "🍃" },
  { id: "general", label: "General waste", icon: "🗑️" },
  { id: "hazardous", label: "Hazardous & electronic", icon: "🔋" }
];

const BIN_ICONS = { green: "♻", blue: "▤", yellow: "↗", brown: "♧", black: "▤", red: "⚠", grey: "▤" };

const DEMO_BUILDINGS = [
  {
    id: "maple-court",
    name: "Maple Court · 18 Garden Lane",
    guidelines: [
      "Flatten cardboard and keep paper dry before recycling.",
      "Rinse containers; leave labels on and lids off.",
      "Food scraps go in the lidded green caddy by the loading bay."
    ],
    rules: [
      { id: "mc-bottle", item: "Plastic bottle", category: "packaging", bin: "Mixed recycling", color: "yellow", instructions: "Empty and give it a quick rinse. Put the bottle in loose; leave the cap off in the same bin.", aliases: ["plastic water bottle", "water bottle", "soda bottle"] },
      { id: "mc-box", item: "Pizza box", category: "paper", bin: "Paper & cardboard", color: "blue", instructions: "Remove leftover food. This building accepts clean and lightly marked cardboard in the paper bin; heavily greasy parts go in general waste.", aliases: ["pizza carton"] },
      { id: "mc-jar", item: "Glass jar", category: "glass", bin: "Glass bank", color: "green", instructions: "Empty and rinse it, then place it in the glass bank beside the loading bay. Remove the lid and put that in mixed recycling.", aliases: ["jam jar", "glass bottle"] },
      { id: "mc-battery", item: "Battery", category: "hazardous", bin: "Battery box", color: "red", instructions: "Do not put batteries in household bins. Use the labelled battery box in the lobby; tape the ends of loose lithium batteries.", aliases: ["household battery", "lithium battery"] },
      { id: "mc-peel", item: "Banana peel", category: "organic", bin: "Food scraps caddy", color: "brown", instructions: "Place it in the lidded food-scraps caddy by the loading bay. Please use a paper liner, not a plastic bag.", aliases: ["fruit peel", "food scraps"] },
      { id: "mc-newspaper", item: "Newspaper", category: "paper", bin: "Paper & cardboard", color: "blue", instructions: "Keep it clean and dry and place it in the paper bin. Flatten the bundle so the lid can close.", aliases: ["news paper", "magazine"] },
      { id: "mc-can", item: "Aluminium can", category: "packaging", bin: "Mixed recycling", color: "yellow", instructions: "Empty and rinse the can, then put it loose in mixed recycling. Do not crush it.", aliases: ["soda can", "drink can"] },
      { id: "mc-bag", item: "Plastic bag", category: "general", bin: "General waste", color: "black", instructions: "Place it in general waste. Soft plastic is not accepted in this building's recycling bins.", aliases: ["carrier bag", "shopping bag"] },
      { id: "mc-electronics", item: "Small electronics", category: "hazardous", bin: "E-waste shelf", color: "red", instructions: "Leave small devices on the marked e-waste shelf in the lobby; do not place them in a household bin.", aliases: ["old phone", "charger", "electronic waste"] }
    ]
  },
  {
    id: "harbour-flats",
    name: "Harbour Flats · 4 Quay Street",
    guidelines: [
      "Use the clearly marked recycling stations on each floor.",
      "Please don't leave loose bags beside the bins.",
      "The compost caddy is in the shared courtyard; no compostable plastic liners."
    ],
    rules: [
      { id: "hf-bottle", item: "Plastic bottle", category: "packaging", bin: "Containers", color: "blue", instructions: "Empty, rinse and replace the cap before putting the bottle in the blue containers bin on your floor.", aliases: ["plastic water bottle", "water bottle", "soda bottle"] },
      { id: "hf-box", item: "Pizza box", category: "paper", bin: "General waste", color: "black", instructions: "Our paper chute is for clean paper only. Please put pizza boxes, including clean ones, in the general-waste bin.", aliases: ["pizza carton"] },
      { id: "hf-jar", item: "Glass jar", category: "glass", bin: "Glass recycling", color: "green", instructions: "Empty and rinse the jar. Put it in the courtyard glass bank; remove metal lids and place them in Containers.", aliases: ["jam jar", "glass bottle"] },
      { id: "hf-battery", item: "Battery", category: "hazardous", bin: "E-waste cabinet", color: "red", instructions: "Take batteries to the locked e-waste cabinet in the concierge lobby. Ask the concierge to open it; never use a regular bin.", aliases: ["household battery", "lithium battery"] },
      { id: "hf-peel", item: "Banana peel", category: "organic", bin: "Courtyard compost", color: "brown", instructions: "Add it to the shared compost caddy in the courtyard. Keep it free of wrappers and plastic liners.", aliases: ["fruit peel", "food scraps"] },
      { id: "hf-newspaper", item: "Newspaper", category: "paper", bin: "Paper chute", color: "blue", instructions: "Keep it dry and place it in the paper chute on your floor. Please don't include pizza boxes or tissues.", aliases: ["news paper", "magazine"] },
      { id: "hf-can", item: "Aluminium can", category: "packaging", bin: "Containers", color: "blue", instructions: "Empty and rinse the can, replace the tab if loose, and place it in the blue containers bin.", aliases: ["soda can", "drink can"] },
      { id: "hf-bag", item: "Plastic bag", category: "general", bin: "General waste", color: "black", instructions: "Put soft plastic bags in general waste. Do not put them in the floor recycling station.", aliases: ["carrier bag", "shopping bag"] },
      { id: "hf-electronics", item: "Small electronics", category: "hazardous", bin: "E-waste cabinet", color: "red", instructions: "Ask the concierge to open the e-waste cabinet in the lobby. Do not leave devices by the floor bins.", aliases: ["old phone", "charger", "electronic waste"] }
    ]
  },
  {
    id: "cedar-house",
    name: "Cedar House · 72 Willow Road",
    guidelines: [
      "Use the courtyard stations; bins are collected on Tuesday and Friday.",
      "Flatten cartons and cardboard before placing them in recycling.",
      "Tie general-waste bags securely and keep the bin area clear."
    ],
    rules: [
      { id: "ch-bottle", item: "Plastic bottle", category: "packaging", bin: "Mixed recycling", color: "yellow", instructions: "Empty and rinse the bottle. This building accepts bottles with caps on in the yellow mixed-recycling bin.", aliases: ["plastic water bottle", "water bottle", "soda bottle"] },
      { id: "ch-box", item: "Pizza box", category: "paper", bin: "Cardboard recycling", color: "blue", instructions: "Scrape off food and flatten the box. Place it in the cardboard cage in the courtyard; very greasy sections go in general waste.", aliases: ["pizza carton"] },
      { id: "ch-jar", item: "Glass jar", category: "glass", bin: "General waste", color: "black", instructions: "Glass is not collected in this building's regular recycling. Wrap the empty jar securely and place it in general waste to prevent breakage.", aliases: ["jam jar", "glass bottle"] },
      { id: "ch-battery", item: "Battery", category: "hazardous", bin: "Reception collection", color: "red", instructions: "Hand batteries to reception during opening hours. Never place them in the courtyard bins.", aliases: ["household battery", "lithium battery"] },
      { id: "ch-peel", item: "Banana peel", category: "organic", bin: "General waste", color: "black", instructions: "This building does not have a food-waste collection. Tie it inside your general-waste bag.", aliases: ["fruit peel", "food scraps"] },
      { id: "ch-newspaper", item: "Newspaper", category: "paper", bin: "Cardboard recycling", color: "blue", instructions: "Keep it dry and place it in the paper section of the courtyard cardboard cage.", aliases: ["news paper", "magazine"] },
      { id: "ch-can", item: "Aluminium can", category: "packaging", bin: "Mixed recycling", color: "yellow", instructions: "Empty and rinse the can before placing it in the yellow mixed-recycling bin.", aliases: ["soda can", "drink can"] },
      { id: "ch-bag", item: "Plastic bag", category: "general", bin: "General waste", color: "black", instructions: "Place soft plastic bags inside your tied general-waste bag. They are not accepted in mixed recycling here.", aliases: ["carrier bag", "shopping bag"] },
      { id: "ch-electronics", item: "Small electronics", category: "hazardous", bin: "Reception collection", color: "red", instructions: "Contact reception to arrange drop-off for small electronics. Do not put devices in any courtyard bin.", aliases: ["old phone", "charger", "electronic waste"] }
    ]
  }
];

const $ = (selector) => document.querySelector(selector);
const buildingSelect = $("#building-select");
const itemSearch = $("#item-search");
const categoryList = $("#category-list");
const itemList = $("#item-list");
const resultPlaceholder = $("#result-placeholder");
const resultContent = $("#result-content");
const toast = $("#toast");
const rulesDialog = $("#rules-dialog");
let activeBuildingId = DEMO_BUILDINGS[0].id;
let activeCategory = "all";
let lastSearchQuery = "";
let toastTimer;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalize(value) {
  return value.trim().toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function currentBuilding() {
  return DEMO_BUILDINGS.find((building) => building.id === activeBuildingId);
}

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.toggle("toast-error", isError);
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 4200);
}

function getSavedData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Saved demo rules have an invalid format.");
  }
  for (const [buildingId, rules] of Object.entries(parsed)) {
    if (!DEMO_BUILDINGS.some((building) => building.id === buildingId) || !Array.isArray(rules)) {
      throw new Error("Saved demo rules could not be matched to a building.");
    }
    for (const rule of rules) {
      if (!rule || typeof rule.id !== "string" || typeof rule.item !== "string" ||
          typeof rule.category !== "string" || typeof rule.bin !== "string" ||
          typeof rule.color !== "string" || typeof rule.instructions !== "string" ||
          !Array.isArray(rule.aliases)) {
        throw new Error("A saved rule is incomplete or invalid.");
      }
    }
  }
  return parsed;
}

function loadSavedRules() {
  try {
    const saved = getSavedData();
    for (const building of DEMO_BUILDINGS) {
      if (saved[building.id]) building.rules = saved[building.id];
    }
  } catch (error) {
    showToast(`${error.message} The original demo rules are shown instead. Reset the demo to clear saved data.`, true);
  }
}

function persistRules(buildingId, rules) {
  const allRules = Object.fromEntries(DEMO_BUILDINGS.map((building) => [
    building.id,
    building.id === buildingId ? rules : building.rules
  ]));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allRules));
  } catch (error) {
    showToast(`Could not save changes in this browser: ${error.message}`, true);
    return false;
  }
  return true;
}

function renderBuildings() {
  buildingSelect.replaceChildren(...DEMO_BUILDINGS.map((building) => {
    const option = document.createElement("option");
    option.value = building.id;
    option.textContent = building.name;
    return option;
  }));
  buildingSelect.value = activeBuildingId;
}

function categoryFor(categoryId) {
  return CATEGORIES.find((category) => category.id === categoryId);
}

function renderCategories() {
  const choices = [{ id: "all", label: "Everything", icon: "✳" }, ...CATEGORIES];
  categoryList.replaceChildren(...choices.map((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-chip";
    button.setAttribute("aria-pressed", String(activeCategory === category.id));
    const icon = document.createElement("span");
    icon.className = "category-emoji";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = category.icon;
    const label = document.createElement("span");
    label.textContent = category.label;
    button.append(icon, label);
    button.addEventListener("click", () => {
      activeCategory = category.id;
      renderCategories();
      renderItemList();
    });
    return button;
  }));
}

function filteredRules() {
  const rules = currentBuilding().rules;
  return activeCategory === "all" ? rules : rules.filter((rule) => rule.category === activeCategory);
}

function renderItemList() {
  const rules = filteredRules();
  const categoryLabel = activeCategory === "all" ? "Popular items" : `${categoryFor(activeCategory)?.label ?? "Items"}`;
  $("#browse-title").textContent = categoryLabel;
  $("#browse-count").textContent = `${rules.length} ${rules.length === 1 ? "item" : "items"}`;
  $("#empty-category").hidden = rules.length > 0;
  itemList.replaceChildren(...rules.map((rule) => {
    const category = categoryFor(rule.category);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "item-card";
    button.setAttribute("aria-label", `Show sorting instructions for ${rule.item}`);
    const icon = document.createElement("span");
    icon.className = "item-card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = category?.icon ?? "♻";
    const text = document.createElement("span");
    text.className = "item-card-text";
    const name = document.createElement("span");
    name.className = "item-card-name";
    name.textContent = rule.item;
    const bin = document.createElement("span");
    bin.className = "item-card-bin";
    bin.textContent = rule.bin;
    text.append(name, bin);
    button.append(icon, text);
    button.addEventListener("click", () => {
      itemSearch.value = rule.item;
      lastSearchQuery = rule.item;
      showRule(rule);
    });
    return button;
  }));
}

function renderBuildingInfo() {
  const building = currentBuilding();
  $("#info-building-name").textContent = building.name;
  $("#guideline-list").replaceChildren(...building.guidelines.map((guideline) => {
    const item = document.createElement("li");
    item.textContent = guideline;
    return item;
  }));
}

function showRule(rule) {
  const category = categoryFor(rule.category);
  resultPlaceholder.hidden = true;
  resultContent.hidden = false;
  resultContent.style.setProperty("--bin-color", `var(--bin-${rule.color})`);
  resultContent.replaceChildren();

  const banner = document.createElement("div");
  banner.className = "result-banner";
  const binIcon = document.createElement("span");
  binIcon.className = "result-bin-icon";
  binIcon.setAttribute("aria-hidden", "true");
  binIcon.textContent = BIN_ICONS[rule.color] ?? "♻";
  const binMeta = document.createElement("div");
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = `${rule.color} BIN · ${currentBuilding().name}`;
  const binName = document.createElement("p");
  binName.className = "result-bin-name";
  binName.textContent = rule.bin;
  binMeta.append(eyebrow, binName);
  banner.append(binIcon, binMeta);

  const body = document.createElement("div");
  body.className = "result-body";
  const itemLabel = document.createElement("p");
  itemLabel.className = "result-item-label";
  itemLabel.textContent = "Your item";
  const itemName = document.createElement("p");
  itemName.className = "result-item-name";
  itemName.textContent = rule.item;
  const instructions = document.createElement("p");
  instructions.className = "result-instructions";
  instructions.textContent = rule.instructions;
  const badge = document.createElement("span");
  badge.className = "result-category";
  badge.textContent = `${category?.icon ?? ""} ${category?.label ?? "Other"}`;
  body.append(itemLabel, itemName, instructions, badge);
  resultContent.append(banner, body);
}

function showUnknown(query) {
  resultPlaceholder.hidden = true;
  resultContent.hidden = false;
  resultContent.style.removeProperty("--bin-color");
  resultContent.replaceChildren();

  const banner = document.createElement("div");
  banner.className = "result-banner unknown-banner";
  const icon = document.createElement("span");
  icon.className = "result-bin-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "?";
  const meta = document.createElement("div");
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "NO MATCHING RULE";
  const title = document.createElement("p");
  title.className = "result-bin-name";
  title.textContent = "We don’t know this one yet";
  meta.append(eyebrow, title);
  banner.append(icon, meta);

  const body = document.createElement("div");
  body.className = "result-body";
  const searched = document.createElement("p");
  searched.className = "result-item-name";
  searched.textContent = `“${query}”`;
  const text = document.createElement("p");
  text.className = "result-instructions";
  text.textContent = `There’s no saved rule for this item at ${currentBuilding().name}. We won’t guess—check the building notes or ask your building team.`;
  const help = document.createElement("div");
  help.className = "unknown-help";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button-outline";
  button.textContent = "View building notes";
  button.addEventListener("click", () => {
    $("#building-info-heading").focus({ preventScroll: true });
    $(".building-info").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  help.append(button);
  body.append(searched, text, help);
  resultContent.append(banner, body);
}

function findRule(query) {
  const sought = normalize(query);
  return currentBuilding().rules.find((rule) =>
    [rule.item, ...rule.aliases].some((name) => normalize(name) === sought)
  );
}

function search(query) {
  const clean = query.trim();
  if (!clean) {
    showToast("Type an item name to find its sorting instructions.", true);
    itemSearch.focus();
    return;
  }
  lastSearchQuery = clean;
  const rule = findRule(clean);
  if (rule) {
    showRule(rule);
    hideSuggestions();
  } else {
    showUnknown(clean);
    hideSuggestions();
  }
}

function hideSuggestions() {
  const suggestions = $("#search-suggestions");
  suggestions.hidden = true;
  itemSearch.setAttribute("aria-expanded", "false");
  suggestions.replaceChildren();
}

function renderSuggestions() {
  const query = normalize(itemSearch.value);
  const suggestions = $("#search-suggestions");
  if (query.length < 2) {
    hideSuggestions();
    return;
  }
  const found = currentBuilding().rules.filter((rule) =>
    [rule.item, ...rule.aliases].some((name) => normalize(name).includes(query))
  ).slice(0, 5);
  suggestions.replaceChildren();
  if (found.length === 0) {
    hideSuggestions();
    return;
  }
  for (const rule of found) {
    const entry = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("role", "option");
    button.textContent = `${rule.item} — ${rule.bin}`;
    button.addEventListener("click", () => {
      itemSearch.value = rule.item;
      search(rule.item);
    });
    entry.append(button);
    suggestions.append(entry);
  }
  suggestions.hidden = false;
  itemSearch.setAttribute("aria-expanded", "true");
}

function renderRuleDialog() {
  const categorySelect = $("#rule-category");
  categorySelect.replaceChildren(...CATEGORIES.map((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = `${category.icon} ${category.label}`;
    return option;
  }));
  $("#rules-building-name").textContent = currentBuilding().name;
  const selector = $("#existing-rule-select");
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Choose a rule to edit…";
  selector.replaceChildren(placeholder, ...currentBuilding().rules.map((rule) => {
    const option = document.createElement("option");
    option.value = rule.id;
    option.textContent = `${rule.item} → ${rule.bin}`;
    return option;
  }));
}

function clearRuleForm() {
  $("#rule-form").reset();
  $("#rule-id").value = "";
  $("#rule-color").value = "green";
  $("#existing-rule-select").value = "";
  $("#dialog-heading").textContent = "Manage sorting rules";
}

function loadRuleIntoForm(ruleId) {
  const rule = currentBuilding().rules.find((candidate) => candidate.id === ruleId);
  if (!rule) return;
  $("#rule-id").value = rule.id;
  $("#rule-item").value = rule.item;
  $("#rule-category").value = rule.category;
  $("#rule-bin").value = rule.bin;
  $("#rule-color").value = rule.color;
  $("#rule-instructions").value = rule.instructions;
  $("#rule-aliases").value = rule.aliases.join(", ");
  $("#dialog-heading").textContent = `Edit ${rule.item}`;
}

function saveRule(event) {
  event.preventDefault();
  const id = $("#rule-id").value;
  const previousRule = id ? currentBuilding().rules.find((rule) => rule.id === id) : null;
  const item = $("#rule-item").value.trim();
  const category = $("#rule-category").value;
  const bin = $("#rule-bin").value.trim();
  const color = $("#rule-color").value;
  const instructions = $("#rule-instructions").value.trim();
  const aliases = $("#rule-aliases").value.split(",").map((alias) => alias.trim()).filter(Boolean);
  if (!item || !category || !bin || !color || !instructions) {
    showToast("Fill in each required field before saving.", true);
    return;
  }
  const normalizedNames = [item, ...aliases].map(normalize);
  if (new Set(normalizedNames).size !== normalizedNames.length) {
    showToast("The item name and aliases must be unique within this rule.", true);
    return;
  }
  const collision = currentBuilding().rules.find((rule) =>
    rule.id !== id && [rule.item, ...rule.aliases].some((name) => normalizedNames.includes(normalize(name)))
  );
  if (collision) {
    showToast(`“${collision.item}” already uses that name or alias. Please choose a different one.`, true);
    return;
  }
  const updated = { id: id || `custom-${Date.now()}`, item, category, bin, color, instructions, aliases };
  const nextRules = id
    ? currentBuilding().rules.map((rule) => rule.id === id ? updated : rule)
    : [...currentBuilding().rules, updated];
  if (!persistRules(activeBuildingId, nextRules)) return;
  currentBuilding().rules = nextRules;
  if (previousRule && [previousRule.item, ...previousRule.aliases].some((name) => normalize(name) === normalize(lastSearchQuery))) {
    lastSearchQuery = item;
    itemSearch.value = item;
  }
  activeCategory = "all";
  renderCategories();
  renderItemList();
  renderRuleDialog();
  clearRuleForm();
  if (lastSearchQuery) search(lastSearchQuery);
  showToast(id ? `${item} updated for ${currentBuilding().name}.` : `${item} added for ${currentBuilding().name}.`);
}

function switchBuilding(buildingId) {
  activeBuildingId = buildingId;
  activeCategory = "all";
  renderCategories();
  renderItemList();
  renderBuildingInfo();
  renderRuleDialog();
  hideSuggestions();
  if (lastSearchQuery) {
    search(lastSearchQuery);
  } else {
    resultPlaceholder.hidden = false;
    resultContent.hidden = true;
  }
}

function resetDemo() {
  if (!window.confirm("Restore the original example rules for all buildings? Your saved demo edits will be removed.")) return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    showToast(`Could not clear saved rules: ${error.message}`, true);
    return;
  }
  for (const building of DEMO_BUILDINGS) {
    const original = ORIGINAL_RULES.find((entry) => entry.id === building.id);
    building.rules = clone(original.rules);
  }
  renderCategories();
  renderItemList();
  renderBuildingInfo();
  renderRuleDialog();
  clearRuleForm();
  resultPlaceholder.hidden = false;
  resultContent.hidden = true;
  itemSearch.value = "";
  lastSearchQuery = "";
  showToast("Demo rules restored to their original examples.");
}

const ORIGINAL_RULES = clone(DEMO_BUILDINGS.map((building) => ({ id: building.id, rules: building.rules })));

function init() {
  loadSavedRules();
  renderBuildings();
  renderCategories();
  renderItemList();
  renderBuildingInfo();
  renderRuleDialog();

  buildingSelect.addEventListener("change", () => switchBuilding(buildingSelect.value));
  $("#search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    search(itemSearch.value);
  });
  itemSearch.addEventListener("input", renderSuggestions);
  itemSearch.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideSuggestions();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest("#search-form")) hideSuggestions();
  });
  $("#show-all-button").addEventListener("click", () => {
    activeCategory = "all";
    renderCategories();
    renderItemList();
  });
  $("#manage-button").addEventListener("click", () => {
    clearRuleForm();
    renderRuleDialog();
    rulesDialog.showModal();
    $("#rule-item").focus();
  });
  $("#close-dialog").addEventListener("click", () => rulesDialog.close());
  $("#cancel-rule").addEventListener("click", () => rulesDialog.close());
  $("#new-rule-button").addEventListener("click", clearRuleForm);
  $("#existing-rule-select").addEventListener("change", (event) => {
    if (event.target.value) loadRuleIntoForm(event.target.value);
    else clearRuleForm();
  });
  $("#rule-form").addEventListener("submit", saveRule);
  $("#reset-button").addEventListener("click", resetDemo);
}

init();
