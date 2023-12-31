// import logo from './logo.svg';
import './App.css';
import axios from "axios";

async function userData() {
  const url = "localhost:8000/account/health/";
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}

function Header(props) {
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const topics = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    topics.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {topics}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    {id: 1, title: "html", body: "html is ..."},
    {id: 2, title: "css", body: "css is ..."},
    {id: 3, title: "javascript", body: "javascript is ..."}
  ]
  // const data = userData();
  // console.log(data);
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>     
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
