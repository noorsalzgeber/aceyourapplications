const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

// Middleware for serving static files (HTML, CSS)
app.use(express.static('public'));

// Endpoint for scraping job data from URLs
app.post('/scrape-job', async (req, res) => {
    const jobURL = req.body.url;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(jobURL);

    // Scrape data (modify selectors as per the job site)
    const jobData = await page.evaluate(() => {
        const title = document.querySelector('.job-title').innerText;
        const company = document.querySelector('.company-name').innerText;
        const applicationDate = new Date().toLocaleDateString();
        return { title, company, applicationDate };
    });

    await browser.close();
    res.json(jobData);  // Send data back to the client
});

// CV and Cover Letter Generator
const generateCV = require('./src/generator');
app.post('/generate-documents', (req, res) => {
    const { jobData, userInfo } = req.body;
    const documents = generateCV(jobData, userInfo);
    res.send(documents);  // Return generated files
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
