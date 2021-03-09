import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Account Number</label>
          <input            
            className='form-input'
            type='text'
            pattern='"[0-9]*"'
            name='account_number'
            maxLength='16'
            minLength='16'
            placeholder='Enter your account number'
            value={values.account_number}
            onChange={handleChange}            
          />
          {errors.account_number && <p>{errors.account_number}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>ifsc code</label>
          <input
            className='form-input'
            type='text'
            name='ifsc_code'
            placeholder='Enter your ifsc code'
            value={values.ifsc_code}
            onChange={handleChange}
          />
          {errors.ifsc_code && <p>{errors.ifsc_code}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Amount</label>
          <input
            className='form-input'
            type='text'
            name='amount'
            placeholder='amount'
            value={values.amount}
            onChange={handleChange}
          />
          {errors.amount && <p>{errors.amount}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
