import { useEffect, useState } from "react";
import { recoilPersist } from "recoil-persist";
import { atom, useRecoilState } from "recoil";

const { persistAtom } = recoilPersist();

const therapyState = atom({
  key: "therapyState",
  default: "bio-identical",
  effects_UNSTABLE: [persistAtom]
})

export function useTherapyState() {
  const [isInitial, setIsInitial] = useState(true)
  const [therapyValue, setTherapyValue] = useRecoilState(therapyState)

  useEffect(() => setIsInitial(false), [])

  return [isInitial === true ? false : therapyValue, setTherapyValue]
}