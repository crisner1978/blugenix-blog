import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist();

export const formState = atom({
  key: "formState",
  default: false,
  effects_UNSTABLE: [persistAtom]
})

export function useFormState() {
  const [isInitial, setIsInitial] = useState(true);
  const [formStarted, setFormStarted] = useRecoilState(formState);

  useEffect(() => {
    setIsInitial(false);
  }, [])

  return [isInitial === true ? false : formStarted, setFormStarted]
}