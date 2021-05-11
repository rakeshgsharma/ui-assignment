import { data } from '../../utils/data';
import * as AllActions from '../actions';
const initialState = {
  cars: data,
  cart: [],
};

export default function (state = initialState, action: AllActions.All) {
  switch (action.type) {
    case AllActions.ADD_TO_CART: {
      if (
        state.cart.length === 0 ||
        !alreadyExists(state.cart, action.payload.id)
      ) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, count: 1 }],
        };
      } else {
        return {
          ...state,
          cart: updatedCart(state.cart, action.payload, true),
        };
      }
    }
    case AllActions.REDUCE_FROM_CART: {
      return {
        ...state,
        cart: updatedCart(state.cart, action.payload, false),
      };
    }
    case AllActions.SORT_ALPHABETICALLY: {
      const cars = [...state.cars];
      cars.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        cars,
      };
    }
    case AllActions.FILTER: {
      const cars = data.filter((car) => car.category === action.payload);
      return {
        ...state,
        cars,
      };
    }
    case AllActions.RESET_FILTER: {
      return {
        ...state,
        cars: data,
      };
    }
    default: {
      return state;
    }
  }
}

function alreadyExists(cart, carId) {
  if (cart.length === 0) {
    return false;
  }
  if (cart.filter((car) => car.id === carId).length > 0) {
    return true;
  }
  return false;
}

function updatedCart(cart, carToUpdate, isAdd) {
  const newCart = [];
  cart.forEach((car) => {
    if (car.id === carToUpdate.id) {
      const updatedCar = { ...car };
      const count = isAdd ? ++updatedCar.count : --updatedCar.count;
      if (count !== 0) {
        newCart.push({
          ...updatedCar,
          count,
        });
      }
    } else {
      newCart.push(car);
    }
  });
  return newCart;
}
