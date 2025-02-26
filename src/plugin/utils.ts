
// Load fonts functionality - samples included
export async function loadFonts() {
  console.log("fetching fonts")
  const requiredFonts = [
    // Add any required fonts here so that the plugin checks for them prior to opening. **
    // { family: "Filson Pro", style: "Bold" },
    // { family: "Brandon Text", style: "Bold" },
    // { family: "Brandon Text", style: "Regular" },
    // { family: "Take Note", style: "Regular" }
  ];

  try {
    //
    // Load all fonts asynchronously
    await Promise.all(requiredFonts.map(async font => {
      try {
        await figma.loadFontAsync(font);
      } catch (error) {
        // Handle font loading error
        console.error(`Failed to load font ${font.family} ${font.style}:`, error);
        figma.notify(`Failed to load font ${font.family} ${font.style}.`);

          // Create a modal dialog UI
          figma.showUI(`
            <html>
              <head>
              </head>
              <body>
                <div class="modal">
                  <h2>Error: Font Not Found</h2>
                  <p>Failed to load font ${font.family} ${font.style}.</p>
                  <p>The plugin will not work as intended with missing fonts.</p> 
                  <p>Please reinstall fonts using the files in this <a href="https://drive.google.com/drive/folders/1Z3MtBR4LLx7Xv28VeMNCtgfvdKevDLZT">Google Drive folder</a>.</p> 
                  <p>If the font is already installed, please uninstall it, reinstall using the Google Drive link above and restart your workstation.</p>
                  <p>For further assistance, or if the above fix does not work as intended, please reach out to Sofia Katzman.</p>
                </div>
          
              </body>
            </html>
          `);
          figma.ui.resize(600, 300);
        throw error;
      }
    }));
    return true; 
  } catch (error) {
    console.error("Font loading error:", error);
    return false; 
  }}

// Load components functionality - samples included
export async function loadComponentSets() {
  return {
    // "Full Size Banner - Short": figma.root.findOne(node => node.type === "COMPONENT_SET" && node.name === "Full Size Banner - Short") as ComponentSetNode,
    // "Half Size Banner": figma.root.findOne(node => node.type === "COMPONENT_SET" && node.name === "Half Size Banner") as ComponentSetNode,
    // "Search Results Banner - Desktop": figma.root.findOne(node => node.type === "COMPONENT_SET" && node.name === "Search Results Banner - Desktop") as ComponentSetNode,
    // "Collection Page Hero - Desktop": figma.root.findOne(node => node.type === "COMPONENT_SET" && node.name === "Collection Page Hero - Desktop") as ComponentSetNode,
    // "Collection Page Hero - Mobile": figma.root.findOne(node => node.type === "COMPONENT_SET" && node.name === "Collection Page Hero - Mobile") as ComponentSetNode,
    // "Square": figma.root.findOne(node => node.type === "COMPONENT_SET" && node.name === "Square") as ComponentSetNode
  };
}

export function sayHello(){
  figma.showUI(`
    <html>
      <body>
        <div class="modal">
          <p>Hey there!</p>
        </div>
      </body>
    </html>
  `);
  figma.ui.resize(600, 300);
}

export function sayBye(){
  figma.showUI(`
    <html>
      <body>
        <div class="modal">
          <p>Goodbye!</p>
        </div>
      </body>
    </html>
  `);
  figma.ui.resize(600, 300);
}