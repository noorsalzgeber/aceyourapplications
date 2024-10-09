// Handle CV Upload
document.getElementById('cv-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        alert(`Uploaded CV: ${file.name}`);
    }
});

// Fetch job details from URL
document.getElementById('fetch-job-details').addEventListener('click', function() {
    const jobUrl = document.getElementById('job-url').value;
    if (jobUrl) {
        alert(`Fetching job details from: ${jobUrl}`);
        // Here, you can add the logic to fetch job details using an API or web scraping
    } else {
        alert('Please enter a valid job URL.');
    }
});

// Generate CV and Cover Letter bundle
document.getElementById('generate-bundle').addEventListener('click', function() {
    alert('Generating CV and Cover Letter based on job details...');
    // Here, you would include the logic to generate the documents
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>CV and Cover Letter generated successfully!</p>';
});

// Watchlist feature
document.getElementById('add-watchlist').addEventListener('click', function() {
    const watchlistUrl = document.getElementById('watchlist-url').value;
    if (watchlistUrl) {
        const ul = document.getElementById('watchlist-items');
        const li = document.createElement('li');
        li.textContent = watchlistUrl;
        ul.appendChild(li);
        document.getElementById('watchlist-url').value = '';
    } else {
        alert('Please enter a valid URL.');
    }
});

}
