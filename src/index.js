"use strict";
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const minimist = require("minimist");

/**
 * Create structure of markdown documentation
 * @param {object} docJson
 * @param {string} outputDir - The output directory for the documentation
 */
function createStructureOfMarkdown(docJson, outputDir) {
  if (!fs.existsSync(outputDir)) {
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
  const apiMethod = method?.request?.method;

  let badgeColor;
  let badgeText;
  
  switch (apiMethod) {
    case 'GET':
      badgeColor = '#177e23';  // Darker green
      break;
    case 'POST':
      badgeColor = '#fbe07c';  // Yellow
      break;
    case 'PUT':
      badgeColor = '#2274a5';  // Darker blue
      break;
    case 'PATCH':
      badgeColor = '#7711A7';  // Vibrant purple
      break;
    case 'DELETE':
      badgeColor = '#ef6f6c';  // Darker red
      break;
    case 'HEAD':
      badgeColor = '#177e23';  // Darker green
      break;
    case 'OPTIONS':
      badgeColor = '#75113C';  // Deep pink
      break;
    default:
      badgeColor = '#FFFFFF';  // Default color
  }
  
  let apiMethodText = `<img src="https://img.shields.io/badge/${apiMethod}-${badgeColor.slice(1)}?style=flat" alt="${apiMethod}" style="height: 30px;"/>`;
  

  let markdown = "";

  markdown += `\n`;
  markdown += `##  ${apiMethodText} ${method.name}\n`;
  markdown += method?.request?.description !== undefined
    ? `${method?.request?.description || ""}\n`
    : ``;

  markdown += `\`\`\`\n`;
  markdown += `${method?.request?.url?.raw}\n`;
  markdown += `\`\`\`\n`;
  markdown += readRequestOptions(method?.request);
  markdown += readFormDataBody(method?.request?.body);
  markdown += readAuthorization(method?.request?.auth);
  markdown += readSampleRequests(method?.response);
  markdown += readSampleResponses(method?.response);
  markdown += `\n`;
  markdown += `---\n`;

  return markdown;
}

/**
 * Read sample requests and render them in tabs
 * @param {object} response
 */

function jsonToCurl(request) {
  let curlCommand = `curl --location --request ${request.method} '${request.url.raw}' \\\n`;

  // Add headers
  request.header.forEach(header => {
    curlCommand += `--header '${header.key}: ${header.value}' \\\n`;
  });

  // Add body if it exists
  if (request.body && request.body.raw) {
    
    const parsedBody = JSON.parse(request.body.raw);
    const formattedBody = JSON.stringify(parsedBody, null, 4);

    curlCommand += `--data '${formattedBody}'`;
  }

  return curlCommand.trim();
}


function readSampleRequests(responses) {
  let markdown = "";
 if (responses.length){
  markdown += `## Sample Request\n\n`;

    // Open tabs block
    markdown += `{% tabs %}\n`;

    responses.forEach((req) => {
      const curlCommand = jsonToCurl(req.originalRequest);

      // Open individual tab with the request name or number
      markdown += `  {% tab title="${req.name}" %}\n`;
      markdown += `\`\`\`bash\n`; // Format as bash for cURL
      markdown += `${curlCommand}\n`;
      markdown += `\`\`\`\n`;
      // Close individual tab
      markdown += `  {% endtab %}\n`;
    });

    // Close tabs block
    markdown += `{% endtabs %}\n\n`;
  } 

  return markdown;
}


/**
 * Read sample responses and render them in tabs
 * @param {array} responses
 */
function readSampleResponses(responses) {
  let markdown = "";
  if (responses?.length) {
    markdown += `## Sample Response\n`;
    markdown += `\n`;
    
    markdown += `{% tabs %}\n`; // Open tabs block
    responses.forEach((response) => {
      // Parse and beautify JSON body
      let beautifiedJson;
      try {
        const parsedJson = JSON.parse(response.body);
        beautifiedJson = JSON.stringify(parsedJson, null, 2);
      } catch (error) {
        beautifiedJson = `Error parsing JSON: ${error.message}`;
      }
      
      markdown += `  {% tab title="${response.name}" %}\n`; // Open individual tab
      markdown += `\`\`\`json\n`;
      markdown += `${beautifiedJson}\n`;
      markdown += `\`\`\`\n`;
      markdown += `  {% endtab %}\n`; // Close individual tab
    });
    markdown += `{% endtabs %}\n`; // Close tabs block

    markdown += `\n`;
  }

  
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

/**
 * Read auth of each method
 * @param {object} auth
 */
function readAuthorization(auth) {
  let markdown = "";
  if (auth) {
    markdown += `### 🔑 Authentication ${auth.type}\n`;
    markdown += `\n`;
    markdown += `|Param|Value|Type|\n`;
    markdown += `|---|---|---|\n`;
    if (auth.bearer) {
      auth.bearer.map((auth) => {
        markdown += `|${auth.key}|${auth.value}|${auth.type}|\n`;
      });
    }
    markdown += `\n`;
  }

  return markdown;
}

/**
 * Read request of each method
 * @param {object} request information
 * @return {string} info of data about request options
 */
function readRequestOptions(request) {
  let markdown = "";
  if (request) {
    // Headers
    markdown += `### Headers\n`;
    markdown += `\n`;
    markdown += `|Content-Type|Value|\n`;
    markdown += `|---|---|\n`;
    request.header.map((header) => {
      markdown += `|${header.key}|${header.value}|\n`;
    });
    markdown += `\n`;

    // Query Params
    markdown += readQueryParams(request.url);
  }
  return markdown;
}

/**
 * Read query parameters
 * @param {object} url
 * @return {string} markdown content for query parameters
 */
function readQueryParams(url) {
  let markdown = "";
  if (url?.query) {
    markdown += `### Query Parameters\n`;
    markdown += `\n`;
    markdown += `|Param|Value|\n`;
    markdown += `|---|---|\n`;
    url.query.map((query) => {
      markdown += `|${query.key}|${query.value}|\n`;
    });
    markdown += `\n`;
  }

  return markdown;
}

/**
 * Read objects of each method
 * @param {object} body
 */
function readFormDataBody(body) {
  let markdown = "";

  if (body) {
    if (body.mode === "raw") {
      markdown += `### Body (**${body.mode}**)\n`;
      markdown += `\n`;
      markdown += `\`\`\`json\n`;
      markdown += `${body.raw}\n`;
      markdown += `\`\`\`\n`;
      markdown += `\n`;
    }

    if (body.mode === "formdata") {
      markdown += `### Body ${body.mode}\n`;
      markdown += `\n`;
      markdown += `|Param|Value|Type|\n`;
      markdown += `|---|---|---|\n`;
      body.formdata.map((form) => {
        markdown += `|${form.key}|${
          form.type === "file"
            ? form.src
            : form.value !== undefined
            ? form.value.replace(/\\n/g, "")
            : ""
        }|${form.type}|\n`;
      });
      markdown += `\n`;
    }
  }

  return markdown;
}

/**
 * Init execution
 */
function init() {
  const args = minimist(process.argv.slice(2));
  const pathToFile = args["_"][0];

  if (pathToFile) {
    console.log(chalk.green(`Reading file ${pathToFile}`));

    if (fs.existsSync(pathToFile)) {
      console.log(chalk.green(`Generating markdown files...`));

      let rawData = fs.readFileSync(pathToFile);
      const json = JSON.parse(rawData);

      // Derive output directory from collection name
      const outputDir = path.join("./", json.info.name + " Collection" || "docs");

      createStructureOfMarkdown(json, outputDir);
    } else {
      console.log(chalk.red(`Path is not valid or the file does not exist.`));
    }
  } else {
    console.log(chalk.red(`Path of JSON file is required.`));
  }
}

module.exports = { init };
