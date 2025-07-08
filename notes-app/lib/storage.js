const STORAGE_KEY = "notes";

/**
 * @returns {Array} Array of note objects from localStorage
 */
export function loadNotes() {
    if (typeof window === "undefined") return [];

    const savedNotes = localStorage.getItem(STORAGE_KEY);
    if (savedNotes) {
        try {
            return JSON.parse(savedNotes);
        } catch (error) {
            console.error("Failed to parse notes from localStorage", error);
            return [];
        }
    }
    return [];
}

/**
 * @param {Array} notes
 */
export function saveNotes(notes) {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

/**
 * @param {number} timestamp
 * @returns {string}
 */
export function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
