import Blockly from 'blockly';
import 'blockly/javascript';

import 'blockly/blocks';
import * as En from 'blockly/msg/en';
import './styles/main.scss';

Blockly.setLocale(En);

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, {
  toolbox: document.getElementById('toolbox')
});
var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;

  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

const buildBtn = document.getElementById('buildBtn');
const textArea = document.getElementById('codeTxtArea');

buildBtn.addEventListener('click', handleBuildClick);

function handleBuildClick(workspace) {
  //   Blockly.JavaScript.addReservedWords('code');
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  textArea.value(code);
}
