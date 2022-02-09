import React from "react";
import Person from "./person";

async function fetchPersons() {
  try {
    const response = await fetch("/api/person.json");
    const data = await response.json();
    return data;
  } catch {
    return {
      person: [],
    };
  }
}

class ListPersons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  async getPersons() {
    const data = await fetchPersons();
    this.setState({
      persons: data.person,
    });
  }

  componentDidMount() {
    this.getPersons();
  }

  render() {
    /*     function updateCool(id, array) {
      if (this.state.persons[id].isCool == "chata") {
        ththis.state.persons[id].isCool = "legal";
        this.setState(<Person isCool={array.isCool} />);
      } else {
        this.state.persons[id].isCool = "chata";
        this.setState(<Person isCool={array.isCool} />);
      }
    } */

    return (
      <>
        <h1>List Persons</h1>
        {this.state.persons.map((indexPerson, index) => (
          <Person
            key={index}
            name={indexPerson.name}
            age={indexPerson.age}
            email={indexPerson.email}
            textCool={indexPerson.isCool}
            functionCool={() => {
              if (this.state.persons[index].isCool == "chata") {
                this.state.persons[index].isCool = "legal";
                this.setState(<Person textCool={indexPerson.isCool} />);
              } else {
                this.state.persons[index].isCool = "chata";
                this.setState(<Person textCool={indexPerson.isCool} />);
              }
            }}
          />
        ))}
      </>
    );
  }
}

export default ListPersons;
