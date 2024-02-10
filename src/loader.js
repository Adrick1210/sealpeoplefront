const url = process.env.REACT_APP_URL;

export const peopleLoader = async () => {
  const response = await fetch(`${url}/people`);
  const people = await response.json();
  return people;
};

export const personLoader = async ({ params }) => {
  const response = await fetch(`${url}/people/${params.id}`);
  const person = await response.json();
  return person;
};
