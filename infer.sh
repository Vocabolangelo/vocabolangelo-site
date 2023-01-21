#!/usr/bin/env bash

git clone https://github.com/stardog-union/pellet.git build/pellet
cd build/pellet
mvn install -pl cli -DskipTest -am
cd ..
curl -o https://dlcdn.apache.org/jena/binaries/apache-jena-4.7.0.zip
unzip -o oapache-jena-4.7.0.zip
cd ..
build/pellet/cli/target/pelletcli/bin/pellet extract _data/vocabolangelo.ttl >> _data/vocabolangelo-inferred.xml
build/apache-jena-4.7.0/bin/riot --output=TURTLE _data/vocabolangelo.ttl _data/vocabolangelo-inferred.xml >> _data/vocabolangelo-merged.ttl
rm _data/vocabolangelo-inferred.xml
