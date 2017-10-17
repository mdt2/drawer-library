# drawer-library
#### A simple, material guidelines inspired drawer library made with pure JavaScript.

## Setup
First make a div for the library to bind everything to. Give it an id of `drawer-holder`:

```
<html>
	<body>
		<div id="drawer-holder"></div>
	</body>
</html>
```

Then link `drawer.css` and `drawer.js` to your HTML file:

```
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="drawer-library/drawer.css">
		<script type="text/javascript" src="drawer-library/drawer.js"></script>
	</head>
</html>
```
#### Note: Make sure to add `drawer.js` above your custom JavaScript.

Finally, call the drawer library:

```
//The addListItems function expects an array of objects to generate list items
//Content is your list title, href is where it points to

var listItems = [{
	content: 'list title',
	href: 'yoursite.com'
},
{
	content: 'second list title',
	href: 'secondsite.com'
}]


//Generate the drawer with your settings

new Drawer()
	.setWidth(300)
	.addListItems(listItems)
	.setFontSize(18)
	.setListItemColor('red')
	.setDrawerBackgroundColor('white')
	.setHamMenuBackgroundColor('white')
	.setHamMenuBackgroundColorActive('red')
```

##Author and License
Built by [mdt2](https://github.com/mdt2)

```
Copyright 2017 mdt2

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```