import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "./store";

//applying the right types to those hooks so that we can use the typed hooks instead of plain 'useDispatch' and 'useSelector'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

