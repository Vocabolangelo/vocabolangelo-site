---
rdf_prefix_path: "_data/prefixes.sparql"
layout: default
title: "Dati del Vocabolangelo"
---

{% assign query =  'SELECT ?author (count(distinct ?word) as ?count)
	WHERE {
		?word rdf:type skos:Concept.
		?word dct:creator ?author.
	}
	GROUP BY ?author ORDER BY DESC(?count)'
%}
{% assign resultset = page.rdf | sparql_query: query %}

<section>
    <header>
        <h3>Classifica</h3>
    </header>
    <div class="content">
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Autore</th>
                        <th>Contributo</th>
                    </tr>
                </thead>
                <tbody>
                {% for result in resultset %}
                    {% assign firstName = result.author | rdf_property: 'foaf:firstName', nil, true %}
                    {% assign lastName = result.author | rdf_property: 'foaf:lastName', nil, true %}
                    <tr>
                        <td><a src="{{ result.author.page_url }}">{{ firstName }} {{ lastName }}</a></td>
                        <td>{{ result.count }}</td>
                    </tr>
                {% endfor %}
                </tbody>
            </table>
        </div>
    </div>
</section>
