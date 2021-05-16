import React, {useState} from 'react' 

export const Searchbars = () => {
  const [searchName, setSearchName ] = useState("");
  const [searchType, setSearchType ] = useState("");
  const [pets, setPets] = useState([]);
  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchType = e => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };
  const findByName = () => {
    find(searchName, "name")
  };
  async function getPetInfo() {
    const response = await fetch('https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/my_pets-dbdsd/service/pets/incoming_webhook/petswebhook');
    const json = await response.json();
    console.log(json); 
     setPets(json.pets);
     console.log(pets) 
}

  const find = (query, by) => {
    getPetInfo.find(query, by)
      .then(response => {
        console.log(response.data);
        setPets(response.data.restaurants);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByType = () => {
    find(searchType, "type")
  };
  return (
        <div className="container text-center searchbars">
      <div className="row">
        <div className="input-group col-lg-6">
          <input
            type="text"
            className="form-control white"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn  btn-success"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-6">
          <input
            type="text"
            className="form-control white"
            placeholder="Search by Type"
            value={searchType}
            onChange={onChangeSearchType}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="button"
              onClick={findByType}
            >
              Search
            </button>
          </div>
        </div>
        
</div>
      </div>
  )
   }