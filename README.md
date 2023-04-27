# vocabolangelo-rdf
### What is the Vocabolangelo?
The Vocabolangelo is a structured document that catalogs and defines words invented by ordinary people and that are not present in a normal vocabulary.

### Cos'è il Vocabolangelo?
Il Vocabolangelo è un documento strutturato che cataloga e definisce parole, non riportate in un normale vocabolario, inventate da persone ordinarie.

----

### Run in Local

To run the project in local just execute the commands:

```console
npm install
npm start
```

### Notes
The application will search for an inferred Turtle file at the location `schema/vocabolangelo-merged.ttl`. If not
present, the original turtle file at location `schema/vocabolangelo.ttl` will be used.  
In developement mode, the presence of the inferred file won't probably be necessary. However, keep in mind that to infer
data it is possible to execute the `infer.sh` script (only available for unix-based machine for now).

```console
./infer.sh
```
