## Nike Match 🔥

### Problema a ser resolvido

Verificado que a lista de espera por produtos da nike não é efetiva para alguns casos de produtos com alta demanda como Jordan.
Existem diversos rôbos de lojistas que realizam compras dos modelos de tênis assim que liberados no site da Nike, 
dessa forma o consumidor final quase nunca tem disponível o modelo/tamanho desejado.
Como os produtos ficam escassos e possuem demanda os lojistas vendem esses produtos com valor superior ao valor do
fabricante Nike, o produto que já posui um preço elevado no Brasil(média R$ 1.200,00) muitas vezes em tem um aumento
de mais de 60% do valor.

### Evidências 

Em alguns períodos fora de datas de lançamentos dos tênis alguns produtos voltam a ficar disponíveis por alguns minutos.

### Solução

Criar serviço para consultar a disponibilidade de modelos com tamanhos e cores previamente cadastrados, a consulta deve ser feita
a cada X segundos informados no arquivo de configuração. Quando identificado que o produto está disponível deve ser enviada uma mensagem
com o link e detalhes do produto para o whatsapp X informado nas configurações, informando a disponibilidade do item.
