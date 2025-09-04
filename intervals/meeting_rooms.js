function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false;
    }
  }
  return true;
}

let intervals = [
  {
    start: 0,
    end: 30,
  },
  {
    start: 5,
    end: 10,
  },
  {
    start: 15,
    end: 20,
  },
];
console.log(canAttendMeetings(intervals));

intervals = [
  {
    start: 5,
    end: 8,
  },
  {
    start: 8,
    end: 15,
  },
];

console.log(canAttendMeetings(intervals));
