import clsx from "clsx";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const Calendar = () => {

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  const [move, setMove] = useState(0);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    setMove(-1);
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    setMove(1);
  }


  return (
    <AnimatePresence >
      <motion.div layout className="max-w-sm flex flex-col w-full">
        <motion.div layout className="w-full flex flex-col bg-white p-5">
          <motion.div layout="position"
            className="flex items-center overflow-hidden">
            <motion.p key={currentMonth}
            initial={{ opacity: 0, x: move * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -move * 50 }}  className="text-2021 t-lp font-bold flex-auto">
              {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </motion.p>
            <button
              type="button"
              onClick={previousMonth}
              className="flex flex-none items-center justify-center p-1.5 hover:bg-l-f-overlay1 t-all"
            >
              <span className="rotate-180">
                <ChevronRight size={14} className="text-black" />
              </span>
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className=" ml-1 flex flex-none items-center justify-center p-1.5 hover:bg-l-f-overlay1 t-all"
            >
              <span className=""><ChevronRight size={14} className="text-black" /></span>
            </button>
          </motion.div>
          <motion.div layout className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </motion.div>
          <motion.div layout className="grid grid-cols-7 mt-2 text-sm">
            {days.map((day, dayIdx) => (
              <motion.div layout="position"
                initial={{ opacity: 0, x: move * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -move * 50 }}
                key={day.toString()}
                className={clsx(
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  'py-1.5'
                )}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={clsx(
                    // when the day is selected AND it's today, use white text so it's visible over the dark icon/bg
                    isEqual(day, selectedDay) && isToday(day) && 'text-white',
                    isEqual(day, selectedDay) && !isToday(day) && 'text-l-t-primary',
                    !isEqual(day, selectedDay) && isToday(day) &&
                    'text-l-t-primary',
                    !isEqual(day, selectedDay) && !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    'text-l-t-primary',
                    !isEqual(day, selectedDay) && !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'text-l-t-primary',
                    isEqual(day, selectedDay) && isToday(day) && 'bg-black',
                    isEqual(day, selectedDay) && !isToday(day) &&
                    'bg-l-f-stroke',
                    !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                    (isEqual(day, selectedDay) || isToday(day)) &&
                    'font-semibold',
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                  )}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

export default Calendar;