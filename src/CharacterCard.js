import { useGetRickMortyCharacterByIdQuery } from './service/rickMorty';

export default function CharacterCard({ characterId }) {
  const { data, error, isLoading } = useGetRickMortyCharacterByIdQuery(characterId);

  return (
    <div>
      {isLoading && <span>Carregando...</span>}
      {data && Object.entries(data).map(([key, value]) => (
        <p><strong>{key}</strong>: {JSON.stringify(value, null, 2)}</p>
      ))}
      {error && <p>{error.data.error}</p>}
    </div>
  )
}