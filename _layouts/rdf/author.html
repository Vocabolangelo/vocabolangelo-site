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
		<h3> Numero di parole </h3>
	</header>
	<div class="content">
		<p> {{ resultset.size }} </p>
	</div>
</section>
{% endif %}
