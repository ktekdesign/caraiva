"use client"
import {
  DatePicker,
  DatePickerProvider,
  useDatePickGetter,
  useDatePickReset,
} from '@bcad1591/react-date-picker';
import { Button } from '@tremor/react';

const DatePickerInterval = ({setOpen}) => {
  const { pickedDates } = useDatePickGetter();

  const resetFunc = useDatePickReset();

  return (
    <div>
    {pickedDates.firstPickedDate && <div className='-mb-12 z-10 relative w-[930px] text-center'>{pickedDates.firstPickedDate?.toLocaleDateString("pt-BR")} - {pickedDates.secondPickedDate?.toLocaleDateString("pt-BR")}</div>}
      <DatePicker disablePreviousDays />
      <input type='hidden' name='start' value={pickedDates.firstPickedDate?.toString() || ""} />
      <input type='hidden' name='end' value={pickedDates.secondPickedDate?.toString() || ""} />
      <div className='-mt-12 z-10 relative w-[930px] flex justify-center items-center gap-8'>
        <Button onClick={resetFunc}>
            Reset
        </Button>
        <Button onClick={e => {
            e.preventDefault();
            setOpen(false)
        }}>
            Concluir
        </Button>
      </div>
    </div>
  )
}

export default function DatePickerElement({setOpen}) {
  return (
    <DatePickerProvider>
        <DatePickerInterval setOpen={setOpen} />
    </DatePickerProvider>
  )
}