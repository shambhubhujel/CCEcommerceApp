import { bestBuyKey } from '../../private/constants';
// Initial state
const initialState = {
  trendItems: '',
  popularItems: '',
  allItemsReady: false,
  itemsLoading: false,
  error: null
};

//Actions
const GET_ALL_DATA_INIT = 'GET_ALL_DATA_INIT';
const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS';
const GET_ALL_DATA_FAIL = 'GET_ALL_DATA_FAIL';

//Action creators
export const getInitialData = () => ({
  type: GET_ALL_DATA_INIT
});

export const getAllDataSuccess = (trendData, popularData) => ({
  type: GET_ALL_DATA_SUCCESS,
  trendData: trendData,
  popularData: popularData
});

export const getAllDataFail = (error) => ({
  type: GET_ALL_DATA_FAIL,
  payload: error
});

export const initialFetch = () => {
  //code
}

const initialLoad = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA_INIT:
      return {
        ...state,
        itemsLoading: true
      };
    case GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        trendItems: action.trendData,
        popularItems: action.popularData,
        itemsLoading: false,
        allItemsReady: true
      };
    case GET_ALL_DATA_FAIL:
      return {
        ...state,
        itemsLoading: false,
        allItemsReady: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default initialLoad;