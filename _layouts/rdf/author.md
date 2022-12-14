---
rdf_prefix_path: "_data/prefixes.sparql"
layout: rdf_layout
---

{% assign cr = page.rdf | rdf_get %}
{% assign query =  'SELECT ?word ?label ?author
	WHERE {
		?word rdf:type skos:Concept.
		?word skos:prefLabel ?label.
		?word dct:creator ?author.
	}
	ORDER BY ?label'
%}
{% assign wordCount = 0 %}
{% assign resultset = page.rdf | sparql_query: query %}
{% if resultset %}
<section>
	<header>
		<h3> Parole inventate </h3>
	</header>
	<div class="content">
		<ul>
			{% for result in resultset %}
				{% if cr == result.author %}
				{% assign wordCount = wordCount | plus: 1 %}
					<li>
						<a href='{{ result.word.page_url }}'>{{ result.label }}</a>
					</li>
				{% endif %}
			{% endfor %}
		</ul>
	</div>
</section>
<section>
	<header>
		<h3> Contribuzione </h3>
	</header>
	<div class="content">
	{% if wordCount == 1 %}
		<p> {{ wordCount }} parola inventata. </p>
	{% else %}
		<p> {{ wordCount }} parole inventate. </p>
	{% endif %}
	</div>
</section>
{% endif %}
