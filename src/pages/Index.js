import { Link, useLoaderData, Form } from "react-router-dom";

const Landing = () => {
  const people = useLoaderData();
  console.log(people);

  //   if (people.isLoading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <h3>Create a Person </h3>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="person's name" />
        <input type="input" name="image" placeholder="person's photo" />
        <input type="input" name="title" placeholder="person's title" />
        <input type="submit" value={`Add Person`} />
      </Form>

      <h1>People</h1>
      {people.map((person) => {
        return (
          <div key={person._id} className="person">
            <Link to={`/${person._id}`}>
              <h1>{person.name}</h1>
            </Link>
            <img src={person.image} alt="" />
            <h3>{person.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
