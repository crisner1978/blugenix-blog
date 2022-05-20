import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist();

const isFormStartedState = atom({
  key: "isFormStartedState",
  default: false,
  effects_UNSTABLE: [persistAtom]
})

export function useFormStart() {
  const [isInitial, setIsInitial] = useState(true);
  const [formStart, setFormStart] = useRecoilState(isFormStartedState);

  useEffect(() => setIsInitial(false), [])

  return [isInitial === true ? false : formStart, setFormStart]
}

const formDataState = atom({
  key: "formDataState",
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export function useFormValueState() {
  const [isInitial, setIsInitial] = useState(true);
  const [formValues, setFormValues] = useRecoilState(formDataState);

  useEffect(() => setIsInitial(false), [])

  return [isInitial === true ? false : formValues, setFormValues]
}