#!/usr/bin/env bash

docker run --rm -v $PWD:/rdf stain/jena "riot" "--validate" "public/schema/vocabolangelo.ttl" 
