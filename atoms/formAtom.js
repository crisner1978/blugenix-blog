import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist();

export const isFormStartedState = atom({
  key: "isFormStartedState",
  default: false,
  effects_UNSTABLE: [persistAtom]
})

export function useFormStart() {
  const [isInitial, setIsInitial] = useState(true);
  const [formStart, setFormStart] = useRecoilState(isFormStartedState);

  useEffect(() => {
    setIsInitial(false);
  }, [])

  return [isInitial === true ? false : formStart, setFormStart]
}

export const formValueState = atom({
  key: "formValueState",
  default: null,
  effects_UNSTABLE: [persistAtom]
})

export function useFormValueState() {
  const [isInitial, setIsInitial] = useState(true);
  const [formValues, setFormValues] = useRecoilState(formValueState);

  useEffect(() => {
    setIsInitial(false)
  }, [])

  return [isInitial === true ? false : formValues, setFormValues]
}