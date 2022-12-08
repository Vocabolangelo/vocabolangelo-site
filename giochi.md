---
layout: default
title: Giochi
subtitle: Tutti i giochi del vocabolangelo sono elencati in questa pagina.
rdf_prefix_path: "_data/prefixes.sparql"
---

{% assign query =
    'SELECT ?game ?label
    WHERE {
        ?game rdf:type vocang:Game .
        ?game skos:prefLabel ?label.
    }
    ORDER BY ?label'
%}
{% assign resultset = page.rdf | sparql_query: query %}
<section>
    <div class="content">
    {% if resultset %}
    <ul>
    {% for result in resultset %}
        <li>
            <a href="{{ result.word.page_url }}">
                {{ result.label }}
            </a>
        </li>
    {% endfor %}
    </ul>
    {% endif %}
    </div>
</section>