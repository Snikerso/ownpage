import React from 'react';
import styled from 'styled-components';
import AvatarExplain from 'components/molecules/AvatarExplain';
import { HeadWithUnderLine } from 'components/atoms/Heads';
import { HeadWithItem } from 'components/atoms/Wrappers';
import * as Acordion from 'components/organisms/Acordion';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap:60px;
`;

const StyledHeadWithItem = styled(HeadWithItem)`
  margin-top:15px;
`

function AboutPage() {
  return (
    <StyledWrapper>
      <AvatarExplain />
      <div>
      <StyledHeadWithItem>
        <HeadWithUnderLine text="Zainteresowania" width={208}/>
      </StyledHeadWithItem>
        <Acordion.Wizzard>
          <Acordion.Detail title="Kognitywistyka" descripition="Kognitywistyka idealnie wpasowuję się w moje wielorakie zainteresowania. Łączy wszystkie elementy jakich chce się uczyć w całość, a jest tego sporo. Filozofia, psychologia poznawcza, biologia, językoznawstwo, sztuczną inteligencja, matematyka, analiza danych, logika i fizyka. To są rzeczy, które mnie jarają i jest tego tyle, że się nie nudzę. Jako swój cel badawczy obrałem temat związany z rozwojem języka pisanym i rozwojem poznawczym człowieka w kontekscie pseudo-synestezji." />
          <Acordion.Detail title="Eye Tracking i EEG" descripition="Eyetracking poznałem na studiach za sprawą promotora. Teraz próbuje połączyć te dwie technologie, żeby uzyskać interfrejs sterowany myślą." />
          <Acordion.Detail title="Reinforcement Learning" descripition="Jest to dla mnie najciekawsza odnoga machine learningu, ponieważ zawiera interakcję ze środowiskiem (akcja i reakcja) oraz poznawanie świata przez agenta. Początkowo ciężko mi było znaleźć wykorzustanie RL do celów innych niż gry ale teraz mam wiele pomysłów jak można go zastosować." />
          <Acordion.Detail title="User Experience" descripition={"W UX'ie mogę wykorzystać moje zainteresowania m.in. psychologią poznawczą i analizą danych w praktyce. Ciekawym wyzwaniem dla przyszłych UX'owców i dla mnie będzie rozwiązanie problemów komunikacji za pomocą myśli."} />
        </Acordion.Wizzard>
      </div>
      <div>
      <HeadWithItem>
        <HeadWithUnderLine text="Marzenia" width={120}/>
      </HeadWithItem>
        <Acordion.Wizzard>
          <Acordion.Detail title="Aplikacja do na nauki języków i treningu poznawczego." descripition="Aplikacja ma służyć do nauki słówek, a trening poznawczy ma być pobocznym efektem nauki. To co ma ją wyróżniać to różnorodne gry dzięki czemu aplikacja nie stanie się nudna oraz poziom trudności, który będzie adaptował się do każdego użytkownika. System adaptacji będzię oparty o Reinforcement Learning. Aktualnie jestem na etapie programowania gry, na której będę testował mechanizm adaptacji https://distracted-leavitt-fdc311.netlify.app/. Gra w niedalekiej przyszłości ma też posłużyć do przetestowania łączności z eyetrackera z EEG co pozwoli na dokładniejsze dopasowanie poziomu trudności." />
          <Acordion.Detail title="Gra przeglądarkowa" descripition="Chciałbym stworzyć gre strategiczną w stylu Ogame, ale rozgrywka walki będzię się działa jak w RTS. " />
          <Acordion.Detail title="System wiatraków" descripition="Chce stworzyć wiatraki, które każdy by mógł założyć na balkonie, bądź na swojej działce, a spółdzielnie mogły by je zakładać na blokach. Miały by system oparty o RL i dopasowywały by się do wiatru, tak żeby optymalizować produkcje prądu. Dzięki temu zostały by wykorzystane miejsce, które do tej pory jest tylko betonową strefą mieszkalną. W przyszłosci dane pochodzące z takich wiatraków mogły by posłużyć do stworzenia optymalnie wiatrowo miasta. " />
          <Acordion.Detail title="Samoświadomy robot" descripition="Do stworzenia samoświadomego robocika chcę użyć RL, logiki niemonotonicznej oraz grafów skojarzeniowych. Dzięki wiedzy, którą zdobywam w ramach kognitywistyki chcę ją wykorzystać do tego aby sztuczna inteligencja miała możliwość obrażenia się za słowo 'sztuczna'." />
          <Acordion.Detail title="Sterowanie myślą" descripition="Chcę połączyć eyetracker z EEG. Eyetracker jest po to, żeby wyszkolić RL do rozpoznawania akcji i zsynchronizować ją z falą EEG. Po nauczeniu się RL chcę zrezygnować z eyetrackera na rzecz sterowania tylko za pomocą EEG." />
         </Acordion.Wizzard>
      </div>

    </StyledWrapper>
  );
}

export default AboutPage;
