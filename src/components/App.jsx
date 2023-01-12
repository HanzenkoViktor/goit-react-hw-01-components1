import { Container, Wrapper } from "./App.stayled";
import User from "./User/User";
import { user } from "data";

export default function App() {
  return (
    <Container>
      <Wrapper>
        <User
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Wrapper>
    </Container>
  );
}
