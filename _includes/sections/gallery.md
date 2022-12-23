{% assign query =  'SELECT ?author ?firstName ?lastName ?image
	WHERE {
		?author rdf:type foaf:Person.
		?author foaf:firstName ?firstName.
        ?author foaf:lastName ?lastName.
		?author schema:image ?image.
	}
	ORDER BY ?lastName'
%}
{% assign resultset = page.rdf | sparql_query: query %}
{% if resultset %}
<section class="wrapper style1 align-center">
    <div class="inner">
        <h2>Autori</h2>
        <p> Gli autori del Vocabolangelo sono... persone ordinarie!</p>
        <ul class="actions stacked">
            <li><a href="/autori" class="button">Vai alla pagina degli autori</a></li>
        </ul>
    </div>
    <div class="gallery style2 medium lightbox onscroll-fade-in">
        {% for result in resultset %}
        <article>
            <a href='{{result.author.page_url}}' class="image">
                <img src='{{result.image}}' alt='{{result.lastName}}'>
            </a>
            <div class="caption">
                <h2>{{result.firstName}} {{result.lastName}}</h2>
                <ul class="actions fixed">
                    <li><span class="button small">Pagina dell'Autore</span></li>
                </ul>
            </div>
        </article>
        {% endfor %}
    </div>
</section>
{% endif %}
