
### Relacionamento
afiliados?_embed=gestores

### EndPoints

https://api-vercel-virid.vercel.app/users

https://api-vercel-virid.vercel.app/gestores

https://api-vercel-virid.vercel.app/gestores?_sort=nome&_order=desc

https://api-vercel-virid.vercel.app/afiliados

https://api-vercel-virid.vercel.app/afiliados?_expand=gestor

https://api-vercel-virid.vercel.app/gestores?_embed=afiliados

### Rotas relacionadas

https://api-vercel-virid.vercel.app/afiliados?gestorId=1


#### EndPoints Filtros

https://api-vercel-virid.vercel.app/gestores?sexo=f

### EndPoints POST

### EndPoints PUT

### EndPoints Afiliados
https://api-vercel-virid.vercel.app/afiliados

### EndPoints Afiliados
* Cadastrar afiliados
```
    {
        "nome": "danila amateus",
        "telefone": "(011) 99911-3326",
        "gestorId": 3
    }
```

### EndPoints Referências

https://www.fabricadecodigo.com/json-server/
https://www.youtube.com/watch?v=XjQY7-i1UDg
https://expressjs.com/en/guide/using-middleware.html

Request 	URL 	 Detalhes

GET 	/gestores 	    Busca todos os produtos
GET 	/gestores/1 	Busca um produto
POST 	/gestores 	    Salva um produto
PUT 	/gestores/1 	Atualiza dos os dados do produto
PATCH 	/gestores/1 	Atualiza parte dos dados do produto
DELETE 	/gestores/1 	Remove um produto
