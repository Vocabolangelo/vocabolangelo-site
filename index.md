---
rdf_prefix_path: "_data/prefixes.sparql"
---
<!--
	Story by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Vocabolangelo</title>
		{% include head_common.md %}
	</head>
	<body class="is-preload">
	{% include header.md %}
		<div id="wrapper" class="divided">
			{% include sections/intro.md %}
			{% include sections/counter.md %}
			{% include sections/games.md %}
			{% include sections/discord.md %}
			{% include sections/gallery.md %}
			{% include sections/rules.md %}
			{% include sections/metamodel.md %}
			{% include sections/rdf.md %}
			{% include footer.md %}
		</div>
	{% include script_common.md %}
	</body>
</html>
