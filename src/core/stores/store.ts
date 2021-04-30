import { createContext, useContext } from "react";
import CatStore from "./catStore";


interface Store {
    catStore: CatStore;
}

export const store: Store = {
    catStore : new CatStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}