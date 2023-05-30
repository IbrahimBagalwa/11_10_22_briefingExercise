function roundRobin(jobs, slice, index) {
  let totalClockCycles = 0;
  let jobsCopy = [...jobs];

  while (jobsCopy[index] > 0) {
    let currentJob = jobsCopy.shift();
    const executedCycles = Math.min(slice, currentJob);
    totalClockCycles += executedCycles;
    currentJob -= executedCycles;

    jobsCopy.push(currentJob);

    if (index === 0) {
      index = jobsCopy.length - 1;
    } else {
      index--;
    }
  }

  return totalClockCycles;
}

console.log(roundRobin([10, 20, 1], 5, 0));
