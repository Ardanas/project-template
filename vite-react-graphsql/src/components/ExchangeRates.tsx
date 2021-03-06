import React from 'react';
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from '@/api/index.ts';

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.slice(0, 10).map(({ currency, rate }) => (
    <div key={currency} style={{ background: 'skyblue' }}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRates;
