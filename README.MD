Instalação
==========

cd ./desafiohu

npm install

Iniciando o servidor
====================

cd ./desafiohu

node server.js

Executando testes
=================

cd ./desafiohu/node_modules/.bin/

jasmine-node tests/

Executante teste de stress
==========================

cd ./desafiohu/node_modules/.bin/

bench-rest -n 1000 -c 100000 -e "{ head: 'http://localhost:8080/api/offers/Rio de Janeiro/2015-01-01/2015-01-15/' }"

