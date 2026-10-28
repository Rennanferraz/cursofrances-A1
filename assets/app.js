"use strict";
const UNIT_DATA = {"version": "v0.2-rc1", "groups": [{"id": "a1-u01-l01-a01", "title": "Confira o que você compreendeu", "mode": "reading", "source_refs": ["U1 §2 B037–B039"], "adaptation": "Perguntas de leitura a partir das transcrições. Não equivalem à avaliação de compreensão oral. Contextos e atribuição dos interlocutores são rótulos editoriais.", "items": [{"id": "a1-u01-l01-a01-q01", "prompt": "Em qual contexto se passa o primeiro diálogo?", "options": ["Entre amigos, na sala de aula.", "Entre cliente e recepcionista de hotel."], "answer": 0, "feedback": "O contexto indicado é uma conversa entre amigos, em classe. Observe “Salut !” e o uso de “tu”."}, {"id": "a1-u01-l01-a01-q02", "prompt": "Quais são os nomes dos dois amigos?", "options": ["Anna e Karim.", "Léa e Karim."], "answer": 1, "feedback": "Léa diz “Je m’appelle Léa”. Em seguida, Karim se apresenta: “Moi, je m’appelle Karim”."}, {"id": "a1-u01-l01-a01-q03", "prompt": "Qual expressão encerra a conversa dos amigos?", "options": ["Bonne journée !", "À demain !"], "answer": 1, "feedback": "Os dois encerram com “À demain !”, uma despedida para quando se espera ver a pessoa no dia seguinte."}, {"id": "a1-u01-l01-a01-q04", "prompt": "Onde acontece o segundo diálogo?", "options": ["Em uma recepção de hotel.", "Em uma festa de amigos."], "answer": 0, "feedback": "O segundo contexto é um atendimento na recepção de hotel, com as formas “madame”, “monsieur” e “vous”."}, {"id": "a1-u01-l01-a01-q05", "prompt": "Como a cliente do hotel se chama?", "options": ["Anna Martins.", "Léa Martins."], "answer": 0, "feedback": "A cliente responde: “Je m’appelle Anna Martins”. O nome do recepcionista não é informado."}, {"id": "a1-u01-l01-a01-q06", "prompt": "Qual pergunta aparece na recepção do hotel?", "options": ["Tu t’appelles comment ?", "Vous vous appelez comment ?"], "answer": 1, "feedback": "No atendimento apresentado, a pergunta usa “vous”. Entre os amigos, a pergunta usa “tu”."}]}, {"id": "a1-u01-l01-a02", "title": "Tu ou vous ?", "source_refs": ["U1 §2 B046", "Design v0.1 #lesson-practice"], "items": [{"id": "a1-u01-l01-a02-q01", "prompt": "Você encontra uma amiga em uma festa.", "options": ["TU", "VOUS"], "answer": 0, "feedback": "Neste contexto de amizade, usamos “tu”. A escolha do registro depende da relação e da situação."}, {"id": "a1-u01-l01-a02-q02", "prompt": "Você fala com a recepcionista de um hotel pela primeira vez.", "options": ["TU", "VOUS"], "answer": 1, "feedback": "No primeiro atendimento descrito, “vous” é a escolha formal proposta."}, {"id": "a1-u01-l01-a02-q03", "prompt": "Você conhece uma pessoa em uma primeira reunião profissional.", "options": ["TU", "VOUS"], "answer": 1, "feedback": "O exercício apresenta um primeiro contato profissional: aqui, a escolha proposta é “vous”."}]}, {"type": "quiz", "id": "a1-u01-l02-a02", "title": "Leia a ficha de Marina", "instruction": "Escolha uma resposta. Você pode tentar novamente.", "items": [{"id": "a1-u01-l02-a02-q01", "type": "choice", "prompt": "Quel est son prénom ?", "options": ["Silva", "Marina"], "answer": 1, "feedback": "Prénom é o nome próprio: Marina. Nom, nesta ficha, identifica o sobrenome Silva."}, {"id": "a1-u01-l02-a02-q02", "type": "choice", "prompt": "Quel âge a Marina ?", "options": ["24 ans", "20 ans"], "answer": 0, "feedback": "No texto, Marina diz “J’ai 24 ans”."}, {"id": "a1-u01-l02-a02-q03", "type": "choice", "prompt": "Quelle est sa nationalité ?", "options": ["brésilienne", "italienne"], "answer": 0, "feedback": "A nacionalidade indicada é brésilienne. O país é le Brésil."}, {"id": "a1-u01-l02-a02-q04", "type": "choice", "prompt": "Où habite Marina ?", "options": ["À Paris", "À Rio"], "answer": 1, "feedback": "“J’habite à Rio” localiza sua cidade. Habiter aparece aqui como expressão; a conjugação será estudada adiante."}]}, {"type": "quiz", "id": "a1-u01-l02-a07", "title": "Exercice 1 — être ou avoir", "instruction": "Complete somente a lacuna. Preserve os acentos e, quando solicitado, escreva também o artigo.", "source_refs": [{"source_id": "U1", "locator": "§3, B085–B087"}], "items": [{"id": "a1-u01-l02-a07-q01", "type": "text", "prompt": "Je ______ brésilien.", "answers": ["suis"], "feedback": "A nacionalidade é apresentada com être. Com je, a forma-alvo é suis.", "origin": "explicit_source"}, {"id": "a1-u01-l02-a07-q02", "type": "text", "prompt": "Tu ______ quel âge ?", "answers": ["as"], "feedback": "Para idade, a expressão trabalha avoir. Com tu, a forma-alvo é as.", "origin": "explicit_source"}, {"id": "a1-u01-l02-a07-q03", "type": "text", "prompt": "Elle ______ italienne.", "answers": ["est"], "feedback": "A frase informa nacionalidade. Com elle, a forma-alvo é est.", "origin": "explicit_source"}, {"id": "a1-u01-l02-a07-q04", "type": "text", "prompt": "Nous ______ 20 ans.", "answers": ["avons"], "feedback": "A idade é expressa com avoir. Com nous, a forma-alvo é avons.", "origin": "explicit_source"}, {"id": "a1-u01-l02-a07-q05", "type": "text", "prompt": "Vous ______ français ?", "answers": ["êtes"], "feedback": "A pergunta informa nacionalidade. Com vous, a forma-alvo é êtes. A explicação dessa forma ainda depende de U1-P09.", "origin": "explicit_source"}, {"id": "a1-u01-l02-a07-q06", "type": "text", "prompt": "Ils ______ 30 ans.", "answers": ["ont"], "feedback": "A idade é expressa com avoir. Com ils, a forma-alvo é ont.", "origin": "explicit_source"}]}, {"type": "quiz", "id": "a1-u01-l03-a02", "title": "Compreenda o encontro", "instruction": "Escolha uma resposta. Você pode tentar novamente.", "items": [{"id": "a1-u01-l03-a02-q01", "type": "choice", "prompt": "Quelle est la profession de Julien ?", "options": ["ingénieur", "journaliste"], "answer": 0, "feedback": "Julien se apresenta com “Je suis ingénieur”."}, {"id": "a1-u01-l03-a02-q02", "type": "choice", "prompt": "Où travaille Sofia ?", "options": ["Dans un journal à Lyon.", "Dans une entreprise de logistique."], "answer": 0, "feedback": "Sofia diz que trabalha em um jornal, em Lyon."}, {"id": "a1-u01-l03-a02-q03", "type": "choice", "prompt": "Qual pergunta busca o lugar de trabalho?", "options": ["Vous travaillez où ?", "Comment vous vous appelez ?"], "answer": 0, "feedback": "Où pergunta pelo lugar. O nome é perguntado com s’appeler."}]}, {"type": "quiz", "id": "a1-u01-l03-a03", "title": "Vrai ou faux ?", "instruction": "Escolha uma resposta. Você pode tentar novamente.", "items": [{"id": "a1-u01-l03-a03-q01", "type": "choice", "prompt": "Sofia travaille dans une entreprise de logistique.", "options": ["Vrai", "Faux"], "answer": 1, "feedback": "Faux. Quem trabalha na empresa de logística é Julien; Sofia trabalha em um jornal."}]}, {"type": "quiz", "id": "a1-u01-l03-a08", "title": "Exercice 2 — le féminin", "instruction": "Complete somente a lacuna. Preserve os acentos e, quando solicitado, escreva também o artigo.", "source_refs": [{"source_id": "U1", "locator": "§4, B123–B125"}], "items": [{"id": "a1-u01-l03-a08-q01", "type": "text", "prompt": "un étudiant → ______", "answers": ["une étudiante"], "feedback": "O alvo do original altera o artigo para une e acrescenta e em étudiante.", "origin": "explicit_source"}, {"id": "a1-u01-l03-a08-q02", "type": "text", "prompt": "un infirmier → ______", "answers": ["une infirmière"], "feedback": "O alvo do original é une infirmière: muda o artigo e a terminação -ier para -ière.", "origin": "explicit_source"}, {"id": "a1-u01-l03-a08-q03", "type": "text", "prompt": "un acteur → ______", "answers": ["une actrice"], "feedback": "O alvo do original é une actrice. Compare as formas completas, sem aplicar uma regra única a todas as profissões.", "origin": "explicit_source"}, {"id": "a1-u01-l03-a08-q04", "type": "text", "prompt": "un journaliste → ______", "answers": ["une journaliste"], "feedback": "Journaliste mantém a grafia; o artigo passa a une.", "origin": "explicit_source"}, {"id": "a1-u01-l03-a08-q05", "type": "text", "prompt": "un serveur → ______", "answers": ["une serveuse"], "feedback": "O alvo do original é une serveuse: artigo feminino e forma feminina da profissão.", "origin": "explicit_source"}]}, {"type": "quiz", "id": "a1-u01-l04-a02", "title": "Localize os dados de Paul", "instruction": "Escolha uma resposta. Você pode tentar novamente.", "items": [{"id": "a1-u01-l04-a02-q01", "type": "choice", "prompt": "Quel est son prénom ?", "options": ["Durand", "Paul"], "answer": 1, "feedback": "Paul é o prénom; Durand é o nom."}, {"id": "a1-u01-l04-a02-q02", "type": "choice", "prompt": "Comment s’écrit son nom ?", "options": ["D-U-R-A-N-D", "D-U-R-A-N-T"], "answer": 0, "feedback": "No diálogo, Paul soletra D-U-R-A-N-D."}, {"id": "a1-u01-l04-a02-q03", "type": "choice", "prompt": "Quelle est son adresse ?", "options": ["12, rue des Fleurs", "14, avenue Victor Hugo"], "answer": 0, "feedback": "O endereço informado é 12, rue des Fleurs."}, {"id": "a1-u01-l04-a02-q04", "type": "choice", "prompt": "Dans quelle ville habite-t-il ?", "options": ["Marseille", "Paris"], "answer": 0, "feedback": "Paul diz “à Marseille”."}, {"id": "a1-u01-l04-a02-q05", "type": "choice", "prompt": "Quel numéro figure dans le dialogue ?", "options": ["06 12 34 56 78", "06 45 18 62 30"], "answer": 0, "feedback": "O diálogo traz 06 12 34 56 78. Aqui você apenas localiza o texto: o par 78 está fora do recorte 0–69 e aguarda decisão acadêmica."}]}, {"type": "quiz", "id": "a1-u01-l04-a03", "title": "Reconheça a pergunta", "instruction": "Escolha uma resposta. Você pode tentar novamente.", "items": [{"id": "a1-u01-l04-a03-q01", "type": "choice", "prompt": "Para pedir endereço, qual pergunta é adequada?", "options": ["Quelle est votre adresse ?", "Quel âge avez-vous ?"], "answer": 0, "feedback": "Adresse é o endereço; âge é a idade."}, {"id": "a1-u01-l04-a03-q02", "type": "choice", "prompt": "Para pedir telefone, qual pergunta é adequada?", "options": ["Quel est votre numéro de téléphone ?", "Quelle est votre nationalité ?"], "answer": 0, "feedback": "Numéro de téléphone identifica o dado de contato pedido."}]}, {"type": "quiz", "id": "a1-u01-l04-a08", "title": "Exercice 3 — articles définis", "instruction": "Complete somente a lacuna. Preserve os acentos e, quando solicitado, escreva também o artigo.", "source_refs": [{"source_id": "U1", "locator": "§5, B160–B161"}], "items": [{"id": "a1-u01-l04-a08-q01", "type": "text", "prompt": "______ adresse", "answers": ["l'"], "feedback": "O alvo é l’adresse: o artigo é elidido antes da vogal. A organização da tabela de apoio aguarda U1-P08.", "origin": "explicit_source"}, {"id": "a1-u01-l04-a08-q02", "type": "text", "prompt": "______ numéro", "answers": ["le"], "feedback": "O gabarito do original é le numéro. Digite somente o artigo no campo.", "origin": "explicit_source"}, {"id": "a1-u01-l04-a08-q03", "type": "text", "prompt": "______ rue", "answers": ["la"], "feedback": "O gabarito do original é la rue. Digite somente o artigo no campo.", "origin": "explicit_source"}, {"id": "a1-u01-l04-a08-q04", "type": "text", "prompt": "______ villes", "answers": ["les"], "feedback": "Villes está no plural; o artigo definido solicitado é les.", "origin": "explicit_source"}, {"id": "a1-u01-l04-a08-q05", "type": "text", "prompt": "______ téléphone", "answers": ["le"], "feedback": "O gabarito do original é le téléphone. Digite somente o artigo no campo.", "origin": "explicit_source"}]}, {"type": "quiz", "id": "a1-u01-l05-a02", "title": "Quem é apresentado?", "instruction": "Escolha uma resposta. Você pode tentar novamente.", "items": [{"id": "a1-u01-l05-a02-q01", "type": "choice", "prompt": "Na primeira fala, quem é apresentado a Anna?", "options": ["Marc", "Paul"], "answer": 0, "feedback": "A expressão é “je te présente Marc”. O nome de quem fala não é informado."}, {"id": "a1-u01-l05-a02-q02", "type": "choice", "prompt": "Quelle est la nationalité d’Anna ?", "options": ["française", "italienne"], "answer": 1, "feedback": "Anna responde “Non, je suis italienne”."}, {"id": "a1-u01-l05-a02-q03", "type": "choice", "prompt": "Quais palavras do diálogo são pronomes tônicos?", "options": ["moi, lui", "je, il"], "answer": 0, "feedback": "Moi e lui são as formas tônicas destacadas no diálogo; je e il são sujeitos."}, {"id": "a1-u01-l05-a02-q04", "type": "choice", "prompt": "Na primeira fala, qual expressão indica tratamento informal?", "options": ["Je te présente…", "Je vous présente…"], "answer": 0, "feedback": "Te corresponde ao tratamento informal. A conversa também contém vous em outro contato."}]}, {"type": "quiz", "id": "a1-u01-l05-a07", "title": "Exercice 4 — conjuguez", "instruction": "Complete somente a lacuna. Preserve os acentos e, quando solicitado, escreva também o artigo.", "source_refs": [{"source_id": "U1", "locator": "§6, B199–B201"}], "items": [{"id": "a1-u01-l05-a07-q01", "type": "text", "prompt": "Nous (parler) ______ français.", "answers": ["parlons"], "feedback": "Com nous, a forma-alvo de parler é parlons.", "origin": "explicit_source"}, {"id": "a1-u01-l05-a07-q02", "type": "text", "prompt": "Elle (habiter) ______ à Paris.", "answers": ["habite"], "feedback": "Com elle, a forma-alvo de habiter é habite.", "origin": "explicit_source"}, {"id": "a1-u01-l05-a07-q03", "type": "text", "prompt": "Vous (travailler) ______ ici ?", "answers": ["travaillez"], "feedback": "Com vous, a forma-alvo de travailler é travaillez.", "origin": "explicit_source"}, {"id": "a1-u01-l05-a07-q04", "type": "text", "prompt": "Ils (étudier) ______ le français.", "answers": ["étudient"], "feedback": "Com ils, a forma-alvo é étudient. O acento faz parte da grafia.", "origin": "explicit_source"}, {"id": "a1-u01-l05-a07-q05", "type": "text", "prompt": "Je (s'appeler) ______ Lucas.", "answers": ["m'appelle"], "feedback": "A resposta inclui o pronome: Je m’appelle Lucas.", "origin": "explicit_source"}]}, {"type": "quiz", "id": "a1-u01-l05-a08", "title": "Exercice 5 — pronoms toniques", "instruction": "Complete somente a lacuna. Preserve os acentos e, quando solicitado, escreva também o artigo.", "source_refs": [{"source_id": "U1", "locator": "§6, B202–B203"}], "items": [{"id": "a1-u01-l05-a08-q01", "type": "text", "prompt": "______, je suis brésilienne.", "answers": ["Moi"], "feedback": "O pronome tônico associado a je é moi.", "origin": "explicit_source"}, {"id": "a1-u01-l05-a08-q02", "type": "text", "prompt": "Et ______ (tu), tu es d'où ?", "answers": ["toi"], "feedback": "O pronome tônico associado a tu é toi.", "origin": "explicit_source"}, {"id": "a1-u01-l05-a08-q03", "type": "text", "prompt": "______ (il), il est français.", "answers": ["Lui"], "feedback": "O pronome tônico associado a il é lui.", "origin": "explicit_source"}, {"id": "a1-u01-l05-a08-q04", "type": "text", "prompt": "______ (nous), nous habitons à Paris.", "answers": ["Nous"], "feedback": "Nous tem a mesma forma como sujeito e como pronome tônico neste exemplo.", "origin": "explicit_source"}]}, {"type": "quiz", "id": "a1-u01-l06-a01", "title": "Revisão ativa", "instruction": "Escolha uma resposta. Você pode tentar novamente.", "items": [{"id": "a1-u01-l06-a01-q01", "type": "choice", "prompt": "Qual frase informa idade?", "options": ["Je suis 24 ans.", "J’ai 24 ans."], "answer": 1, "feedback": "A idade é expressa com avoir: j’ai… ans."}, {"id": "a1-u01-l06-a01-q02", "type": "choice", "prompt": "Complete: Elle est…", "options": ["brésilien", "brésilienne"], "answer": 1, "feedback": "Brésilienne concorda com elle no exemplo."}, {"id": "a1-u01-l06-a01-q03", "type": "choice", "prompt": "Qual frase segue o modelo simples de profissão?", "options": ["Je suis médecin.", "Je suis un médecin."], "answer": 0, "feedback": "No modelo trabalhado, être + profissão aparece sem artigo."}, {"id": "a1-u01-l06-a01-q04", "type": "choice", "prompt": "Quelle forme correspond à 42 ?", "options": ["quarante-deux", "vingt-quatre"], "answer": 0, "feedback": "Quarante-deux é 42; vingt-quatre é 24."}, {"id": "a1-u01-l06-a01-q05", "type": "choice", "prompt": "Complete: ___ adresse", "options": ["le", "l’"], "answer": 1, "feedback": "Usa-se l’ antes da vogal inicial de adresse."}, {"id": "a1-u01-l06-a01-q06", "type": "choice", "prompt": "Em um primeiro encontro profissional, qual tratamento usamos neste percurso?", "options": ["tu", "vous"], "answer": 1, "feedback": "Vous é o tratamento formal proposto para esse contexto."}]}, {"type": "quiz", "id": "a1-u01-l06-a04", "title": "Compreensão escrita — cinco afirmações", "instruction": "Leia o cartão proposto abaixo. Marque vrai ou faux. Este instrumento novo aguarda validação do Coordenador.", "items": [{"id": "a1-u01-l06-a04-q01", "type": "choice", "prompt": "Lucie Martin est journaliste.", "options": ["Vrai", "Faux"], "answer": 0, "feedback": "A profissão no cartão é journaliste."}, {"id": "a1-u01-l06-a04-q02", "type": "choice", "prompt": "Elle habite à Marseille.", "options": ["Vrai", "Faux"], "answer": 1, "feedback": "O cartão indica Lyon, não Marseille."}, {"id": "a1-u01-l06-a04-q03", "type": "choice", "prompt": "Son nom est Martin.", "options": ["Vrai", "Faux"], "answer": 0, "feedback": "Lucie é o prénom; Martin é o nom."}, {"id": "a1-u01-l06-a04-q04", "type": "choice", "prompt": "Son adresse est 8, rue des Lilas.", "options": ["Vrai", "Faux"], "answer": 0, "feedback": "O endereço escrito no cartão é 8, rue des Lilas."}, {"id": "a1-u01-l06-a04-q05", "type": "choice", "prompt": "Son numéro est le 06 14 25 36 47.", "options": ["Vrai", "Faux"], "answer": 1, "feedback": "O cartão termina em 46: 06 14 25 36 46."}], "before_html": "<div class=\"business-card\"><span>Carte de visite · personnage fictif<\/span><h4 lang=\"fr\">Lucie Martin<\/h4><p lang=\"fr\">Journaliste · Lyon<\/p><p lang=\"fr\">8, rue des Lilas<br>06 14 25 36 46<\/p><\/div>"}, {"type": "quiz", "id": "a1-u01-l06-a06", "title": "Mini-teste — gramática e léxico", "instruction": "Complete os 17 itens e confira o retorno. O resultado é de treino, não nota oficial. Os quatro itens de artigos recebem instruções propostas mais específicas, ainda em validação.", "source_refs": [{"source_id": "U1", "locator": "§9, B233–B244"}], "items": [{"id": "a1-u01-l06-a06-q01", "type": "text", "prompt": "Elle ______ 22 ans.", "answers": ["a"], "feedback": "A idade usa avoir; com elle, a forma-alvo é a.", "origin": "explicit_source", "section": "Être ou avoir"}, {"id": "a1-u01-l06-a06-q02", "type": "text", "prompt": "Nous ______ étudiants.", "answers": ["sommes"], "feedback": "Com nous, a forma de être indicada no original é sommes.", "origin": "explicit_source", "section": "Être ou avoir"}, {"id": "a1-u01-l06-a06-q03", "type": "text", "prompt": "Tu ______ une adresse ?", "answers": ["as"], "feedback": "A frase usa avoir; com tu, a forma-alvo é as.", "origin": "explicit_source", "section": "Être ou avoir"}, {"id": "a1-u01-l06-a06-q04", "type": "text", "prompt": "Vous ______ brésilien ?", "answers": ["êtes"], "feedback": "A nacionalidade usa être; a forma-alvo com vous é êtes.", "origin": "explicit_source", "section": "Être ou avoir"}, {"id": "a1-u01-l06-a06-q05", "type": "text", "prompt": "Ils ______ 30 ans.", "answers": ["ont"], "feedback": "A idade usa avoir; com ils, a forma-alvo é ont.", "origin": "explicit_source", "section": "Être ou avoir"}, {"id": "a1-u01-l06-a06-q06", "type": "text", "prompt": "un étudiant → ______", "answers": ["une étudiante"], "feedback": "O gabarito altera o artigo e a forma da profissão: une étudiante.", "origin": "explicit_source", "section": "Masculino e feminino"}, {"id": "a1-u01-l06-a06-q07", "type": "text", "prompt": "un infirmier → ______", "answers": ["une infirmière"], "feedback": "O alvo do original é une infirmière.", "origin": "explicit_source", "section": "Masculino e feminino"}, {"id": "a1-u01-l06-a06-q08", "type": "text", "prompt": "français → ______", "answers": ["française"], "feedback": "O feminino indicado no original é française.", "origin": "explicit_source", "section": "Masculino e feminino"}, {"id": "a1-u01-l06-a06-q09", "type": "text", "prompt": "italien → ______", "answers": ["italienne"], "feedback": "O feminino indicado no original é italienne.", "origin": "explicit_source", "section": "Masculino e feminino"}, {"id": "a1-u01-l06-a06-q10", "type": "text", "prompt": "Artigo definido, feminino singular: ___ rue", "answers": ["la"], "feedback": "O gabarito indica la. O contexto do item precisa ser definido antes de rejeitar outros artigos possíveis.", "origin": "explicit_source", "original_prompt": "______ rue", "proposed_instruction": true, "section": "Artigos — instrução proposta"}, {"id": "a1-u01-l06-a06-q11", "type": "text", "prompt": "Artigo indefinido, plural: ___ étudiants", "answers": ["des"], "feedback": "O gabarito indica des. O contexto do item precisa ser definido antes de rejeitar outros artigos possíveis.", "origin": "explicit_source", "original_prompt": "______ étudiants", "proposed_instruction": true, "section": "Artigos — instrução proposta"}, {"id": "a1-u01-l06-a06-q12", "type": "text", "prompt": "Artigo indefinido, masculino singular: J’habite dans ___ appartement.", "answers": ["un"], "feedback": "O gabarito indica un. A contextualização da frase deve justificar a escolha antes da correção automática.", "origin": "explicit_source", "original_prompt": "J'habite dans ______ appartement", "proposed_instruction": true, "section": "Artigos — instrução proposta"}, {"id": "a1-u01-l06-a06-q13", "type": "text", "prompt": "Artigo definido, com elisão: ___ adresse", "answers": ["l'"], "feedback": "O gabarito indica l’. O item precisa distinguir a escolha do artigo do uso da elisão.", "origin": "explicit_source", "original_prompt": "______ adresse", "proposed_instruction": true, "section": "Artigos — instrução proposta"}, {"id": "a1-u01-l06-a06-q14", "type": "text", "prompt": "Je (parler) ______ français.", "answers": ["parle"], "feedback": "A forma-alvo de parler com je é parle.", "origin": "explicit_source", "section": "Conjugação"}, {"id": "a1-u01-l06-a06-q15", "type": "text", "prompt": "Nous (habiter) ______ à Rio.", "answers": ["habitons"], "feedback": "A forma-alvo de habiter com nous é habitons.", "origin": "explicit_source", "section": "Conjugação"}, {"id": "a1-u01-l06-a06-q16", "type": "text", "prompt": "Elle (s'appeler) ______ Marie.", "answers": ["s'appelle"], "feedback": "A forma-alvo inclui o pronome: elle s’appelle.", "origin": "explicit_source", "section": "Conjugação"}, {"id": "a1-u01-l06-a06-q17", "type": "text", "prompt": "Vous (travailler) ______ ici ?", "answers": ["travaillez"], "feedback": "A forma-alvo de travailler com vous é travaillez.", "origin": "explicit_source", "section": "Conjugação"}], "is_mini": true}], "lessons": [{"number": 1, "id": "a1-u01-l01", "title": "Bonjour ! Je m’appelle…", "self": [{"key": "greetings", "title": "Cumprimentar e me despedir.", "fiche": "a1-f01"}, {"key": "name", "title": "Dizer e perguntar o nome.", "fiche": "a1-f02"}, {"key": "register", "title": "Escolher entre tu e vous no contexto.", "fiche": "a1-f01"}]}, {"number": 2, "id": "a1-u01-l02", "title": "Qui êtes-vous ?", "self": [{"key": "l2-self-1", "title": "Dizer e perguntar idade.", "fiche": "a1-f04"}, {"key": "l2-self-2", "title": "Usar nacionalidade com concordância.", "fiche": "a1-f05"}, {"key": "l2-self-3", "title": "Apresentar os dados de outra pessoa.", "fiche": "a1-f03"}]}, {"number": 3, "id": "a1-u01-l03", "title": "Que faites-vous dans la vie ?", "self": [{"key": "l3-self-1", "title": "Perguntar e dizer uma profissão.", "fiche": "a1-f07"}, {"key": "l3-self-2", "title": "Escolher un, une ou des.", "fiche": "a1-f08"}, {"key": "l3-self-3", "title": "Distinguir c’est de il/elle est neste recorte.", "fiche": "a1-f09"}]}, {"number": 4, "id": "a1-u01-l04", "title": "Mes coordonnées", "self": [{"key": "l4-self-1", "title": "Soletrar um nome com apoio.", "fiche": "a1-f10"}, {"key": "l4-self-2", "title": "Pedir e informar endereço e telefone.", "fiche": "a1-f11"}, {"key": "l4-self-3", "title": "Selecionar le, la, l’ ou les.", "fiche": "a1-f12"}]}, {"number": 5, "id": "a1-u01-l05", "title": "Je vous présente…", "self": [{"key": "l5-self-1", "title": "Apresentar duas pessoas.", "fiche": "a1-f13"}, {"key": "l5-self-2", "title": "Conjugar os verbos em -er trabalhados.", "fiche": "a1-f14"}, {"key": "l5-self-3", "title": "Reconhecer singular e plural.", "fiche": "a1-f15"}]}, {"number": 6, "id": "a1-u01-l06", "title": "Soirée de rencontre", "self": [{"key": "l6-self-1", "title": "Iniciar e encerrar uma conversa com o registro adequado.", "fiche": "a1-f01"}, {"key": "l6-self-2", "title": "Informar e perguntar dados de identidade.", "fiche": "a1-f03"}, {"key": "l6-self-3", "title": "Apresentar outra pessoa.", "fiche": "a1-f13"}, {"key": "l6-self-4", "title": "Pedir e anotar contato.", "fiche": "a1-f11"}, {"key": "l6-self-5", "title": "Reconhecer o que preciso revisar.", "fiche": "a1-f16"}]}]};
/* Data is generated by build.py. No content fetch, backend or tracking. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const roots = new Map($$('[data-lesson]').map(el => [Number(el.dataset.lesson), el]));
  const lessons = new Map(UNIT_DATA.lessons.map(l => [l.number, l]));
  const questions = new Map(UNIT_DATA.groups.flatMap(g => g.items).map(q => [q.id, q]));
  const groups = new Map(UNIT_DATA.groups.map(g => [g.id, g]));
  const checked = new Set();
  const dirty = new Set();
  const failedStorage = new Set();
  const dialog = $('#resource-dialog');
  let current = 0;
  let lastLesson = 1;
  let opener = null;
  let toastTimer;
  const storeKey = n => `parcours-a1-u01-l${String(n).padStart(2, '0')}-v1`;
  const lessonNumber = el => Number(el?.closest('[data-lesson]')?.dataset.lesson || 0);
  const norm = str => String(str).normalize('NFC').replace(/[’‘`]/g, "'").replace(/\s+/g, ' ').replace(/\s*'\s*/g, "'").trim().toLocaleLowerCase('fr');
  const noAccent = str => norm(str).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const motion = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  function toast(message) {
    clearTimeout(toastTimer);
    const root = $('.toast');
    $('.toast-message', root).textContent = message;
    root.hidden = false;
    toastTimer = setTimeout(() => { root.hidden = true; }, 6500);
  }
  function status(n, message) {
    const el = $('[data-save-status]', roots.get(n));
    if (el) el.textContent = message;
  }
  function markDirty(n) {
    if (!n) return;
    dirty.add(n);
    status(n, failedStorage.has(n)
      ? 'Alterações somente nesta página. O salvamento foi bloqueado; baixe uma cópia antes de sair.'
      : 'Há alterações não salvas nesta aula. Salve ou baixe uma cópia antes de sair.');
  }
  function closeSheet() { if (dialog.open) dialog.close(); }
  function route(focus = true) {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { id = ''; }
    const target = id ? document.getElementById(id) : null;
    const match = /^aula-0?([1-6])$/.exec(id);
    const n = match ? Number(match[1]) : lessonNumber(target);
    const changed = current !== n;
    current = n;
    if (n) lastLesson = n;
    $('#unit-view').hidden = !!n;
    $('#unit-view').classList.toggle('is-visible', !n);
    roots.forEach((el, key) => { el.hidden = key !== n; el.classList.toggle('is-visible', key === n); });
    $$('[data-view-target="unit"].nav-link').forEach(el => {
      el.classList.add('is-active');
      if (!n) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
    });
    const header = $('.header-action');
    if (header) { $('span', header).textContent = `Aula ${lastLesson}`; header.setAttribute('aria-label', `Abrir Aula ${lastLesson}`); }
    document.title = n ? `Aula ${n} — ${lessons.get(n).title} · Parcours A1` : 'Unidade 1 — Parcours A1 · revisão';
    if (changed) closeSheet();
    if (n && matchMedia('(max-width: 860px)').matches) $('.sidebar-lessons .is-active button', roots.get(n))?.scrollIntoView({block:'nearest',inline:'center',behavior:'instant'});
    const heading = n ? $(`#lesson-title-${String(n).padStart(2, '0')}`) : $('#unit-title');
    const destination = target && target !== $('#main-content') && !target.matches('.app-view') ? target : heading;
    if (destination) {
      if (!destination.hasAttribute('tabindex')) destination.setAttribute('tabindex', '-1');
      if (focus) destination.focus({ preventScroll: true });
      if (destination === heading) window.scrollTo({ top: 0, behavior: 'instant' });
      else destination.scrollIntoView({ block: 'start', behavior: focus ? motion() : 'instant' });
    }
  }
  function navigate(id) {
    closeSheet();
    if (location.hash === '#' + id) route(); else location.hash = id;
  }
  function openSheet(name, button) {
    const target = $(`[data-sheet="${name}"]`);
    if (!target) return;
    if (!dialog.open) opener = button || document.activeElement;
    $$('[data-sheet]').forEach(s => { s.hidden = s !== target; });
    const laterParts = $$('[data-from-lesson]', target);
    let hiddenCount = 0;
    laterParts.forEach(part => { part.hidden = !!current && Number(part.dataset.fromLesson) > current; if (part.hidden) hiddenCount++; });
    const scopeNote = $('[data-scope-notice]', target);
    if (scopeNote) {
      scopeNote.hidden = !hiddenCount;
      scopeNote.textContent = `Recorte da Aula ${current}. Há conteúdos previstos para aulas posteriores nesta ficha; consultá-los é opcional.`;
      $('[data-show-full-fiche]', target).hidden = !hiddenCount;
    }
    dialog.setAttribute('aria-labelledby', $('h2', target).id);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('is-sheet-open');
    $('.sheet-body', target).scrollTop = 0;
    $('[data-close-sheet]', target).focus();
  }
  dialog.addEventListener('close', () => {
    document.body.classList.remove('is-sheet-open');
    if (opener?.isConnected && !opener.closest('[hidden]')) opener.focus({ preventScroll: true });
    opener = null;
  });
  dialog.addEventListener('keydown', ev => {
    if (ev.key !== 'Tab') return;
    const all = $$('button, a[href], input, select, textarea, [tabindex]', dialog)
      .filter(el => !el.disabled && el.tabIndex >= 0 && !el.closest('[hidden]') && el.getClientRects().length);
    if (!all.length) return;
    const first = all[0], last = all[all.length - 1];
    if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
    if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
  });
  dialog.addEventListener('click', ev => { if (ev.target === dialog) { const r = dialog.getBoundingClientRect(); if (ev.clientX < r.left || ev.clientX > r.right || ev.clientY < r.top || ev.clientY > r.bottom) closeSheet(); } });

  function setDialogue(id, focus = false) {
    $$('.dialogue-tab').forEach(tab => {
      const active = tab.dataset.dialogue === id;
      tab.classList.toggle('is-active', active); tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
    $$('[data-dialogue-panel]').forEach(panel => { panel.hidden = panel.dataset.dialoguePanel !== id; panel.classList.toggle('is-visible', !panel.hidden); });
  }
  $$('.dialogue-tab').forEach(tab => tab.addEventListener('keydown', ev => {
    const tabs = $$('.dialogue-tab'), i = tabs.indexOf(tab);
    const targets = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 };
    if (ev.key in targets) { ev.preventDefault(); setDialogue(tabs[targets[ev.key]].dataset.dialogue, true); }
  }));

  function answer(q) {
    if (q.options) {
      const el = $(`input[name="${q.id}"]:checked`);
      return el ? Number(el.value) : null;
    }
    return $(`[data-answer="${q.id}"]`)?.value || '';
  }
  function result(q) {
    const value = answer(q);
    const filled = q.options ? value !== null : !!String(value).trim();
    const valid = q.options ? value === q.answer : q.answers.some(a => norm(value) === norm(a));
    return { value, filled, correct: filled && valid };
  }
  function renderAnswer(q) {
    const root = $(`[data-question="${q.id}"]`), feedback = $(`#${q.id}-feedback`);
    const state = result(q), show = checked.has(q.id) && state.filled;
    root.classList.remove('is-correct', 'is-incorrect');
    feedback.textContent = '';
    const input = $('[data-answer]', root);
    input?.removeAttribute('aria-invalid');
    if (!show) return;
    root.classList.add(state.correct ? 'is-correct' : 'is-incorrect');
    if (input && !state.correct) input.setAttribute('aria-invalid', 'true');
    const lead = state.correct ? 'Resposta correta neste exercício. ' : 'Reveja sua resposta. ';
    const accentHint = !q.options && !state.correct && q.answers.some(a => noAccent(a) === noAccent(state.value)) ? 'Confira os acentos. ' : '';
    feedback.textContent = lead + accentHint + q.feedback + (!state.correct && !q.options ? ` Resposta esperada: ${q.answers[0]}.` : '');
  }
  function updateGroup(group) {
    const el = $(`[data-quiz="${group.id}"]`);
    let answered = 0, correct = 0, evaluated = 0;
    group.items.forEach(q => { const r = result(q); if (r.filled) answered++; if (r.filled && checked.has(q.id)) { evaluated++; if (r.correct) correct++; } });
    $('[data-score]', el).textContent = `${correct}/${group.items.length}`;
    $('[data-score]', el).setAttribute('aria-label', `Acertos nas respostas conferidas: ${correct} de ${group.items.length}`);
    $('[data-summary]', el).textContent = `${answered} de ${group.items.length} preenchidos · ${evaluated} conferidos.` + (group.is_mini ? ' Produção /3 e avaliação acadêmica permanecem separadas.' : ' Você pode revisar e tentar novamente.');
  }
  function checkQuestion(id, focusEmpty = true) {
    const q = questions.get(id); if (!q) return;
    if (!result(q).filled) {
      if (focusEmpty) { $(`#${id}-feedback`).textContent = 'Preencha sua resposta antes de conferir.'; $(`[data-answer="${id}"]`)?.focus(); }
    } else checked.add(id);
    if (result(q).filled) renderAnswer(q);
    groups.forEach(g => { if (g.items.some(x => x.id === id)) updateGroup(g); });
    markDirty(lessonNumber($(`[data-question="${id}"]`)));
  }
  function updateLive(n) {
    const root = roots.get(n);
    $$('[data-draft]', root).forEach(el => { const c = $(`[data-count="${el.dataset.draft}"]`, root); if (c) c.textContent = el.value.length; });
    const speller = $('[data-spelling]', root);
    if (speller) $('[data-spelling-result]', root).textContent = speller.value.trim() ? Array.from(speller.value.normalize('NFC').toLocaleUpperCase('fr')).join(' – ') : 'As letras aparecerão aqui.';
    $$('[data-card-preview]', root).forEach(card => {
      const values = card.dataset.cardPreview.split('|').map(k => $(`[data-draft="${k}"]`, root).value.trim());
      $('[data-card-name]', card).textContent = values[0] || 'Nom du personnage';
      $('[data-card-job]', card).textContent = values[1] || 'Profession';
      $('[data-card-city]', card).textContent = values[2] || 'Ville';
    });
    const self = lessons.get(n).self;
    const selected = self.map(r => $(`[data-self="${r.key}"]:checked`, root)?.value);
    const selfFeedback = $('[data-self-feedback]', root);
    if (selfFeedback) selfFeedback.textContent = selected.filter(Boolean).length < self.length
      ? `Você registrou ${selected.filter(Boolean).length} de ${self.length} objetivos.`
      : selected.every(x => x === 'alone') ? 'Você declarou autonomia. Compartilhe a produção e busque uma devolutiva sobre a interação.' : 'Retome as fichas dos objetivos marcados com apoio ou revisão e pratique novamente.';
    if (n === 6) {
      const values = $$('[data-rubric]', root).map(el => el.value === '' ? null : Number(el.value));
      $('[data-rubric-total]', root).textContent = values.every(x => x !== null)
        ? `Registro humano da tarefa: ${values.reduce((a,b) => a + b, 0)}/20. Não somado ao mini-teste; não define aprovação.`
        : `Registro humano: ${values.filter(x => x !== null).length} de 5 critérios preenchidos. Sem nota total enquanto houver critérios pendentes.`;
    }
  }
  function reviewProduction(n) {
    const root = roots.get(n), drafts = $$('textarea[data-draft]', root), empty = drafts.filter(el => !el.value.trim());
    const checks = $$('[data-check]', root), marked = checks.filter(el => el.checked).length;
    $('[data-production-feedback]', root).textContent = empty.length
      ? `Há ${empty.length} campo(s) de produção ainda vazio(s). Confira quais tarefas você está realizando. Não houve correção linguística automática.`
      : `Os campos de produção estão preenchidos; ${marked} de ${checks.length} critérios declarados como revisados. Isso não atesta a correção do texto: compartilhe-o para uma devolutiva.`;
    if (empty.length) empty[0].focus();
  }

  function collect(n) {
    const root = roots.get(n), quiz = {}, verified = [];
    questions.forEach((q,id) => { if (lessonNumber($(`[data-question="${id}"]`)) !== n) return; quiz[id] = answer(q); if (checked.has(id)) verified.push(id); });
    return { schema: 2, lessonId: lessons.get(n).id, contentVersion: UNIT_DATA.version, savedAt: new Date().toISOString(),
      drafts: Object.fromEntries($$('[data-draft]', root).map(el => [el.dataset.draft, el.value])),
      checklist: Object.fromEntries($$('[data-check]', root).map(el => [el.dataset.check, el.checked])),
      self: Object.fromEntries(lessons.get(n).self.map(r => [r.key, $(`[data-self="${r.key}"]:checked`, root)?.value || null])),
      quiz, verified,
      roleCharacter: $('[data-role-pick]:checked', root)?.value || null,
      rubric: Object.fromEntries($$('[data-rubric]', root).map(el => [el.dataset.rubric, el.value])) };
  }
  function validateState(n, state) {
    if (!state || ![1,2].includes(state.schema) || state.lessonId !== lessons.get(n).id) throw new Error('A cópia não pertence a esta aula.');
    for (const key of ['drafts','checklist','self','quiz','rubric']) if (state[key] !== undefined && (typeof state[key] !== 'object' || state[key] === null || Array.isArray(state[key]))) throw new Error('Campos inválidos na cópia.');
    if (state.verified !== undefined && (!Array.isArray(state.verified) || state.verified.some(x => typeof x !== 'string'))) throw new Error('Verificações inválidas.');
    Object.values(state.drafts || {}).forEach(v => { if (typeof v !== 'string' || v.length > 10000) throw new Error('Texto inválido na cópia.'); });
  }
  function applyState(n, state) {
    validateState(n, state);
    const root = roots.get(n);
    $$('[data-draft]', root).forEach(el => { const value = state.drafts?.[el.dataset.draft]; el.value = typeof value === 'string' ? value.slice(0, el.maxLength > 0 ? el.maxLength : 5000) : ''; });
    $$('[data-check]', root).forEach(el => { el.checked = state.checklist?.[el.dataset.check] === true; });
    $$('[data-self]', root).forEach(el => { el.checked = state.self?.[el.dataset.self] === el.value; });
    questions.forEach((q,id) => {
      if (lessonNumber($(`[data-question="${id}"]`)) !== n) return;
      const value = state.quiz?.[id];
      if (q.options) $$(`input[name="${id}"]`).forEach(el => { el.checked = Number.isInteger(value) && Number(el.value) === value; });
      else $(`[data-answer="${id}"]`).value = typeof value === 'string' ? value.slice(0,140) : '';
      checked.delete(id);
      if ((state.verified || []).includes(id) || state.schema === 1 && q.options && Number.isInteger(value)) checked.add(id);
      renderAnswer(q);
    });
    $$('[data-role-pick]', root).forEach(el => { el.checked = state.roleCharacter === el.value; });
    $$('[data-rubric]', root).forEach(el => { const value = state.rubric?.[el.dataset.rubric]; el.value = typeof value === 'string' && value !== '' && Number.isInteger(Number(value)) && Number(value) >= 0 && Number(value) <= Number(el.dataset.max) ? value : ''; });
    $('[data-production-feedback]', root).textContent = '';
    groups.forEach(updateGroup); updateLive(n);
  }
  function save(n) {
    try { localStorage.setItem(storeKey(n), JSON.stringify(collect(n))); dirty.delete(n); failedStorage.delete(n); status(n, 'Salvo neste navegador às ' + new Date().toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'}) + '. Não enviado ao professor.'); return true; }
    catch { failedStorage.add(n); status(n, 'Não foi possível salvar. Os textos continuam nesta página: baixe uma cópia antes de sair.'); return false; }
  }
  function download(text, filename, type) {
    const blob = new Blob([type.startsWith('text/') ? '\uFEFF' + text : text], {type});
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = filename; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
    toast('Download solicitado. Confira o arquivo antes de fechar a página. Nada foi enviado ao professor.');
  }
  function textForLesson(n) {
    const l = lessons.get(n), root = roots.get(n), state = collect(n);
    const lines = [`AULA ${n} — ${l.title}`, `Conteúdo ${UNIT_DATA.version} · candidata à validação acadêmica`, '', 'RASCUNHOS — sem correção automática'];
    $$('[data-draft]', root).forEach(el => { const label = el.dataset.fieldLabel || $('label[for="'+el.id+'"]',root)?.textContent || el.dataset.draft; lines.push('',label.trim(),el.value || '[não preenchido]'); });
    lines.push('', 'REVISÃO DECLARADA');
    $$('[data-check]', root).forEach(el => lines.push((el.checked ? '[x] ' : '[ ] ') + el.closest('label').textContent.trim()));
    lines.push('', 'AUTOAVALIAÇÃO — não certifica domínio');
    const names = {alone:'Consigo sozinho',support:'Com apoio',review:'Quero revisar'};
    l.self.forEach(r => lines.push(r.title + ': ' + (names[state.self[r.key]] || '[não preenchido]')));
    lines.push('', 'EXERCÍCIOS — resultados de treino, não nota oficial');
    groups.forEach(g => { if (!g.id.startsWith(l.id)) return; lines.push('',g.title); g.items.forEach(q => { const r = result(q), value = q.options ? (r.value === null ? '[não respondido]' : q.options[r.value]) : r.value || '[não respondido]'; lines.push(q.prompt, 'Resposta: '+value, checked.has(q.id) && r.filled ? (r.correct ? 'Correta no exercício.' : 'Rever resposta.') : 'Ainda não conferida.'); }); });
    if (n === 6) {
      lines.push('', 'PERSONAGEM: ' + (state.roleCharacter || '[não selecionado]'), '', 'RUBRICA HUMANA DA TAREFA — não somada ao mini-teste');
      $$('[data-rubric]',root).forEach(el => lines.push(`${el.dataset.fieldLabel}: ${el.value === '' ? '[não avaliado]' : el.value + '/' + el.dataset.max}`));
      lines.push($('[data-rubric-total]',root).textContent, '', 'Áudio ausente. Leitura do roteiro não equivale a escuta. Texto do mini-teste /3 depende de avaliação humana.');
    }
    return lines.join('\n');
  }
  function exportText(numbers) {
    download('PARCOURS A1 — UNIDADE 1\n'+new Date().toLocaleString('pt-BR')+'\nGerado localmente. Sem envio automático.\n\n'+numbers.map(textForLesson).join('\n\n'+'—'.repeat(48)+'\n\n'), numbers.length === 1 ? `Parcours_A1_Aula${String(numbers[0]).padStart(2,'0')}_respostas.txt` : 'Parcours_A1_Unidade01_respostas.txt', 'text/plain;charset=utf-8');
  }
  function clear(n) {
    if (!confirm(`Apagar todas as respostas da Aula ${n} desta página e deste navegador? Não será possível desfazer.`)) return;
    let removed = true; try { localStorage.removeItem(storeKey(n)); } catch { removed = false; }
    applyState(n, {schema:2,lessonId:lessons.get(n).id}); dirty.delete(n);
    status(n, removed ? 'Respostas desta aula apagadas. As outras aulas foram preservadas.' : 'Página limpa, mas o armazenamento está bloqueado. Confira as configurações do navegador.');
  }

  document.addEventListener('click', ev => {
    const el = ev.target.closest('button,a'); if (!el) return;
    const n = lessonNumber(el) || current;
    if (el.classList.contains('skip-link')) { ev.preventDefault(); const heading = current ? $(`#lesson-title-${String(current).padStart(2,'0')}`) : $('#unit-title'); heading.focus(); }
    else if (el.dataset.go) navigate(el.dataset.go);
    else if (el.dataset.viewTarget) navigate(el.dataset.viewTarget === 'lesson' ? `aula-${String(lastLesson).padStart(2,'0')}` : 'unidade');
    else if (el.dataset.openSheet) openSheet(el.dataset.openSheet,el);
    else if (el.hasAttribute('data-close-sheet')) closeSheet();
    else if (el.dataset.goAnchor) navigate(el.dataset.goAnchor);
    else if (el.dataset.dialogue) setDialogue(el.dataset.dialogue);
    else if (el.hasAttribute('data-lesson-anchor')) { ev.preventDefault(); navigate(el.getAttribute('href').slice(1)); }
    else if (el.dataset.checkAnswer) checkQuestion(el.dataset.checkAnswer);
    else if (el.dataset.checkGroup) { const g = groups.get(el.dataset.checkGroup); g.items.forEach(q => checkQuestion(q.id,false)); const firstEmpty = g.items.find(q => !result(q).filled); if (firstEmpty) { $(`#${firstEmpty.id}-feedback`).textContent = 'Este item ainda está sem resposta.'; $(`[data-answer="${firstEmpty.id}"]`)?.focus(); } }
    else if (el.dataset.resetQuiz) { const g = groups.get(el.dataset.resetQuiz); g.items.forEach(q => { checked.delete(q.id); if (q.options) $$(`input[name="${q.id}"]`).forEach(r => {r.checked=false;}); else $(`[data-answer="${q.id}"]`).value=''; renderAnswer(q); }); updateGroup(g); markDirty(n); $('input',$(`[data-quiz="${g.id}"]`)).focus(); }
    else if (el.hasAttribute('data-review-production')) reviewProduction(n);
    else if (el.hasAttribute('data-save')) save(n);
    else if (el.hasAttribute('data-export')) exportText([n]);
    else if (el.hasAttribute('data-clear')) clear(n);
    else if (el.hasAttribute('data-save-all')) { const results = [...roots.keys()].map(save); $('[data-workspace-status]').textContent = results.every(Boolean) ? 'Seis aulas salvas neste navegador. Não enviadas ao professor.' : 'Algumas aulas não puderam ser salvas. Baixe a cópia JSON.'; }
    else if (el.hasAttribute('data-export-all')) exportText([...roots.keys()]);
    else if (el.hasAttribute('data-backup')) download(JSON.stringify({product:'parcours-a1',unit:'a1-u01',schema:1,contentVersion:UNIT_DATA.version,exportedAt:new Date().toISOString(),lessons:[...roots.keys()].map(collect)},null,2),'Parcours_A1_Unidade01_rascunhos.json','application/json;charset=utf-8');
    else if (el.hasAttribute('data-show-full-fiche')) { const sheet=el.closest('[data-sheet]'); $$('[data-from-lesson]',sheet).forEach(s=>{s.hidden=false;}); el.hidden=true; $('[data-scope-notice]',sheet).textContent='Ficha completa. Os títulos indicam em qual aula cada recorte é trabalhado.'; }
  });
  document.addEventListener('change', ev => {
    const el = ev.target, n = lessonNumber(el);
    if (!n) return;
    if (el instanceof HTMLInputElement && questions.has(el.name) && el.type==='radio') { checked.add(el.name); renderAnswer(questions.get(el.name)); groups.forEach(g=>{if(g.items.some(q=>q.id===el.name))updateGroup(g);}); }
    if (el.matches('[data-self],[data-check],[data-role-pick],[data-rubric]') || questions.has(el.name)) { markDirty(n); updateLive(n); }
  });
  document.addEventListener('input', ev => {
    const el=ev.target,n=lessonNumber(el);
    if (!n) return;
    if (el.matches('[data-draft]')) { updateLive(n); $('[data-production-feedback]',roots.get(n)).textContent=''; markDirty(n); }
    if (el.matches('[data-answer]')) { checked.delete(el.dataset.answer); renderAnswer(questions.get(el.dataset.answer)); groups.forEach(g=>{if(g.items.some(q=>q.id===el.dataset.answer))updateGroup(g);}); markDirty(n); }
  });
  document.addEventListener('keydown', ev => { if (ev.key==='Enter' && ev.target.matches('[data-answer]')) {ev.preventDefault();checkQuestion(ev.target.dataset.answer);} });
  const aliases={ '01':'saudacao saudacoes cortesia registro','02':'nome chamar','03':'ser estar identidade','04':'ter idade','05':'nacionalidade nacionalidades pais paises','06':'numero numeros telefone','07':'profissao profissoes feminino','08':'artigo artigos indefinidos','09':'profissao','10':'alfabeto soletracao','11':'endereco contato telefone','12':'artigos definidos','13':'pronomes','14':'verbos conjugacao','15':'singular plural','16':'pronuncia entonacao ligacao'};
  $('#fiche-search').addEventListener('input', ev => {
    const term = noAccent(ev.target.value);
    let count=0;
    $$('.library-item').forEach(el=>{el.hidden=!noAccent(el.dataset.searchText+' '+aliases[el.dataset.openSheet.slice(-2)]).includes(term);if(!el.hidden)count++;});
    $('[data-search-empty]').hidden=!!count;
  });
  $('#import-backup').addEventListener('change', async ev => {
    const input=ev.target,file=input.files?.[0],message=$('[data-workspace-status]');
    if (!file) return;
    try {
      if (file.size>2_000_000) throw new Error('O arquivo excede 2 MB.');
      const data=JSON.parse(await file.text());
      if (data.product!=='parcours-a1'||data.unit!=='a1-u01'||data.schema!==1||!Array.isArray(data.lessons)||!data.lessons.length||data.lessons.length>6) throw new Error('Use uma cópia JSON exportada por este produto.');
      const entries=data.lessons.map(state=>{const l=UNIT_DATA.lessons.find(l=>l.id===state.lessonId);if(!l)throw new Error('Aula desconhecida.');validateState(l.number,state);return [l.number,state];});
      if (new Set(entries.map(([n])=>n)).size!==entries.length) throw new Error('Aulas duplicadas na cópia.');
      if (!confirm(`Recuperar ${entries.length} aula(s)? As respostas atuais dessas aulas serão substituídas na página. Baixe uma cópia antes, se necessário.`)) {message.textContent='Importação cancelada.';return;}
      entries.forEach(([n,state])=>{applyState(n,state);markDirty(n);});
      message.textContent=`${entries.length} aula(s) recuperada(s) na página. Use “Salvar todas as aulas” para manter no navegador.`;
    } catch (error) { message.textContent='Não foi possível importar: '+error.message; }
    finally {input.value='';}
  });
  window.addEventListener('hashchange',()=>route());
  window.addEventListener('beforeunload',ev=>{if(dirty.size){ev.preventDefault();ev.returnValue='';}});
  groups.forEach(updateGroup);
  roots.forEach((_,n)=>{
    updateLive(n);
    try { const raw=localStorage.getItem(storeKey(n));if(raw){applyState(n,JSON.parse(raw));status(n,'Rascunho recuperado deste navegador. Alterações novas precisam ser salvas novamente.');} }
    catch {failedStorage.add(n);status(n,'O rascunho local não pôde ser recuperado. Você pode estudar e baixar uma cópia sem salvar no navegador.');}
  });
  route(false);
})();
