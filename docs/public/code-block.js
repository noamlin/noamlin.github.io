"use strict";

let currentScriptUrl = document.currentScript.src;
currentScriptUrl = currentScriptUrl.slice(0, currentScriptUrl.lastIndexOf('/'));

class CodeBlock extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({mode: 'open'});
		let linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', currentScriptUrl+'/code-block.css');

		let prismStylesElm = document.createElement('link');
		prismStylesElm.setAttribute('rel', 'stylesheet');
		prismStylesElm.setAttribute('href', 'https://cdn.jsdelivr.net/npm/prismjs@1.21.0/themes/prism.css');
		//prismStylesElm.setAttribute('href', 'https://cdn.jsdelivr.net/npm/prismjs@1.21.0/themes/prism-twilight.css');

		let oneLiner = false;
		if(this.hasAttribute('one-liner') && this.getAttribute('one-liner') === 'true') {
			oneLiner = true;
		}

		let wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');

		let pre = document.createElement('pre');
		let code = document.createElement('code');
		code.textContent = this.textContent.trim();
		this.textContent = '';
		if(this.hasAttribute('data-language')) {
			pre.classList.add('language-'+this.getAttribute('data-language'));
			code.classList.add('language-'+this.getAttribute('data-language'));
		}
		Prism.highlightElement(code);
		pre.append(code);

		let lines = document.createElement('p');
		lines.classList.add('lines');

		if(oneLiner) {
			wrapper.classList.add('one-liner');
		}
		else {
			let numOfLines;
			try { numOfLines = (code.textContent.match(/\n/g) || '').length + 1 }
			catch(e) { numOfLines = 0; }
			for(let i=1; i < numOfLines; i++) {
				lines.textContent += `${i}\n`;
			}
			lines.textContent += `${numOfLines}`;
	
			if(numOfLines >= 100)  wrapper.classList.add('lines100');
			else if(numOfLines >= 10)  wrapper.classList.add('lines10');
		}

		wrapper.append(lines, pre);
		this.shadowRoot.append(linkElem, prismStylesElm, wrapper);
	}
};
customElements.define('code-block', CodeBlock);