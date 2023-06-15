export default function Projects({ data, title }) {
  return (
    <div className="cards m-1 p-24 bg-gray-100">
      <h3 className="text-4lx mb-2">{title}</h3>
      <div className="grid grid-cols-2">
        {data &&
          data.map((item) => {
            return (
              <div className="card p-10 m-2 bg-gray-50 rounded-lg">
                {/* <div style={{ width: 20, height: 20 }}>
                <img src={item.imageurl} style={{ width: 20, height: 20 }} />
              </div> */}
                <h5>{item.title}</h5>
                <div>{item.description}</div>
                <div className="tags">
                  {item.tags &&
                    item.tags.map((tag) => {
                      return <span>{tag}</span>;
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
