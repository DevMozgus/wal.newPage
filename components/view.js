import { h } from "hyperapp"
import html from 'hyperlit'


const groupSections = (state) => {
  return html`
  <div class="groups">
    ${
      Object.keys(state.linkSections).map(group => html`${linkSections(state, group)}`)
    }
  </div>
  `
}



const linkSections = (state, group, test) => {

  const sectionClicked = (state) => {
    const newValue = !state.linkSections.[group].active

    return { ...state, linkSections: { ...state.linkSections, [group]: { ...state.linkSections.[group], active: newValue,  } } }
  }
  

  return html`
  <div class=${ state.linkSections.[group].active ? "active" : "nonactive" }>
    <button onclick=${sectionClicked} >${group}</button>
    <div>
    ${
      Object.keys(state.linkSections.[group]).map((link, index) => link === "active" ?
      null
      : html`<a key=${index} href=${state.linkSections.[group].[link]}>${link}</a>`)
    }
  </div>
  </div>
  `
}

export const clock = (state) => {
  const addZeroDigit = (digit) => (
    digit.toString().length === 1 ?
    "0" + digit 
    : digit
  )

  const today = new Date ();
  const hours = addZeroDigit(today.getHours())
  const minutes = addZeroDigit(today.getMinutes())
  const seconds = addZeroDigit(today.getSeconds())
  const time = hours + ":" + minutes + ":" + seconds;

  return html`
  <div class="clock">
  <h1>${time}</h1>
  </div>
  `
}


const view = (state) => {
  return html`
  <div class="content">
    ${clock(state)}
    ${groupSections(state)}
  </div>
  `
}


export default view