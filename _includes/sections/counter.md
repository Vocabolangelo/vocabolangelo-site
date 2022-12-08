<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
    <div class="content">
        {% assign query = 'SELECT (count(distinct ?word) as ?wordCount)
            WHERE {
                ?word rdf:type skos:Concept.
            }'
        %}
        {% assign resultset = page.rdf | sparql_query: query %}
        <h2> {{ resultset[0].wordCount }} </h2>
        <p>Sono le parole all'interno del Vocabolangelo. Puntiamo a raggiungere le 1000 parole.</p>
        <ul class="actions stacked">
            <li><a href="#" class="button"> Collabora </a></li>
        </ul>
    </div>
    <div class="image">
        <img src="images/spotlight01.jpg" alt="" />
    </div>
</section>
