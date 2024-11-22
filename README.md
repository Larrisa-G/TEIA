# 🕸️ TEIA

A TEIA é uma aplicação mobile desenvolvida em React Native que conecta pessoas neurodivergentes a profissionais especializados e locais adaptados para terapias, esportes e arte.

O nome "TEIA" foi escolhido devido à sua simbologia e ao alinhamento com a missão e os valores do projeto, que pode ser resumido em 5 tópicos.

- Rede de Suporte: Representa a conexão e o suporte oferecidos a pessoas neurodivergentes.
- Acrônimo Significativo: TEIA resume os pilares Terapia, Esporte, Inclusão e Arte.
- Imagem de Conexão: Evoca a ideia de uma rede interligada para unir pessoas e serviços especializados.
- Versatilidade: Facilmente aplicável em campanhas de publicidade.
- Nome Memorável: Simples, curto e fácil de lembrar, ideal para uma marca acessível e forte.


## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Sobre o Projeto

O aplicativo TEIA visa facilitar o acesso a profissionais especializados para pessoas neurodivergentes, oferecendo uma interface intuitiva para busca de serviços. As principais funcionalidades incluem:
- Busca de profissionais e instituições por especialidade e localização.
- Perfil detalhado dos profissionais com biografia, horários, preços e convênios aceitos.
- Cadastro e login para pacientes e profissionais.

## Estrutura do Projeto

O projeto TEIA possui a seguinte estrutura:

## Estrutura do Projeto

O projeto TEIA possui a seguinte estrutura:

```plaintext
teia/
├── assets/                                       # Imagens e outros arquivos estáticos
│   ├── cores.json 
│   └── startFilters.json 
├── components/                                   # Componentes reutilizáveis
│   ├── alfa/                                     # Componentes pai
│   │   ├── Header.js      
│   │   ├── RegisterBottom.js   
│   │   ├── EditBottom.js  
│   │   ├── SearchForm.js  
│   │   ├── TeamTopForm.js     
│   │   └── TeamForm.js    
│   ├── inputs/                                   # Componentes de entrada 
│   │   ├── ButtonSwitch.js    
│   │   ├── Filter.js   
│   │   ├── GoBack.js   
│   │   ├── LabeldedInput.js  
│   │   ├── LabeldedInputAddOption.js  
│   │   ├── LabeldedInputMultAddOption.js  
│   │   ├── LabeldedInputOptions.js  
│   │   ├── LabeldedInputPhoto.js  
│   │   ├── LabeldedInputTime.js  
│   │   └── LabeldedInputValues.js 
│   ├── outputs/                                  # Componentes de saída 
│   │   ├── Answer.js
│   │   ├── LabeldedOutput.js
│   │   ├── LabeldedOutputPhoto.js  
│   │   ├── LabeldedOutputTime.js  
│   │   └── LabeldedOutputRounded.js 
├── screens/                                      # Páginas da aplicação
│   ├── AnswersScreen.js
│   ├── HomeScreen.js 
│   ├── LoginScreen.js  
│   ├── OpeningScreen.js
│   ├── PerfilScreen.js
│   ├── ProfileScreen.js
│   ├── SearchScreen.js
│   └── TeamRegisterScreen.js 
├── services/                                      # serviços backend
│   ├── Storage.js
│   └── TeamRegisterScreen.js
├── utils/                                        # Funções para o front
│   ├── cryptoUtils.js
│   ├── formatters.js
│   └── formUtils.js
├── testes/                                      # serviços backend
│   ├── cryptoUtils.test.js
│   └── formatters.test.js
├── App.js                                        # Arquivo principal
├── package.json                                  # Dependências e scripts do projeto
└── README.md                                     # Documentação do projeto


