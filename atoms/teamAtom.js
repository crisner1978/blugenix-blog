import { useEffect, useState } from "react";
import { recoilPersist } from "recoil-persist";
import { atom, useRecoilState } from "recoil";

const { persistAtom } = recoilPersist();

const teamState = atom({
  key: "teamState",
  default: "blue-stephanos",
  effects_UNSTABLE: [persistAtom]
})

export function useTeamState() {
  const [isInitial, setIsInitial] = useState(true)
  const [teamValue, setTeamValue] = useRecoilState(teamState)

  useEffect(() => setIsInitial(false), [])

  return [isInitial === true ? false : teamValue, setTeamValue]
}