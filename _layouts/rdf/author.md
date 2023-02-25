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
{% assign images = page.rdf | rdf_property: 'schema:image', nil, true %}
{% if images %}
<section>
    <header>
        <h3>Foto</h3>
    </header>
    <div class="content">
        <ul>
        {% for i in images %}
            <span class="image left">
                <img style="border-radius: 50%;" src="{{ i }}" alt="{{ prefLabel }}'s Image">
            </span>
        {% endfor %}
        </ul>
    </div>
</section>
{% endif %}
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
		<h3> Contributo </h3>
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

{% assign partners = page.rdf | rdf_property: 'rel:spouseOf', nil, true  %}
{% if partners %}
<section>
    <header>
        <h3>Partner</h3>
    </header>
    <div class="content">
        <ul>
        {% for p in partners %}
				{% assign firstName = p | rdf_property: 'foaf:firstName', nil, true %}
				{% assign lastName = p | rdf_property: 'foaf:lastName', nil, true %}
			<li>
				<a href='{{ p.page_url }}'>{{ firstName }} {{ lastName }}</a>
			</li>
        {% endfor %}
        </ul>
    </div>
</section>
{% endif %}
{% assign paidFriends = page.rdf | rdf_property: 'rel:friendOf', nil, true %}
{% assign unpaidFriends = page.rdf | rdf_property: 'vocang:unpaidFriendOf', nil, true %}
{% assign friends = paidFriends | push: unpaidFriends %}
{% if friends %}
<section>
    <header>
        <h3>Amici</h3>
    </header>
    <div class="content">
        <ul>
        {% for f in friends %}
				{% assign firstName = f | rdf_property: 'foaf:firstName', nil, true %}
				{% assign lastName = f | rdf_property: 'foaf:lastName', nil, true %}
			<li>
				<a href='{{ f.page_url }}'>{{ firstName }} {{ lastName }}</a>
			</li>
        {% endfor %}
        </ul>
    </div>
</section>
{% endif %}
