Feature: Realizar busca por produto
Estou no site e desejo fazer buscar por determinado produto

    Scenario: Fazer uma busca por produto.
        Given que estou na home
        When realizo uma busca por produto
        Then visualizo que a busca do produto foi realizada com sucesso

     Scenario: Fazer uma busca sem sucesso
        Given que estou na home
        When realizo uma busca por um produto que não existe
        Then visualizo que nenhum resultado foi encontrado