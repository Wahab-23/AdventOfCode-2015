const fs = require('fs');

// How many total square feet of wrapping paper should they order?

// Function to calculate the wrapping paper needed for a single box
const calculateWrappingPaper = (dimensions) => {
    const [l, w, h] = dimensions.split('x').map(Number);
    const lw = l * w;
    const wh = w * h;
    const hl = h * l;
    const surfaceArea = 2 * (lw + wh + hl);
    const smallestSideArea = Math.min(lw, wh, hl);
    return surfaceArea + smallestSideArea;
};

// Read the input file and calculate the total wrapping paper needed
fs.readFile('./input-day-2.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const giftsArray = data.split('\n').filter(line => line.trim() !== '');
        let totalWrappingPaper = 0;

        for (let i = 0; i < giftsArray.length; i++) {
            const gift = giftsArray[i];
            const wrappingPaper = calculateWrappingPaper(gift);
            totalWrappingPaper += wrappingPaper;
        }

        console.log(`Total wrapping paper needed: ${totalWrappingPaper} square feet`);
    }
});