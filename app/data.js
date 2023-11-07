/* 
This file ensures any global data
can be accessed from any file, e.g.
blog data and glossary data
*/
const fs = require('fs');
const path = require('path');

const blogData = []

function readGlossaryData() {
    const filePath = path.join(__dirname, 'data', 'glossary.json');
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading glossary data:', error);
        return [];
    }
}

// populates arr from json:
glossaryData = readGlossaryData();
// sorts glossary alphabetically:
glossaryData.sort((a, b) => a.term.localeCompare(b.term));

module.exports = {
    blogData,
    glossaryData,
};