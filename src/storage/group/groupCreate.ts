import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupGetAll } from "./groupGetAll";
import { AppError } from "@utils/app.error";

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupGetAll();

    const groupAlreadyExists = storageGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storageGroups, newGroup])
    );
  } catch (error) {
    throw error;
  }
}
