import { sayHello, sayBye, loadFonts } from './utils';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

console.log("API Key:", API_KEY);
console.log("API URL:", API_URL);


figma.showUI(__html__, { width: 600, height: 300 });
loadFonts() 

figma.ui.onmessage = (msg) => {
  if (msg.type === 'hello') {
    sayHello()
  }

  if(msg.type === 'bye'){
    sayBye()
  }

  if (msg.type === 'resize-ui') {
    const { width, height } = msg.dimensions;
    figma.ui.resize(width, height);
  }
};

