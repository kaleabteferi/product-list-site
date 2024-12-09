function showDetails(button) {
    const detailsDiv = button.nextElementSibling;
  
    if (detailsDiv.style.display === "block") {
      detailsDiv.style.display = "none";
      button.textContent = "Learn More";
    } else {
      detailsDiv.style.display = "block";
      button.textContent = "Show Less";
    }
  }
  