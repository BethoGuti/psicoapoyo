import React, { useEffect, useState } from "react";
import {Calendar} from "@nextui-org/react";
import {parseDate} from '@internationalized/date';

export default function InputCalendar( {handleChange} ) {

  const [value, setValue] = useState('');

  useEffect(() => {
    if(value) handleChange( {target: { name: 'date', value: value}} )
  }, [value]);

  return (
    <div className="mt-3">
      <Calendar aria-label="Date (No Selection)" value={value} onChange={setValue}/>
    </div>
  );
}
