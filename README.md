# Bootstrap Lite [![Build Status](https://img.shields.io/travis/bryanbraun/anchorjs/master.svg?style=flat)](https://maxgrebennikov.com/)
======================

A TinyMCE plugin for adding simply Bootstrap components in content.

**[See Live Examples in the Documentation](http://bryanbraun.github.io/anchorjs#examples).**

Authors
-------

 * Gerits Aurelien (Author-Developer) contact[at]aurelien-gerits[point]be

###Screenshot

![youtube-tinymce-1 2 0](https://cloud.githubusercontent.com/assets/356674/17137863/b977bf00-533d-11e6-9070-426c5131f75a.png)

###Installation
 * Download the bootstraplite.zip archive
 * Unzip archive in tinyMCE plugin directory (tiny_mce/plugins/)

###Configuration
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
