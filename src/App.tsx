import Header from './components/Header';
import MainContent from './components/MainContent';
import Metadata from './components/Metadata';
import Discover from './components/Discover';
import CTA from './components/CTA';
import Footer from './components/Footer';

import data from './data/popular';

function App() {
  return (
    <div className="App">
      <Header />

      <MainContent>
        <Metadata
          title="TV Cartoons"
          subtile="Cartoons can take us to different worlds, times and dimensions, all without ever leaving
            the couch. Get ready for laughs, adventure and loads of fun!"
        />

        <Discover title="Popular on Netflix" link="Explore more" data={data} />
        <Discover title="Released in the Past Year" data={data} />
        <Discover title="Watch Together for Older Kids" data={data} />
        <Discover title="Feel-Good" data={data} className="App__collection__discover--blur" />
        <Discover
          title="Children & Family TV"
          data={data}
          className="App__collection__discover--blur"
        />

        <CTA />
      </MainContent>

      <Footer />
    </div>
  );
}

export default App;
