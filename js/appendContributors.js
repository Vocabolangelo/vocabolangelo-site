$.get("https://api.github.com/repos/AngeloFilaseta/vocabolangelo-rdf/contributors")
.done(function( response ) {
    response.forEach(function(contributor){
        $("#contributors").append(`
        <div class="col-md-4 align-content-center px-5">
            <a href="`+ contributor["url"]+`">
                <img class="img-thumbnail" alt="` + contributor["login"] + ` Avatar" src="` + contributor["avatar_url"] + `">
            </a>
            <p class="text-center pt-2"> <strong>` + contributor["login"] + `</strong> </p>
        </div>
        `)
    })
});
