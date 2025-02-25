// src/projects/idCounter.js
let currentId = 0; // Comece após o último ID usado (conforme os IDs anteriores)

export function getNextId() {
    return currentId++;
}