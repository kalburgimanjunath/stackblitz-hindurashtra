export const POST = ({ items, title }) => {
  return (
    <div className="m-1 p-24 bg-white-100">
      <h3 className="text-4lx mb-2">{title}</h3>
      <div className="grid grid-cols-2">
        {items &&
          items.map((item) => {
            return (
              <>
                <div className="post-item p-10 m-2 bg-pink-100 rounded-lg">
                  <h6 className="font-bold pb-1">{item.title}</h6>
                  <div className="font-normal pb-1">{item.subtitle}</div>
                  <div>{item.description}</div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};
