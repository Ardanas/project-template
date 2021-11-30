import { gql } from '@apollo/client';
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

export { EXCHANGE_RATES, GET_DOGS };
// export default { EXCHANGE_RATES };
