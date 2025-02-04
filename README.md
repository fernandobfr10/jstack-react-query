# Anotações

## Queries => Buscar dados (GET)

### **isLoading (boolean) =>** Será true quando a query function estiver executando na primeira requisição, deveria ser isInitialLoading.
### **isPending (boolean) =>** Será true quando não houver nenhum valor no cache.
### **isFetching (boolean) =>** Será true sempre que a query function estiver executando, seja na primeira execução ou nas subsequentes.

### **staleTime (number) =>** Define o tempo em milissegundos que a query será considerada "stale" (desatualizada) e será refetchada.
### **gcTime (number) =>** Define o tempo em milissegundos que a query será considerada "garbage" (lixo) e será removida do cache.

### **refetchOnWindowFocus (boolean) =>** Se true, a query será automaticamente refetchada quando a janela do navegador ganhar foco.
### **refetchOnInterval (number) =>** Se definido, a query será automaticamente refetchada a cada X milissegundos.

### **error (Error) =>** Será um objeto Error caso ocorra um erro na execução da query function.
### **isError (boolean) =>** Será true se ocorrer um erro na execução da query function.

### **retry (number | boolean) =>** Define a quantidade de vezes que a query será retentada em caso de erro, ou se true, a query será retentada indefinidamente (default 3).
### **retryDelay (number) =>** Define o tempo em milissegundos que a query será retentada em caso de erro.

## Mutations => Modificar dados (POST, PUT, PATCH, DELETE)

### **isPending (boolean) =>** Será true sempre que a mutation estiver executando, é o estado de loading das mutations.

### **data =>** São os dados da resposta da mutation.

### **retry (number | boolean) =>** Define a quantidade de vezes que a mutation será retentada em caso de erro, ou se true, a mutation será retentada indefinidamente (default false (0)).
### **retryDelay (number) =>** Define o tempo em milissegundos que a mutation será retentada em caso de erro.

### **error (Error) =>** Será um objeto Error caso ocorra um erro na execução da query function.

### **onError (function) =>** Executa a função quando acontece erro na mutation (recebe por parâmetros (error, variables))

### **onSuccess (function) =>** Executa a função quando a mutation é realizada com sucesso (recebe por parâmetros (data, variables))

### **onSettled (function) =>** Executa a função independente da mutation ter dado erro ou sucesso, funciona como o finally do try catch (recebe por parâmetros (data, error))


