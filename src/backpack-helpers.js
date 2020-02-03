export const findBackpack = (backpacks=[], backpack_id) =>
    backpacks.find(backpack => backpack.id.toString() === backpack_id)