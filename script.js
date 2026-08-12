const premises = {
  1: `Participar ativa e exclusivamente do Papo Formativo do seu tema de atuação no Grupo de Estudos, com o técnico pedagógico da Secretaria de Estado da Educação (SEED), de forma síncrona e com câmera aberta, em local adequado, livre de ruídos e bem iluminado.`,
  2: `Planejar e estudar as reuniões de acordo com o roteiro proposto, compreendendo o contexto para atender às necessidades da turma, não alterando a intencionalidade e os objetivos do roteiro e sem descaracterizar a identidade visual do Grupo de Estudos Formadores em Ação.`,
  3: `Postar com antecedência mínima de 24 horas, no mural do Google Classroom, as informações da reunião contendo a pauta (link dos slides), data, horário e link do Google Meet, seguindo a orientação disponibilizada no Google Classroom do Papo Formativo.`,
  4: `Criar uma playlist no canal do YouTube utilizando seu email @escola, seguindo as orientações repassadas pela equipe NFORM e Tutoria de Formação.`,
  5: `Utilizar as horas-atividade para desenvolvimento das ações do Grupo de Estudos, como a correção de atividades, o atendimento aos cursistas, alinhamento com tutor de formação e participação de Feedback Formativo.`,
  6: `Acessar o link do Google Meet no horário da reunião e iniciar a gravação. É indispensável inserir os tutores de formação na agenda como coorganizadores.`,
  7: `Estimular a pontualidade dos seus cursistas para o horário previamente agendado, estabelecendo uma tolerância de no máximo 5 minutos.`,
  8: `Orientar os cursistas sobre a participação ativa nas reuniões, em local adequado e com câmera aberta, ressaltando a importância desta ação para uma comunicação mais assertiva e para o fortalecimento do pertencimento dos cursistas.`,
  9: `Gravar as reuniões realizadas com os cursistas, utilizando a gravação nativa.`,
  10: `Realizar as reuniões via Google Meet com câmera aberta, em local adequado; e incentivar os cursistas a participarem com as câmeras abertas.`,
  11: `Realizar as reuniões com cada turma, vivenciando o roteiro, com o objetivo de formar os(as) cursistas, levando-os a buscar a melhoria da prática docente bem como oportunizar a integração dos estudantes com diferentes habilidades e necessidades.`,
  12: `Desenvolver o roteiro proposto, organizando o tempo de cada momento de forma a gerenciar a duração total da reunião de 1h40, reservando 10 minutos ao final, para o preenchimento do formulário de avaliação e para esclarecimento de eventuais dúvidas dos participantes.`,
  13: `Realizar e seguir os combinados para o bom encaminhamento das reuniões com os cursistas ao longo da jornada.`,
  14: `Estimular a participação dos cursistas ao longo da reunião, favorecendo o diálogo contínuo e a troca de experiências.`,
  15: `Explicar a dinâmica do Grupo de Estudos aos cursistas e acompanhar o desenvolvimento das atividades nas suas turmas por meio da Plataforma Google Classroom.`,
  16: `Compreender, com empatia, os diferentes níveis e estilos de aprendizagem dos cursistas.`,
  17: `Mediar conflitos e expressar-se de forma positiva e favorável à didática.`,
  18: `Intermediar, didática e pedagogicamente, as atividades, tendo como referência o conteúdo específico dos roteiros da formação.`,
  19: `Orientar e avaliar as atividades propostas, seguindo as orientações encaminhadas pela coordenação do Grupo de Estudos Formadores em Ação, proporcionando devolutivas aos cursistas de acordo com os critérios especificados nas rubricas de avaliação.`,
  20: `Orientar, estimular, engajar e incentivar o cursista para o desenvolvimento da implementação e postagem das atividades avaliativas de cada jornada do Grupo de Estudos Formadores em Ação.`,
  21: `Demonstrar pertencimento e proceder com ação de referência ao falar como representante da SEED, assim como trabalhar na promoção de todas as ações propostas pela mantenedora.`,
  22: `Realizar o upload da gravação da reunião para sua playlist em até 24hrs, renomeando o vídeo conforme orientação da Tutoria de Formação.`,
  23: `Manter atualizada sua playlist, criada com a conta @escola.`,
  24: `Postar no mural do Google Classroom o link da gravação da reunião, em até 24hrs após sua realização.`,
  25: `Preencher a frequência e o conteúdo da reunião no LRCO+Aulas durante a reunião, mantendo-o atualizado semanalmente. A avaliação deverá ser registrada durante o decorrer da formação e concluída até o final da Jornada.`,
  26: `Preencher no Campo Observação, em Frequência no LRCO+Aulas, as ações de busca ativa realizadas em caso de ausência do(s) cursista(s), bem como justificativas para sua falta, como atestados e declarações e a justificativa para participação com câmera fechada.`,
  27: `Realizar ações de engajamento e busca ativa, por meio de e-mail institucional (@escola) e mensagem individual pelo Classroom, a fim de garantir o desenvolvimento das atividades dos cursistas, na Plataforma Google Classroom ou outra plataforma indicada pela SEED.`,
  28: `Realizar as devolutivas das atividades avaliativas dentro do Google Classroom através do feedback, em até 48 horas.`,
  29: `Incentivar a produção e o compartilhamento de boas práticas, também selecionar e encaminhar ao tutor de formação uma boa prática dos seus cursistas em formulário próprio, ao término de cada jornada.`,
  30: `Manter comunicação ativa e efetiva com a tutoria de Formação.`,
  31: `Participar das formações presenciais e online, reuniões de feedbacks ou sempre que convocado pelo tutor de formação e/ou equipe NFORM.`,
  32: `Na impossibilidade comprovada de realizar a reunião (atestado, falta de energia elétrica, ausência de sinal de internet e outros), comunicar com antecedência o seu tutor de formação e combinar o modo de orientar seus cursistas quanto à participação na pauta de reunião prevista para a semana (o tutor de formação poderá substituir o formador ou os cursistas poderão ser realocados em outras turmas).`,
  33: `Informar imediatamente o tutor de formação do NRE sobre qualquer afastamento legalmente concedido durante o período que estiver atuando na função.`,
  34: `Exercer ação modelar relativa às suas atribuições como liderança nas reuniões do GE e correlacionar a sua atuação à prática pedagógica enquanto professor na escola em que atua.`,
  35: `Trabalhar colaborativamente com os tutores, cumprindo as datas combinadas para o fechamento do LRCO e as correções indicadas pela tutoria de formação dentro do prazo estabelecido.`,
  36: `Estar ciente de que o Ambiente Virtual de Aprendizagem (AVA) Google Classroom é o canal de comunicação oficial entre o formador e seus respectivos cursistas e, desta forma, orientá-los. Porém, utilizar o bom senso, pois há professores que não conseguem acessar e-mail ou Classroom pelo celular, sendo possível utilizar aplicativos de mensagens, por exemplo, o WhatsApp como comunicação alternativa.`,
  37: `Responder às solicitações dos cursistas no prazo máximo de 24 (vinte e quatro) horas.`,
  38: `Responder às solicitações da tutoria de formação no prazo máximo de 24 (vinte e quatro) horas.`,
  39: `Participar de reuniões de Feedback Formativo ou orientações e encaminhamentos de ações com o tutor de formação e/ou técnico de Feedback Formativo da SEED, quando solicitado, em horário pré-agendado em formato online.`,
  40: `Participar das formações ofertadas pela mantenedora, de maneira presencial ou online.`,
  41: `Manter o respeito e a cordialidade para com todas as pessoas e instituições envolvidas no Grupo de Estudos Formadores em Ação (Artigo 331 CP - Decreto Lei nº 2.848).`,
  42: `Atuar de acordo com o Estatuto do Servidor, prezando pela "impessoalidade, legalidade, eficiência, moralidade e publicidade" (Lei 6174/1970 - Estatuto do Servidor Público Estadual), mantendo a discrição em relação às informações e documentos recebidos, pertinentes ao NFORM. Em caso de dúvida, pergunte sobre a possibilidade de encaminhamento e a qual público se destina, observando a Lei Geral de Proteção de Dados Pessoais (LGPD).`
};

const modal = document.getElementById('premiseModal');
const modalTitle = document.getElementById('modalTitle');
const premiseList = document.getElementById('premiseList');
const topicButtons = document.querySelectorAll('.topic-button');
const closeTriggers = document.querySelectorAll('[data-close-modal]');
let lastFocusedElement = null;

function openModal(button) {
  lastFocusedElement = button;
  const title = button.dataset.topic;
  const premiseNumbers = button.dataset.premises
    .split(',')
    .map(Number)
    .filter(Boolean);

  modalTitle.textContent = title;
  premiseList.innerHTML = premiseNumbers.map(number => `
    <article class="premise-card">
      <div class="premise-number">Premissa ${number}</div>
      <p>${premises[number] ?? 'Texto não cadastrado.'}</p>
    </article>
  `).join('');

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.close-button').focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement) lastFocusedElement.focus();
}

topicButtons.forEach(button => {
  button.addEventListener('click', () => openModal(button));
});

closeTriggers.forEach(trigger => {
  trigger.addEventListener('click', closeModal);
});

document.addEventListener('keydown', event => {
  if (!modal.classList.contains('is-open')) return;

  if (event.key === 'Escape') {
    closeModal();
    return;
  }

  if (event.key === 'Tab') {
    const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
