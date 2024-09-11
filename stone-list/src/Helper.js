import * as XLSX from 'xlsx';

export const readExcelFile = async (sampleFile, filterCriteria) => {
    console.log('Criteria:', filterCriteria);

    // Fetch the Excel file
    const response = await fetch(sampleFile);
    const buffer = await response.arrayBuffer();

    // Read the Excel file as a workbook
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet data to JSON, with header: 1 to get a 2D array
    const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Assuming the first row contains column headers
    const headers = excelData[0];

    // Map over the rows and add 'img' from item data to each row
    const formattedDataWithImg = excelData.slice(1).map((row, index) => {
        return {
            Name: row[0],
            Description: row[1],
            Price: row[2],
            Images: row[3] ? row[3].replace(/[\[\]]/g, '').split(',') : [], // Remove brackets and split
            Videos: row[4] ? row[4].replace(/[\[\]]/g, '').split(',') : [], // Remove brackets and split
            Files: row[5] ? row[5].replace(/[\[\]]/g, '').split(',') : [], // Remove brackets and split

        };
    });

    let filteredProducts = formattedDataWithImg;

    // Filter products only if filterCriteria is provided
    if (filterCriteria) {
        filteredProducts = formattedDataWithImg.filter(product => {
            // Adjust the filtering logic based on what you want to filter by
            return Object.values(product).some(value => value.toString().toLowerCase().includes(filterCriteria.toLowerCase()));
        });
    }

    console.log('Filtered Products:', filteredProducts);
    return filteredProducts;
};
