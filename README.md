# BinBuddy — Building Waste Sorting Assistant

BinBuddy is a responsive, browser-only waste-sorting guide for residents and visitors. Choose a demonstration building, look up an item, and see the recommended bin and building-specific preparation instructions.

## Run it

Open `index.html` in a current browser. No server, installation, account, or external service is required.

## Features

- Three example buildings with separate waste rules and building notes.
- Exact item and alias lookup, with suggestions as you type. Search never invents instructions for an unknown item.
- Category browsing for paper, packaging, glass, organic waste, general waste, and hazardous/electronic items.
- Clear bin names, bin-colour indicators, and concise item-specific disposal steps.
- A rule manager for adding rules or editing existing rules and aliases for the selected building.
- Rule changes saved in this browser using `localStorage`.
- A reset control that restores the original example rules after confirmation.
- Keyboard-operable controls, visible focus, responsive layouts, empty states, and confirmation/error messages.

## Customize demonstration rules

The editable starter dataset is near the top of `script.js` in `DEMO_BUILDINGS`. Each building has its own `rules` array and `guidelines`. A rule includes an `id`, `item`, `category`, `bin`, `color`, `instructions`, and `aliases`. The in-app rule manager saves edits locally, overriding the starter rules on that browser. Reset removes the locally saved overrides and restores the starter dataset.

Supported categories are declared in `CATEGORIES`. Bin colours are selected in the rule editor; add a matching colour to the `--bin-*` CSS variables in `style.css` if you add a new colour.

## Limitations and accuracy

All building names, rules, bins, and notes in this app are demonstration data. They are not authoritative local regulations. Waste services vary by municipality and building, so residents should confirm instructions with their building team or local waste authority. BinBuddy intentionally shows “no rule available” rather than guessing when an item has no exact item-name or alias match.

Changes are stored only in the current browser on the current device. They are not shared with other residents and may be cleared when browser data is removed. There is no backend, online synchronization, or official request service.
