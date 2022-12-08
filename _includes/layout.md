<html>
    <head>
        {% include title_tag.md title = include.title  %}
        {% include head_common.md %}
    </head>
    <body class="is-preload">
        {% include header.md %}
        <main id="wrapper" class="divided">
            <section class="wrapper style1 align-center">
                <div class="inner">
                    {% include header_tag.md title = include.title subtitle = include.subtitle %}
                    <div class="index align-left"> {{content}} </div>
                </div>
            </section>
            {% include footer.md %}
        </main>
        {% include script_common.md %}
    </body>
</html>
