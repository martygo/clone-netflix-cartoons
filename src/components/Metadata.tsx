type MetadataProps = {
  title: string;
  subtile: string;
};

function Metadata({ title, subtile }: MetadataProps) {
  return (
    <section className="App__collection__content">
      <h1 className="App__collection__content--title">{title}</h1>
      <p className="App__collection__content--subtitle">{subtile}</p>
    </section>
  );
}

export default Metadata;
