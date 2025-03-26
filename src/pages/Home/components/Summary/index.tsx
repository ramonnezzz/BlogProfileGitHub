import { SummaryAnchors, SummaryContainer, SummaryHeader } from "./styles";
import { useState, useEffect } from "react";
import { ArrowUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { api } from "../../../../lib/api";



interface UserProfile {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company?: string;
  followers: number;
  html_url: string;
}

export function Summary() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/ramonnezzz");
        setProfile(response.data);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  if (loading) {
    return <p>Aguarde, carregando os dados do GitHub...</p>;
  }

  return (
    <SummaryContainer>
      <img src={profile?.avatar_url} alt={profile?.name} />
      <section>
        <SummaryHeader>
          <h1>{profile?.name}</h1>
          <a href={profile?.html_url} target="_blank">
            GITHUB
            <ArrowUpRight size={12} />
          </a>
        </SummaryHeader>
        <p>{profile?.bio}</p>
        <SummaryAnchors>
          <div>
            <GithubLogo size={18} />
            <span>{profile?.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{profile?.company || "Sem empresa"}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{profile?.followers} seguidores</span>
          </div>
        </SummaryAnchors>
      </section>
    </SummaryContainer>
  );
}