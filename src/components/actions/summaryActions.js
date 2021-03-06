import { ADD_TO_SUMMARY, REMOVE_FROM_SUMMARY, RESET_SUMMARY } from './action-types/summary-actions'

export const addToSummary = (id) => {
  return {
      type: ADD_TO_SUMMARY,
      id 
    }
  }

export const removeFromSummary = (id) => {
  return {
    type: REMOVE_FROM_SUMMARY,
    id
  }
}

export const resetSummary = () => {
  return {
    type: RESET_SUMMARY
  }
}