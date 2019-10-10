import { ADD_ITEM, REMOVE_ITEM } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};


export const appReducers = (state = initialState, action) => {
  console.log("App Reducer");
  console.log(action, state);
  switch (action.type) {
    case ADD_ITEM:
      const features = [...state.car.features, action.payload] 
      const car = {...state.car, features, price: state.car.price + action.payload.price}
      console.log(car);
      return {
        ...state,
        car
      };
    case REMOVE_ITEM:
      const clearFeatures = 
        state.car.features.filter(feature => 
          feature.id !== action.payload.id);

      const aCar = {...state.car, features: clearFeatures, price: state.car.price - action.payload.price}
      // console.log(aCar);
      const newState = {
        ...state,
        car: aCar
      }
      return newState;
    default:
      return state;
  }
};
