
//  ┌──────────────────────────┐
//  │ GodUi Modern Grid system │
//  └──────────────────────────┘

grid = document.querySelector('*[G]');
    grid_values = grid.getAttribute('G').split('|');
    grid.style.cssText += `grid-column: ${grid_values[0]}; grid-row: ${grid_values[1]};`;