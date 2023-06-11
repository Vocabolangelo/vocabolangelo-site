#!/usr/bin/env bash

docker run -v $PWD:/rdf stain/jena "riot" "--validate" "public/schema/vocabolangelo.ttl" 
