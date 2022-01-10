Feature: Login
Estou no site e desejo realizar login para ultilizar tudo que a plataforma oferece

    Scenario: Fazer login com sucesso
        Given que estou na tela de login
        When realizo login com usuário válido
        Then visualizo que estou logado na aplicação

    Scenario: Fazer login com falha
        Given que estou na tela de login
        When preencho meus dados com senha inválida
        Then visualizo mensagem de erro ao realizar login
