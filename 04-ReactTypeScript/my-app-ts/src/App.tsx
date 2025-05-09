
import { Card } from './components/Card';
import { Layout } from './components/Layout';

function App() {
  return (

    <Layout>

      Hello World

      <Card
        id={1}
        paragrafo='TypeScript'
        detalhes='Aula sobre TypeScript'
      />

      <Card
        id={2}
        paragrafo='React'
        detalhes='Aula sobre React'
      />

      <Card
        id={3}
        paragrafo='JavaScript'
        detalhes='Aula sobre JavaScript'
      />

    </Layout>

  );
}

export default App;
