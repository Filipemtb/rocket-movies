import { Container, Profile } from './styles'

export function Header() {
  return(
    <Container>
      <Profile>
        <img src="https://github.com/Filipemtb.png"
         alt="Foto do usuário"
          />

          <div>
            <span>Bem-Vindo</span>
            <strong>Filipe Mota</strong>
          </div>
      </Profile>
    </Container>
  ); 
}