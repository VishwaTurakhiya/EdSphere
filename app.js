const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data from requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simulate a simple database with hardcoded data for universities
const universities = {
    harvard: {
        name: "Harvard University",
        ranking: "Top 5 Globally",
        courses: "Engineering, Business, Law, Sciences",
        fees: "₹40,00,000/year",
        admissionCriteria: "SAT/ACT + Interview",
        scholarships: "Merit-based",
        placementRate: "98%"
    },
    stanford: {
        name: "Stanford University",
        ranking: "Top 5 Globally",
        courses: "Engineering, Business, Arts, Law",
        fees: "₹35,00,000/year",
        admissionCriteria: "SAT/ACT + Interview",
        scholarships: "Merit-based",
        placementRate: "97%"
    },
    mit: {
        name: "MIT",
        ranking: "Top 5 Globally",
        courses: "Engineering, Computer Science, Sciences",
        fees: "₹35,00,000/year",
        admissionCriteria: "SAT/ACT + Interview",
        scholarships: "Merit-based",
        placementRate: "95%"
    },
    oxford: {
        name: "Oxford University",
        ranking: "Top 10 Globally",
        courses: "Humanities, Sciences, Business, Law",
        fees: "₹30,00,000/year",
        admissionCriteria: "IELTS/TOEFL + Interview",
        scholarships: "Need-based",
        placementRate: "90%"
    },
    christ: {
        name: "Christ University",
        ranking: "Top 20 in India",
        courses: "Engineering, Business, Arts, Law, Humanities",
        fees: "₹2,50,000/year",
        admissionCriteria: "12th Marks + Entrance Exam",
        scholarships: "Merit-based",
        placementRate: "85%"
    }
};

// API to fetch the comparison data
app.post('/compare', (req, res) => {
    const university1 = req.body.university1;
    const university2 = req.body.university2;

    // Check if both universities exist in the 'database'
    if (universities[university1] && universities[university2]) {
        const result = {
            university1: universities[university1],
            university2: universities[university2]
        };
        return res.json(result);  // Send the data back to the frontend
    } else {
        return res.status(404).json({ message: "One or both universities not found." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
