# Bootstrap Lite [![Build Status](https://img.shields.io/travis/bryanbraun/anchorjs/master.svg?style=flat)](https://maxgrebennikov.com/)

A TinyMCE plugin for simply insert Bootstrap components in text. Work with CDN.

### Screenshots

![Bootstrap Lite panel](/screens/bootstraplite_ss01.jpg)
![Bootstrap Lite modal window](/screens/bootstraplite_ss02.jpg)

### Installation
 * Download the bootstraplite.zip archive
 * Unzip archive in tinyMCE plugin directory (tiny_mce/plugins/)

### Configuration
```html
<script type="text/javascript">
tinymce.init({
	selector: "textarea",
	plugins: [
			"advlist autolink lists link image charmap print preview anchor",
			"searchreplace visualblocks code fullscreen",
			"insertdatetime media table contextmenu paste bootstraplite"
			],
	toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image| bootstraplite"
	});
</script>
```

###Requirements

This was written for TinyMCE version 4.1.10 (2015-05-05)

## License
Licensed with the [MIT License](http://opensource.org/licenses/MIT).

## Author
 * Max Grebennikov (Author-Developer) maximgreb@gmail.com
