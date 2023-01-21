REM generated with ChatGPT, never tested as I hate Windows

git clone https://github.com/stardog-union/pellet.git build\pellet
cd build\pellet
mvn install -pl cli -DskipTest -am
cd..
curl -o https://dlcdn.apache.org/jena/binaries/apache-jena-4.7.0.zip
powershell -Command "Expand-Archive apache-jena-4.7.0.zip -DestinationPath ."
cd ..
build\pellet\cli\target\pelletcli\bin\pellet.bat extract _data\vocabolangelo.ttl >> _data\vocabolangelo-inferred.xml
build\apache-jena-4.7.0\bin\riot.bat --output=TURTLE _data\vocabolangelo.ttl _data\vocabolangelo-inferred.xml >> _data\vocabolangelo-merged.ttl
del _data\vocabolangelo-inferred.xml
