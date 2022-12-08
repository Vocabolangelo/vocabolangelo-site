---
rdf_prefix_path: "_data/prefixes.sparql"
---

{% assign type = page.rdf | rdf_property: 'rdf:type' | strip %}
{% if type == 'http://www.w3.org/2004/02/skos/core#Concept' %}
    {% assign title = page.rdf | rdf_property: 'skos:prefLabel' %}
{% elsif type == "http://www.vocabolangelo.org/Game" %}
    {% assign title = page.rdf | rdf_property: 'skos:prefLabel' %}
{% elsif type == 'http://xmlns.com/foaf/0.1/Person' %}
    {% assign lastName = page.rdf | rdf_property: 'foaf:lastName' %}
    {% assign firstName = page.rdf | rdf_property: 'foaf:firstName' %}
    {% assign nick = nickName | rdf_property: 'foaf:nick' %}
    {% assign title = lastName | append: " " | append: firstName %}
    {% assign subtitle = nick %}
{% endif %}

<html>
    <head>
        {% include title_tag.md title = title  %}
        {% include head_common.html %}
    </head>
    <body class="is-preload">
        <main id="wrapper" class="divided">
            <section class="wrapper style1 align-center">
                <div class="inner">
                    {% include header_tag.md title = title subtitle = subtitle %}
                    <div class="index align-left"> {{content}} </div>
                </div>
            </section>
            {% include footer.html %}
        </main>
        {% include script_common.html %}
    </body>
</html>