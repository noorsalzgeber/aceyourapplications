document.getElementById("fetch-job-details-button").addEventListener("click", function() {
    const jobLink = document.getElementById("job-description-input").value;

    // Extract job ID from the link (make sure it points to a valid job)
    const jobId = jobLink.split('/').pop();

    // Fetch job details from GitHub Jobs API
    fetch(`https://jobs.github.com/positions/${jobId}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const jobTitle = data.title;
            const jobDescription = data.description;
            document.getElementById("job-details").innerHTML = `<h3>${jobTitle}</h3><p>${jobDescription}</p>`;
        })
        .catch(error => {
            console.error("Error fetching job details:", error);
            alert("Failed to fetch job details. Please check the link.");
        });
});
