

const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({person,character,voice})=> (
        <div key={person.id}>
          <img
            src={
              person.image
                ? person.image.medium
                : 'not-found-image.png'
            }
           
          />
          <div>
            {person.name} || {character.name}{voice &&'|Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
