var TextCopy = {
	createTooltip: function(){
		var tooltip = document.createElement('div');
		tooltip.id = 'copied-tooltip';
		tooltip.textContent = 'Copied!';
		tooltip.style.position =  "absolute";
		tooltip.style.zIndex =  "1000";        
		tooltip.style.background = "black";
		tooltip.style.color =  "white";
		tooltip.style.fontSize =  "12px";
		tooltip.style.padding =  "5px 10px";
		tooltip.style.marginLeft =  "10px";
		tooltip.style.borderRadius = "5px";
		tooltip.style.opacity =  0;
		tooltip.style.transition =  "opacity 0.5s";
		document.body.appendChild(tooltip);
	},
	showTooltip: function(x, y){
		var tooltip = document.querySelector('#copied-tooltip');
		var h = tooltip.getBoundingClientRect().height;
		tooltip.style.left = x + 'px';
		tooltip.style.top = (y - h/2) + 'px';
		tooltip.style.opacity = 1;
		setTimeout(() => { tooltip.style.opacity = 0; }, 1000);
	},
	addMouseup: function(){
		document.addEventListener('mouseup', function(e) {
			const st = window.getSelection().toString();
			if(st.length == 0) return;
			TextCopy.writeTextInClipboard(st);
			TextCopy.showTooltip(e.pageX, e.pageY);
		});
	},
	writeTextInClipboard: function(text){
		navigator.clipboard.writeText(text)
		.then(() => { console.log('[Clipboard] ' + text); })
		.catch(err => { console.error('Clipboard failed', err); });
	},
	start: function(){
		TextCopy.createTooltip();
		TextCopy.addMouseup();
	}
}

TextCopy.start();
