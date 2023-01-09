{% assign type = page.rdf | rdf_property: 'rdf:type' | strip %}
{% if type == 'http://www.w3.org/2004/02/skos/core#Concept' %}
    {% assign title = page.rdf | rdf_property: 'skos:prefLabel' %}
    {% assign subtitle = page.rdf | rdf_property: 'lexinfo:pronunciation' %}
{% elsif type == "http://www.vocabolangelo.org/Game" %}
    {% assign title = page.rdf | rdf_property: 'skos:prefLabel' %}
{% elsif type == 'http://xmlns.com/foaf/0.1/Person' %}
    {% assign lastName = page.rdf | rdf_property: 'foaf:lastName' %}
    {% assign firstName = page.rdf | rdf_property: 'foaf:firstName' %}
    {% assign nick = nickName | rdf_property: 'foaf:nick' %}
    {% assign title = lastName | append: " " | append: firstName %}
    {% assign subtitle = nick %}
{% endif %}

{% include layout.md title = title subtitle = subtitle %}
