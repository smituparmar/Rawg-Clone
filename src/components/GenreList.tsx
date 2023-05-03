import useGenres from "../hooks/useGrenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
