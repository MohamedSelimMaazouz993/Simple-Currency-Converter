import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EXCHANGE_RATES = {
  TND: 3.11,
  EUR: 0.84,
  USD: 1,
};

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState('TND');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [baseAmount, setBaseAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleBaseAmountChange = (event) => {
    setBaseAmount(event.target.value);
    setTargetAmount(event.target.value * EXCHANGE_RATES[targetCurrency] / EXCHANGE_RATES[baseCurrency]);
  };

  const handleTargetAmountChange = (event) => {
    setTargetAmount(event.target.value);
    setBaseAmount(event.target.value * EXCHANGE_RATES[baseCurrency] / EXCHANGE_RATES[targetCurrency]);
  };

  return (
    <>
    <h1> Simple Currency Converter </h1>
    <Form className="bg-dark text-light p-3">
  <FormGroup>
    <Label for="base-currency" className="text-light">Base Currency</Label>
    <Input type="select" id="base-currency" value={baseCurrency} onChange={handleBaseCurrencyChange} className="form-control-dark">
      <option value="TND">Tunisian Dinar (TND)</option>
      <option value="EUR">Euro (EUR)</option>
      <option value="USD">US Dollar (USD)</option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="base-amount" className="text-light">Amount</Label>
    <Input type="number" id="base-amount" value={baseAmount} onChange={handleBaseAmountChange} className="form-control-dark" />
  </FormGroup>
  <FormGroup>
    <Label for="target-currency" className="text-light">Target Currency</Label>
    <Input type="select" id="target-currency" value={targetCurrency} onChange={handleTargetCurrencyChange} className="form-control-dark">
      <option value="TND">Tunisian Dinar (TND)</option>
      <option value="EUR">Euro (EUR)</option>
      <option value="USD">US Dollar (USD)</option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="target-amount" className="text-light">Converted Amount</Label>
    <Input type="number" id="target-amount" value={targetAmount} onChange={handleTargetAmountChange} className="form-control-dark" />
  </FormGroup>
  <Button color="primary" className="btn-Light">Reset</Button>
</Form>
    </>
  );
};

export default CurrencyConverter;
