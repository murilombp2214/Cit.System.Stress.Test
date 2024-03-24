# Cit.System.Stress.Test
 - Repositorio padrão de testes de carga


# KS Install
 - [Link para instalação](https://k6.io/docs/get-started/installation/)

# Exemple
 - [single request](https://k6.io/docs/examples/single-request/)

# Play
 - Adição de env
    - k6 run --env MY_VARIABLE=value script.js
 - [Executors](https://k6.io/docs/using-k6/scenarios/executors/)
 - [Scenarios](https://k6.io/docs/using-k6/scenarios/)

# Get Result in AWS
 - [Exemple with Amazon CloudWatch](https://grafana.com/blog/2023/04/11/how-to-visualize-load-testing-results/)


 # Run Cit.System.Rifa
      - CUSTOMER = Nome do cliente 
      - CAMPANHA = Campanha que será testada
      - TOKEN = Token de acesso
      - COOKIE = Cookie da sessão
      ## Abertura de Pagina
         -  k6 run --env ENV='PRD' --env CUSTOMER='Buzeira' --env CAMPANHA='jujuba-malvada'  Cit.System.Rifa\abertura-de-pagina.js
      ## Get Camapanha
         -  k6 run --env ENV='Local' --env CUSTOMER='Buzeira' --env CAMPANHA='jujuba-malvada' --duration 10s --vus 10 --iterations 10  Cit.System.Rifa\get-campanha.js

# Markdown preview
VS Code supports Markdown files out of the box. You just start writing Markdown text, save the file with the .md extension and then you can toggle the visualization of the editor between the code and the preview of the Markdown file; obviously, you can also open an existing Markdown file and start working with it. To switch between views, press Ctrl+Shift+V in the editor. You can view the preview side-by-side (Ctrl+K V) with the file you are editing and see changes reflected in real-time as you edit.