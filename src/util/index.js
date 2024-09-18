"use strict";
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

/**
 * Create structure of markdown documentation
 * @param {object} docJson
 * @param {string} outputDir - The output directory for the documentation
 */
function createStructureOfMarkdown(docJson, outputDir) {
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Start processing from the root
  processItems(docJson.item, outputDir);
}

/**
 * Process items recursively
 * @param {Array} items
 * @param {string} currentDir - Current directory path
 */
function processItems(items, currentDir) {
  items.forEach((item) => {
    if (item.item instanceof Array) {
      // Create a folder for the collection
      const folderPath = path.join(currentDir, item.name);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      
      // Recursively process items inside this folder
      processItems(item.item, folderPath);
    } else {
      // Process endpoint
      const filePath = path.join(currentDir, `${item.name}.md`);
      const content = readMethods(item);
      writeFile(content, filePath);
    }
  });
}

/**
 * Read methods of each item
 * @param {object} method
 */
function readMethods(method) {
  let markdown = "";

  markdown += `\n`;
  markdown += `## End-point: ${method.name}\n`;
  markdown += method?.request?.description !== undefined
    ? `${method?.request?.description || ""}\n`
    : ``;
  markdown += `### Method: ${method?.request?.method}\n`;
  markdown += `>\`\`\`\n`;
  markdown += `>${method?.request?.url?.raw}\n`;
  markdown += `>\`\`\`\n`;
  markdown += readRequestOptions(method?.request);
  markdown += readFormDataBody(method?.request?.body);
  markdown += readQueryParams(method?.request?.url);
  markdown += readAuthorization(method?.request?.auth);
  markdown += readResponse(method?.response);
  markdown += `\n`;
  markdown += `⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃\n`;

  return markdown;
}

/**
 * Write file
 * @param {string} content
 * @param {string} filePath
 */
function writeFile(content, filePath) {
  fs.writeFile(filePath, content, function (err) {
    if (err) throw err;
    console.log(chalk.green(`Documentation was created correctly: ${filePath}`));
  });
}

// Example usage
const docJson = require('./path-to-your-postman-collection.json');
const outputDir = './docs';
createStructureOfMarkdown(docJson, outputDir);
