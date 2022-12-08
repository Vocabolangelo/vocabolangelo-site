---
layout: default
title: Autori
subtitle: Tutti gli autori del vocabolangelo sono elencati in questa pagina.
rdf_prefix_path: "_data/prefixes.sparql"
---

{% for letter in site.letters %}
{% assign query =
    'SELECT ?author ?firstName ?lastName
    WHERE {
        ?author rdf:type foaf:Person.
        ?author foaf:firstName ?firstName.
        ?author foaf:lastName ?lastName.
        FILTER( strStarts( ?lastName, "' | append: letter | append: '")).
    }
    ORDER BY ?lastName'
%}
{% assign resultset = page.rdf | sparql_query: query %}
{% assign resultsetSize = resultset | size %}
{% if resultsetSize != 0 %}
<section>
    <header> <h2> {{ letter }} </h2> </header>
    <div class="content">
        <ul>
        {% for result in resultset %}
            <li>
                <a href="{{ result.author.page_url }}">
                    {{ result.lastName }} {{ result.firstName }}
                </a>
            </li>
        {% endfor %}
        </ul>
    </div>
</section>
{% endif %}
{% endfor %}
