import React from 'react';

export default function useInput({ type, placeholder }) {
  const [value, setValue] = React.useState("")
  const reset = () => setValue("")
  const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} placeholder={placeholder} />;
  return [value, input, reset];
}