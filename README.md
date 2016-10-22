# MEANProjeto
FATEC MEAN PROJETO

GIT COMMANDS

git reset --hard origin/master && git fetch && git pull origin master

node server.js //inicia servidor
npm init //gera o package.js
npm install express --save //instala pacote e gera dependencia
npm install ejs --save //view engine permite colocar views e colocar variaveis como {{ nome }}
npm install nodemon -g //faz atualizar sem precisar parar node, -g é global para qualquer projeto
npm install  body-parser method-override --save //configuração dos metodos POST PUT DELETE GET
npm install bower -g //instalador de dependencia frontEnd
npm install // verifica se tem algum pacote faltando
bower install // verifica se tem algum pacote faltando
bower install angular-route --save //instalar routes no angular
Link aula 2
goo.gl/FcENyk

goo.gl/CkVaGd

pasta node_modules é configurado para o sistema que esta rodando para aquele SO especifico, nao pode passar pra outra maquina

aula 3

abrir git bash dentro da pasta do projeto e escrever
bower install bootstrap --save
bower install angular-resource --save

iniciar mongoDB
mongo --port 27017 --host localhost

aula 5
npm install mongodb --save
npm install mongoose --save

//rodar mongo notebook fernando
mongod --storageEngine=mmapv1

//mongodb
use contatooh
var contato = {"nome" : "contato teste", "email" : "teste@teste.com"}
db.contatos.insert(contato);
db.contatos.find()//retorna todos da tabela contatos