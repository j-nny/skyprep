import { ADD_TO_SUMMARY } from './action-types/summary-actions'

export const addToSummary = (id) => {
  return {
      type: ADD_TO_SUMMARY,
      id 
    }
  }