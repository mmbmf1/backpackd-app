export const findBackpack = (backpacks = [], backpack_id) =>
  backpacks.find(backpack => backpack.id === backpack_id);

export const findBackpackName = (backpacks = [], backpack_name) =>
  backpacks.find(backpack => backpack.name === backpack_name);
