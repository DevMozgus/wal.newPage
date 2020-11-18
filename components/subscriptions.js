import { every } from "@hyperapp/time"
import { clock } from "./view"

const Tick = (state) => {
  return {...state,}
}



const subscriptions = state =>  [
  // Dispatch RequestResource every delayInMilliseconds
  every(1000, Tick),
  ]


export default subscriptions
