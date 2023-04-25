#!/usr/bin/env bash

git clone https://github.com/stardog-union/pellet.git build/pellet
cd build/pellet
mvn install -pl cli -DskipTest -am
cd ../..
PELLET=build/pellet/cli/target/pelletcli/bin/pellet
chmod +x $PELLET
$PELLET extract _data/vocabolangelo.ttl >> _data/vocabolangelo-inferred.xml
docker pull stain/jena
docker run --volume $PWD/_data:/rdf stain/jena riot --output=TURTLE vocabolangelo.ttl vocabolangelo-inferred.xml > $PWD/_data/vocabolangelo-merged.ttl
rm  _data/vocabolangelo-inferred.xml
