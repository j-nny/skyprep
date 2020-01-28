import { ADD_TO_SUMMARY, REMOVE_FROM_SUMMARY, RESET_SUMMARY } from "../actions/action-types/summary-actions";

const initState = {
  configs: [
    {
      "id" : 1,
      "add_on" : "AWD Drivetrain",
      "price" : 2500
    },
    {
      "id" : 2,
      "add_on" : "GPS Navigation",
      "price" : 2000
    },
    {
      "id" : 3,
      "add_on" : "Winter Tire Package",
      "price" : 2000
    },
    {
      "id" : 4,
      "add_on" : "Sport Package",
      "price" : 3500
    },
    {
      "id" : 5,
      "add_on" : "Live Traffic Updates",
      "price" : 1500
    },
    {
      "id" : 6,
      "add_on" : "Roadside Assistance",
      "price" : 2500
    }
  ],
  addedConfigs: []
}

const summaryReducer = (state = initState, action) => {
  if (action.type === ADD_TO_SUMMARY){
    let addedConfig = state.configs.find(config => config.id === action.id)
    let existingConfig = state.addedConfigs.find(config => action.id === config.id)
    if (existingConfig) {
      return state
    } else {
      return {
        ...state,
        addedConfigs: [...state.addedConfigs, addedConfig]
      }
    }
  } else if (action.type === REMOVE_FROM_SUMMARY) {
    let newConfig = state.addedConfigs.filter(config => config.id !== action.id)
      return {
        ...state,
        addedConfigs: newConfig
      }
  } else if (action.type === RESET_SUMMARY) {
    return {
      ...state,
      addedConfigs: []
    }
  } else {
    return state;
  }
}


export default summaryReducer