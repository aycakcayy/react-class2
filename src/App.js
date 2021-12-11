import Card from "./components/Card"


function App() {


  const users = [
    { userName: "Ayca" },
    { userName: "aykan" },
    { userName: "koray" },
    { userName: "sakine" },
    { userName: "arif" },
    { userName: "Ayca" },
  ]


  return (

    <div className="div">
      <div className="container">
        <div className="col-sm-12">
          <div className="mb-3">
            <label for="search" className="form-label">Search</label>
            <input name="search"
              type="text"
              className="form-control" id="search"
            />
          </div>
          <div className="div">
            {
              users.map(
                user=> <div className="col-sm-3 mb-3">
                  <Card user={user} />
                  </div>
              )
            }
          </div>
         
        </div>
      </div>
    </div>




  )
}

export default App;
