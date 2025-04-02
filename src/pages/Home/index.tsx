
import { Issues } from "./components/Issues";
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside } from "./styles";

export function Home() {

  return (
    <HomeContainer>
      <Summary />
      <IssuesAside>
        <Issues>
          
        </Issues>
      </IssuesAside>
    </HomeContainer>
  );
}
