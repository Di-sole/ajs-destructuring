export default function showSpecials(character) {
  const specialAttacks = [];

  for (const elem of character.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    specialAttacks.push({
      id, name, icon, description,
    });
  }

  return specialAttacks;
}
