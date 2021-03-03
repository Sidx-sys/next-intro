const CoordinateList = (props) => {
  const { markers, setMarkers } = props;

  return (
    <div>
      <table className="table mx-auto">
        <thead>
          <tr>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {markers.map((position) => {
            return (
              <tr key={position.id}>
                <td>{position.lat}</td>
                <td>{position.lng}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm mb-2"
                    onClick={() => {
                      setMarkers((curMarkers) =>
                        curMarkers.filter((x) => x.id !== position.id)
                      );
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoordinateList;
