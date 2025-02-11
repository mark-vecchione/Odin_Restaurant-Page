import "./styles.css";

// Loading the pages
document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    // Clear existing content before appending new elements
    contentDiv.innerHTML = "";  

    const path = window.location.pathname;

    // Homepage (index.html)
    if (path.endsWith("index.html") || path === "/" || path === "") {
        appendHours(contentDiv);
        appendFooter(contentDiv);
    }
});

// Supporting functions

// Append Hours
function appendHours(parentElement) {
    // Prevent duplicate hours section
    if (document.querySelector(".hours")) return;  // ✅ Ensures hours section is not appended twice

    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");

    const hoursTitle = document.createElement("div");
    hoursTitle.classList.add("hours_title");
    hoursTitle.textContent = "Hours";
    hoursDiv.appendChild(hoursTitle);

    const hoursList = document.createElement("ul");
    hoursList.classList.add("days");

    const days = [
        "Sunday: 10am-7pm",
        "Monday: Closed",
        "Tuesday: Closed",
        "Wednesday: 5pm-12am",
        "Thursday: 5pm-12am",
        "Friday: 5pm-12am",
        "Saturday: 5pm-12am"
    ];

    days.forEach(day => {
        const li = document.createElement("li");
        li.textContent = day;
        hoursList.appendChild(li);
    });

    hoursDiv.appendChild(hoursList);
    parentElement.appendChild(hoursDiv);
}

// Append Footer
function appendFooter(parentElement) {
    // Prevent duplicate footer section
    if (document.querySelector(".footer")) return;  // ✅ Ensures footer is not appended twice

    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    footerDiv.textContent = "Note: This is not a real restaurant";
    parentElement.appendChild(footerDiv);
}
