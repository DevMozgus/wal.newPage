import { h, app } from "hyperapp"
import init from "./components/state"
import view from "./components/view"
import subscriptions from "./components/subscriptions"

import "./index.css"

const node = document.querySelector("#app")

app({init, view, subscriptions, node})
