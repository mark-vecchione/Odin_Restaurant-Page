import "./styles.css";

// Loading the pages
document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    const path = window.location.pathname;

    // ✅ Fix: Recognize root URL (`/`) as the homepage in Webpack
    if (path.endsWith("template.html") || path === "/" || path === "/template") {
         // Clear existing content before appending new elements
        contentDiv.innerHTML = "";  
        appendHours(contentDiv);
        appendFooter(contentDiv);
    }
});

// Supporting functions

// Append Hours
function appendHours(parentElement) {
    if (document.querySelector(".hours")) return;  

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
    if (document.querySelector(".footer")) return;  

    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    footerDiv.textContent = "Note: This is not a real restaurant";
    parentElement.appendChild(footerDiv);
}
