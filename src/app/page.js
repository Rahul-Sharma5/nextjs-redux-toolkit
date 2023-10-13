import AddUser from "./Components/AddUser";
import DisplayUser from "./Components/DisplayUser";

export default function Home() {
  return (
    <main>
      <div className="main-heading"><h1>Redux Toolkit With NextJs</h1></div>
      <AddUser />
      <DisplayUser />
    </main>
  );
}
