/**
 * TinyMCE BootstrapLite plugin
 *
 * @version 1.2
 * @author Max Grebennikov - maxgreb@gmail.com
 *
 */

/*jshint globalstrict: true, unused:false*/
/*global jQuery, jQuery, tinymce, window, document*/

'use strict';

tinymce.PluginManager.add('bootstraplite', function(editor, url) {
	//console.log('BootstrapLite');
	var bsItems = [];

	// Create and render a buttongroup with buttons
	var bs3Btn = tinymce.ui.Factory.create({
			type: 'button',
			text: 'Bootstrap',
			icon: true,
			image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQwMThlNy1hYTg3LWQzNGEtYTUyYS1mOTEzMGUzM2JkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDU3OTQ1QTI3NUE0MTFFNjg2RDI4RTA0NEQwNkQ4NkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDU3OTQ1QTE3NUE0MTFFNjg2RDI4RTA0NEQwNkQ4NkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWY0NDJjODMtMGI5MS1kMjQzLTg1MTYtOTY0MDg4MGEzMjA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmUzNDAxOGU3LWFhODctZDM0YS1hNTJhLWY5MTMwZTMzYmQ2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PimgOQ4AAAKYSURBVHjaXFNLSFRRGP7O4844MxpqvrWmEsJeCwnbRAsrWrQMixYFLgvCZSuDVhFE0aqNiNCiiAJtUVEuUoKwhUVqGCEqEeVYzuigo3Mf5/Sfc+8M1rncc+/5n9///99hfadu7v6hg0En0McAxgANs5jd7A6tQ1koYvbsCTbVzPgVmfH8Z1yrLnBSmEfpKIY5MZTicONowqswmPD08T9MDUufnAUJFCmE5FhZyWOr4IZZyYGRVxAE1ql5Vx0cR9JZ2dCB1u2Sab2hoFPGPrecx7nL3TjUuRctbfUQDgfnHMs/s3j7ahKvhz+gurbSyqKiCpIyKQPWIMivbqD77FF0HElj+VcWxS3PZus6cdC+TkziyeAoWtMNUXFQUmlVbpQQDC45mXWxu5+C5Cz8/YfTeD5xBz29J/F44I2ViQiFQWCjERAbREfgTOBAKWucSMasbObjfHkiKvrKkpP5GuFabt0qno7fhu8HUFRCa7oe3xeWcOv6EBKpOJiZWDQNXs5sOkH/QnCr+PZlEbOf5/F1ZhETY9NoaKpBX/8FeJ4Pn17rQ/ayBIny2yCVO5L23HfpLjJLWaRSCfzeyOHl2H2c7z2NkUfjFk1NbdX2ElAuodQDGROQQtjGplABKYWVx+LEAypN/9uDkEiu6yEec6xicOQGNgtF24N0ezOaWnfi3egnTE/Ooa6x2iYz3DVjDIumQ5Ia9H5sCsWih/S+JmJmmHU1m8fAvWE8fPACyUpC4whKqExixs50XtM8YgWnBq5l14lALsqXgMx8L8DWpovGllpUUY/MdAzPCYWSVMws/Rwwt8zUZsZUEc19+w00xDGEMVNAiTdgGdlWkeiZK+SH4kx0RLbh9t+yjNWlYgFXBwt7ElVX/wowAMu2c0IPPE/lAAAAAElFTkSuQmCC', 
			//classes: 'widget btn bs-icon-btn',
			//icon: 'bootstrap-icon',
			tooltip: 'Bootstrap Lite Elements',
			onclick: function() {
				// Open window
				editor.windowManager.open({
						title: 'About plugin',
						width: 400,
						height: 100,
						body: [
								{ type: 'container', html: '<h4 style="font-size:1.4em!important;font-weight:bold!important;">Bootstrap Lite 1.2</h4><br/><a target="_blank" href="https://github.com/maxgreb/BootstrapLite">GitHub</a>' },
						]
				});
			}
	});
	bsItems.push(bs3Btn);
			
	var insertBtn = tinymce.ui.Factory.create({
		type: 'button',
		//classes: 'widget btn bs-icon-btn',
		//text: 'btn',
		icon: true,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQwMThlNy1hYTg3LWQzNGEtYTUyYS1mOTEzMGUzM2JkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEM3RERBMzM3NUEyMTFFNjg0QkJGNkYyNzIxMTdFNjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEM3RERBMzI3NUEyMTFFNjg0QkJGNkYyNzIxMTdFNjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTM0MDE4ZTctYWE4Ny1kMzRhLWE1MmEtZjkxMzBlMzNiZDYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmUzNDAxOGU3LWFhODctZDM0YS1hNTJhLWY5MTMwZTMzYmQ2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlQwntQAAADTSURBVHjaYvz//z8DJYCJgUJAsQEsJtU7KHaBJxA/A+L/JGKQHk+QAXOBWBJmopeWKLGWg/TMZUHWDAJmKsIMH7/9Zjj64ANDT5guw+1nnxgO33oDl7/26iuKIRiBKCHIxSAnzMWQbiMPF/PSl2DQl+VnyPNUJxwLd559ZFh+9hkDLycLw4v33xgev/sGFgeJcXOwYMYCuoC+kjBDgx8rw82nnxj4OFkZtKT58AYEo3HV9mfo4UACeAHyQgqIQYbmp0CcDPLCNgpcwMA49DMTQIABABlBQg6vNjDUAAAAAElFTkSuQmCC',
		name: 'insertBtnBtn',
		tooltip: 'Insert/edit Button',
		onclick: function() {
			var selection = tinyMCE.activeEditor.selection.getContent();
			var href = jQuery(tinyMCE.activeEditor.selection.getNode()).attr('href');
			if(selection=="") { selection = "text"; }
			if(href=="") { href = "http://"; }
			// Open window
			editor.windowManager.open({
					title: 'Insert/edit Bootstrap Button',
					width: 400,
					height: 200,
					body: [
							//{type: 'container', html: "Hello world!"},
							{type: 'textbox', name: 'text', label: 'Text', value: selection },
							{type: 'textbox', name: 'link', label: 'Link', value: href },
							//{type: 'checkbox', name: 'color', label: 'Btn', value: 'btn-info'},
							{type: 'listbox', name: 'color2', label: 'Style', values : [
								{ text: 'default', value: 'btn-default' },
								{ text: 'primary', value: 'btn-primary', selected: true },
								{ text: 'success', value: 'btn-success' },
								{ text: 'info', value: 'btn-info' },
								{ text: 'warning', value: 'btn-warning' },
								{ text: 'danger', value: 'btn-danger' }
							]},
							{type: 'listbox', name: 'size', label: 'Size', values : [
								{ text: 'extra-small', value: 'btn-xs' },
								{ text: 'small', value: 'btn-sm' },
								{ text: 'medium', value: 'btn-md', selected: true },
								{ text: 'large', value: 'btn-lg' }
							]}
					],
					onsubmit: function(e) {
							// Insert content when the window form is submitted
							editor.insertContent('<a class="btn '+e.data.color2+' '+e.data.size+'" href="'+e.data.link+'">'+e.data.text+'</a>');
					}
			});
		}
	});
	bsItems.push(insertBtn);
	
	var insertBtn = tinymce.ui.Factory.create({
		type: 'button',
		//text: 'image',
		icon: true,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQwMThlNy1hYTg3LWQzNGEtYTUyYS1mOTEzMGUzM2JkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc1RDdFOTk3NUIzMTFFNjhGODlBQ0I0OEE5OENBQzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzc1RDdFOTg3NUIzMTFFNjhGODlBQ0I0OEE5OENBQzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MmM0MDdiNzgtODA1ZC1hZDRlLTg0NTEtZjY1Mjk5OGEzYWY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmUzNDAxOGU3LWFhODctZDM0YS1hNTJhLWY5MTMwZTMzYmQ2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt5TfhIAAAHgSURBVHjalFNNSwJRFL3j+JGGo9TCSCQVxEUUIdJWwVWb+h/+IP+BC8FN0FIIBN2I5EbJXBRtDEHTRMmxcTr3+WYyiagDx3e5vnvfuR+jmKZJEgq4Bx6DMXAEtsEXUAdXkt/g5J9CoXCN4wJ00d8wBW/z+fyVUzou3W73RzweJ4/HQ4Zh0HQ6FX+YXxINXddf4X+azWYnHGMp2GUjk8moiUSCWq0WxWIxCgQCm6VZd/fBh2KxeDuZTFgxOcADNuBQyuUy1et1wgVaLBY/Sef7536//9RKyo5DtlRVpWAwKLwohxRl/fByuaRqtUqrld0/F8oMSTvAsjSR2uGgXC5HkUiEotGoSMJgRe12m3w+H6XT6XVNimL1Ls4KdthCY8SryWRSNJIxGo1EMKPRaAg1srGWmiPOpMqswjMcDqlSqRDqpMFgYBfPQbVajbLZ7GZPXE6ryxwwn8+pVCrZibbR6XQolUrZvQKeOcGMLU3TaDweUygUskvYBu8HK0E/TPnwPSd4RAPNZrOpcHA4HP51BbvdLvV6PV2O9FUkAN/7/b4X/OMmE0t842+Ds8wxYy/9H5r9MQE34BkmYWCh3CjJCduBeleSBh75AA0eCO8aeCemtzHT7d23TnPr/IZPAQYARAi7wn1tjKMAAAAASUVORK5CYII=',
		name: 'insertBtnBtn',
		tooltip: 'Insert/edit image',
		onclick: function() {
			var selection = tinyMCE.activeEditor.selection.getContent();
			var src = $('<div/>').html(selection).find('img:first').attr('src');
			if(src == "" || src == undefined) { src = "http://placehold.it/200x200"; }
			// Open window
			editor.windowManager.open({
					title: 'Insert/edit Bootstrap Image',
					width: 400,
					height: 400,
					body: [
							{type: 'textbox', name: 'image', label: 'Image', value: src, onchange: function(e) { $('#btimg').prop('src', this.value() );} },
							{type: 'textbox', name: 'alt', label: 'Alt' },
							{type: 'listbox', name: 'style', label: 'Style', values : [
								{ text: 'none', value: 'img-none' },
								{ text: 'rounded', value: 'img-rounded', selected: true },
								{ text: 'circle', value: 'img-circle' },
								{ text: 'thumbnail', value: 'img-thumbnail' },
							]},
							{type: 'checkbox', name: 'responsive', label: 'Responsive', text: 'Responsive', checked: true },
							{type: 'container', html: '<div style="width:358px;height:200px;overflow:hidden;"><center><img id="btimg" src="'+src+'" style="max-width:100%!important;1height:100px!important;margin-left:auto;margin-right:auto;"></center></div>'},
					],
					onsubmit: function(e) {
							if(e.data.responsive == true) { e.data.responsive = "img-responsive"; } else { e.data.responsive = ""; }
							// Insert content when the window form is submitted
							editor.insertContent('<img class="'+e.data.style+' '+e.data.responsive+'" src="'+e.data.image+'" alt="'+e.data.alt+'"/>');
					}
			});
		}
	});
	bsItems.push(insertBtn);
	
	var insertBtn = tinymce.ui.Factory.create({
		type: 'button',
		//text: 'label',
		icon: true,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQwMThlNy1hYTg3LWQzNGEtYTUyYS1mOTEzMGUzM2JkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUEzRDMzNTA3NUEyMTFFNkEyMjA4ODg0MTYyQzhDRTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUEzRDMzNEY3NUEyMTFFNkEyMjA4ODg0MTYyQzhDRTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTM0MDE4ZTctYWE4Ny1kMzRhLWE1MmEtZjkxMzBlMzNiZDYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmUzNDAxOGU3LWFhODctZDM0YS1hNTJhLWY5MTMwZTMzYmQ2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqNHrBoAAABaSURBVHjaYvz//z8DJYCJgUJAsQEssTtjKXaBJxA/A+L/JGKQHk+QAXOBWJIMy0F65jKRqRluyMDHAlUMeE6B/hcgA1JADDI0PwXiZBYgsY2SmGAc+pkJIMAAse4csiS9mGUAAAAASUVORK5CYII=',
		name: 'insertBtnBtn',
		tooltip: 'Insert/edit Label',
		onclick: function() {
			var selection = tinyMCE.activeEditor.selection.getContent();
			if(selection=="") { selection = "text"; }
			// Open window
			editor.windowManager.open({
					title: 'Insert/edit Bootstrap Label',
					width: 400,
					height: 100,
					body: [
							{type: 'textbox', name: 'text', label: 'Text', value: selection },
							{type: 'listbox', name: 'color', label: 'Style', values : [
								{ text: 'default', value: 'label-default' },
								{ text: 'primary', value: 'label-primary', selected: true },
								{ text: 'success', value: 'label-success' },
								{ text: 'info', value: 'label-info' },
								{ text: 'warning', value: 'label-warning' },
								{ text: 'danger', value: 'label-danger' }
							]}
					],
					onsubmit: function(e) {
							// Insert content when the window form is submitted
							editor.insertContent('<span class="label '+e.data.color+'">'+e.data.text+'</span>');
					}
			});
		}
	});
	bsItems.push(insertBtn);
	
	var insertBtn = tinymce.ui.Factory.create({
		type: 'button',
		//text: 'badge',
		icon: true,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQwMThlNy1hYTg3LWQzNGEtYTUyYS1mOTEzMGUzM2JkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZENzhDN0E3NUEzMTFFNkE4OEQ5MTZBOERBMkE4MjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZENzhDNzk3NUEzMTFFNkE4OEQ5MTZBOERBMkE4MjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGVkN2NhOWUtZTU0OC1mYTQ0LWEzNGUtYzg3NTcxMmViNjdmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmUzNDAxOGU3LWFhODctZDM0YS1hNTJhLWY5MTMwZTMzYmQ2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptm/0EMAAADrSURBVHjaYvz//z8DJYCJgULAWF5eTjUX+ALxPiD+DMT/seDPUHkfbAa0APEmIHYEYh4clvFA5TdD1cMNAJlYjaxSTEwMztbW1mZQVFREN6wa6mKwAUXIGt3d3RkMDQ3B/IiICIZv374xmJuboxgKBYUwA0xgIq9evWLYuXMnXMWKFSsY7t+/D2aDDEIDJkRFY0BAAMPJkycZvnz5ghGDMAPO4NIM8o6goCCDmpoaOCzQwGlYOvCFxgCpwA8UI0zQaGklUXMrVB88DGqA2B+I9wPxVxyavkLl/aDqwYAFScEmcrzCOOC5ESDAAIoEQEZ5yY1oAAAAAElFTkSuQmCC',
		name: 'insertBtnBtn',
		tooltip: 'Insert/edit badge',
		onclick: function() {
			var selection = tinyMCE.activeEditor.selection.getContent();
			if(selection=="") { selection = "text"; }
			editor.insertContent('<span class="badge">'+selection+'</span>');
		}
	});
	bsItems.push(insertBtn);
	
	var insertBtn = tinymce.ui.Factory.create({
		type: 'button',
		//text: 'alert',
		icon: true,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQwMThlNy1hYTg3LWQzNGEtYTUyYS1mOTEzMGUzM2JkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDU5RDAyNTM3NUE0MTFFNkFDOUVCNTQ3NzhCNjcyRTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDU5RDAyNTI3NUE0MTFFNkFDOUVCNTQ3NzhCNjcyRTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWY0NDJjODMtMGI5MS1kMjQzLTg1MTYtOTY0MDg4MGEzMjA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmUzNDAxOGU3LWFhODctZDM0YS1hNTJhLWY5MTMwZTMzYmQ2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmm9Hr4AAADcSURBVHjaYvz//z8DJYDl4zp/igxgAmJPIH4GxP9JxCA9niAD5gKxJBmWg/TMZSJTM9wQJmTe648/GK4++ABmP3jxBasOkBr0MICDS3c/MNx++hnM/vrjD9iwDUcfgzVN2XATTHeuuIpiCIoB1x99ZPj07Tdcwdnb7xhUpXnBBsuIcjGI8nMw2OiIgWkMA0C2+VhIM8S5KjEcvfIaLMbHxcrw4t0PBj1lARRnfwO6DgYYP6z1+09pOqA4IT2nQP8LkAEpIAYZmp8CcTILkNhGSWJipDQ3UhyIAAEGAEzwYK1/stg7AAAAAElFTkSuQmCC',
		name: 'insertBtnBtn',
		tooltip: 'Insert/edit alert',
		onclick: function() {
			var selection = tinyMCE.activeEditor.selection.getContent();
			if(selection=="") { selection = "text"; }
			// Open window
			editor.windowManager.open({
					title: 'Insert/edit Bootstrap Alert',
					width: 400,
					height: 100,
					body: [
							{type: 'textbox', name: 'text', label: 'Text', value: selection },
							{type: 'listbox', name: 'color', label: 'Style', values : [
								{ text: 'success', value: 'alert-success' },
								{ text: 'info', value: 'alert-info' },
								{ text: 'warning', value: 'alert-warning' },
								{ text: 'danger', value: 'alert-danger' }
							]}
					],
					onsubmit: function(e) {
							// Insert content when the window form is submitted
							editor.insertContent('<div class="alert '+e.data.color+'">'+e.data.text+'</div>');
					}
			});
		}
	});
	bsItems.push(insertBtn);
	
	var insertBtn = tinymce.ui.Factory.create({
		type: 'button',
		//text: 'panel',
		icon: true,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQwMThlNy1hYTg3LWQzNGEtYTUyYS1mOTEzMGUzM2JkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEM3NkJGQkU3NUE0MTFFNjhDQzBFOTM0OEFDOTdFMTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEM3NkJGQkQ3NUE0MTFFNjhDQzBFOTM0OEFDOTdFMTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWY0NDJjODMtMGI5MS1kMjQzLTg1MTYtOTY0MDg4MGEzMjA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmUzNDAxOGU3LWFhODctZDM0YS1hNTJhLWY5MTMwZTMzYmQ2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnFdvsgAAACSSURBVHjaYly3bh0DJYDl+fPntUC6AYiZSNT7D6SPBUQICwszsbGxkaT7169fTG/fvm0A2UqyZhCA6mFiYqAQMEGdQ7JGmB5QGDB8+vSJ4ffv3yQZwMrKijBAR0eHLOefP3+egTphMGoAw/MvX76QrPHr168g6gUoGlNu3749F0hLkGjGUyBOYzx27BhFXgAIMADZQSwFj2fH5QAAAABJRU5ErkJggg==',
		name: 'insertBtnBtn',
		tooltip: 'Insert/edit panel',
		onclick: function() {
			var selection = tinyMCE.activeEditor.selection.getContent();
			if(selection=="") { selection = "text"; }
			// Open window
			editor.windowManager.open({
					title: 'Insert/edit Bootstrap Alert',
					width: 400,
					height: 200,
					body: [
							{type: 'textbox', name: 'text', label: 'Text', value: selection },
							{type: 'listbox', name: 'color', label: 'Style', values : [
								{ text: 'primary', value: 'panel-primary' },
								{ text: 'success', value: 'panel-success' },
								{ text: 'info', value: 'panel-info' },
								{ text: 'warning', value: 'panel-warning' },
								{ text: 'danger', value: 'panel-danger' }
							]},
							{type: 'checkbox', name: 'footer', label: 'Footer', text: '', checked: true },
					],
					onsubmit: function(e) {
							if(e.data.footer == true) { var footer = '<div class="panel-footer">Panel footer</div>\r\n'; } else { var footer = ''; }
							// Insert content when the window form is submitted
							editor.insertContent('<div class="panel '+e.data.color+'">\r\n<div class="panel-heading">\r\n<h3 class="panel-title">Panel title</h3>\r\n</div>\r\n<div class="panel-body">'+e.data.text+'</div>\r\n '+footer+' </div>');
					}
			});
		}
	});
	bsItems.push(insertBtn);
	
	var insertBtn = tinymce.ui.Factory.create({
		type: 'button',
		//text: 'snippet',
		icon: true,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQwMThlNy1hYTg3LWQzNGEtYTUyYS1mOTEzMGUzM2JkNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTFGQkREQjA3NUE2MTFFNjlDQzVFRjE0RjAxQzIxNjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTFGQkREQUY3NUE2MTFFNjlDQzVFRjE0RjAxQzIxNjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTE4ZjAyNTEtYzRhMC1lZDRjLTg0MGUtMTQ5NjMxM2YyMjllIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmUzNDAxOGU3LWFhODctZDM0YS1hNTJhLWY5MTMwZTMzYmQ2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjXIPWAAAAJNSURBVHjaZFNNa1NBFD0zb2Jqi7WtiGCwpgtBLArVhWBxJ3YpFvwDuqmuCv4RN/6A+oErFaEIIkhdKNqK4kZNaVWsYhAaW9okbd68uZ6ZeQ2meXDyJmHOueeee6Okegxdj2AEChM8nSAU8YV4DlGLkilIlhAasAnMLmqBuEXKNb6LHZqZyuD0DMnTJG+I1ZDUQAUHEuqU+PmWKOUuYm1hRccDK/qqYpMayedcllTQFgDoB3+IAx1+eq5QpxdYvx9t07IjJNXbPA+JNQ2dX729mxx67JuC6r9JkoFLPUhueQFTJO5Ky4QMvOWp/wKkZZKFeuZI/mOZxN/wfXsh/4Y1k3Qx6gUm4yUl0nddKXMmNK8Kx9uayfAdqGaFOTi4jcXm9teZPZxAQpeXvcDJUNiR1fwIHJwO2XU8ZgB639lwbK3Mevs6uMiSozqUzmfqNheQLZ2CbM51rUa29h71uQnY6oJGGgOliPJKn+MXE0XYY7b6tEvAVl8yB4TZx/thmX5SwDwK46GqY6o+WT1wKebZ/EFXy7GLQxdJTmKQ3r4LjT7RnOl3juaei+OhKvvdP86Ks2i8uYrG6xtofXuIZHCUaQ5Zvw9+ufg8Iz6o9NNpb6eHqjUK7AUGGzClYvZ3iSnHkfmMdO9ww9VX18RuHc678ntTM8G2TbaIMVqcF1vvF7sclieuLyvyD5St/+JK+rUEk8C4J4cV3umbqNBBWdLCAx8kbDtpiLQH+5gYId7t/KAar87nveeXA0mNiUsuMKhyfm+FeEHM757OPwEGAABWSYedBLwcAAAAAElFTkSuQmCC',
		name: 'insertBtnBtn',
		tooltip: 'Insert/edit snippets', 
		onclick: function() {
			var selection = tinyMCE.activeEditor.selection.getContent();
			// Open window
			editor.windowManager.open({
					title: 'Insert/edit Bootstrap Button',
					width: 400,
					height: 100,
					body: [
							//{type: 'textbox', name: 'image', label: 'Image', value: selection },
							{type: 'listbox', name: 'comp', label: 'Component', values : [
								{ text: 'Jumbotron', value: '<div class="jumbotron">\r\n  <h1 class="display-3">Hello, world!</h1>\r\n  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for\r\n                  calling extra attention to featured content or information.</p>\r\n  <hr class="m-y-2">\r\n  <p>It uses utility classes for typography and\r\n     spacing to space content out within the larger container.</p>\r\n  <p class="lead">\r\n    <a class="btn btn-primary btn-lg" href="#" role="button">Some action</a>\r\n  </p>\r\n</div>' },
								{ text: 'Wells', value: '<div class="well well-lg">\r\nLook, I"m in a large well!\r\n</div>' }, 
								{ text: 'Collapse accordion', value: '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">\r\n\r\n  <div class="panel panel-default">\r\n    <div class="panel-heading" role="tab" id="headingOne">\r\n      <h4 class="panel-title">\r\n        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\r\n          Collapsible Group Item #1\r\n        </a>\r\n      </h4>\r\n    </div>\r\n    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">\r\n      <div class="panel-body">\r\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.\r\n      </div>\r\n    </div>\r\n  </div>\r\n	\r\n  <div class="panel panel-default">\r\n    <div class="panel-heading" role="tab" id="headingTwo">\r\n      <h4 class="panel-title">\r\n        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\r\n          Collapsible Group Item #2\r\n        </a>\r\n      </h4>\r\n    </div>\r\n    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">\r\n      <div class="panel-body">\r\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.\r\n      </div>\r\n    </div>\r\n  </div>\r\n	\r\n  <div class="panel panel-default">\r\n    <div class="panel-heading" role="tab" id="headingThree">\r\n      <h4 class="panel-title">\r\n        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\r\n          Collapsible Group Item #3\r\n        </a>\r\n      </h4>\r\n    </div>\r\n    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">\r\n      <div class="panel-body">\r\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.\r\n      </div>\r\n    </div>\r\n  </div>\r\n	\r\n</div>' },
								{ text: 'Carousel', value: '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\r\n  <!-- Indicators -->\r\n  <ol class="carousel-indicators">\r\n    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\r\n    <li data-target="#carousel-example-generic" data-slide-to="1"></li>\r\n    <li data-target="#carousel-example-generic" data-slide-to="2"></li>\r\n  </ol>\r\n\r\n  <!-- Wrapper for slides -->\r\n  <div class="carousel-inner" role="listbox">\r\n    <div class="item active">\r\n      <img src="http://placehold.it/800x600" alt="...">\r\n      <div class="carousel-caption">\r\n        Caption 1\r\n      </div>\r\n    </div>\r\n    <div class="item">\r\n      <img src="http://placehold.it/800x600" alt="...">\r\n      <div class="carousel-caption">\r\n        Caption 2\r\n      </div>\r\n    </div>\r\n    <div class="item">\r\n      <img src="http://placehold.it/800x600" alt="...">\r\n      <div class="carousel-caption">\r\n        Caption 3\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Controls -->\r\n  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\r\n    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\r\n    <span class="sr-only">Previous</span>\r\n  </a>\r\n  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\r\n    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\r\n    <span class="sr-only">Next</span>\r\n  </a>\r\n</div>' },
							]}
					],
					onsubmit: function(e) {
							// Insert content when the window form is submitted
							editor.insertContent('\r\n'+e.data.comp+'\r\n');
					}
			});
		}
	});
	bsItems.push(insertBtn);

	editor.addButton('bootstraplite', {
			type: 'buttongroup',
			items: bsItems
	});		

});