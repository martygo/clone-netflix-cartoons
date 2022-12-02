import ShowContext, { showDefaultData } from './context/ShowContext';

import Layout from './components/Layout';
import MainContent from './components/MainContent';
import Metadata from './components/Metadata';
import Discover from './components/Discover';
import CTA from './components/CTA';

function App() {
  return (
    <ShowContext.Provider value={showDefaultData}>
      <Layout>
        <MainContent>
          <Metadata
            title="TV Cartoons"
            subtile="Cartoons can take us to different worlds, times and dimensions, all without ever leaving
            the couch. Get ready for laughs, adventure and loads of fun!"
          />

          <Discover title="Popular on Netflix" link="Explore more" />
          <Discover title="Released in the Past Year" />
          <Discover title="Watch Together for Older Kids" />
          <Discover title="Feel-Good" className="App__collection__discover--blur" />
          <Discover title="Children & Family TV" className="App__collection__discover--blur" />

          <CTA />
        </MainContent>
      </Layout>
    </ShowContext.Provider>
  );
}

export default App;
