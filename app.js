//uncomment lines for debugging or learning
const express = require("express");
const bodyParser = require("body-parser");
const scheduler = require("node-schedule");

const app = express();
const PORT = 80; // The default HTTP and HTTPS ports for the Web server are port 80 and 443, respectively.

//one for the property of schedular are schedulerJob, and RecurrenceRule. Destructuring of the scheduler
const { scheduleJob, RecurrenceRule, gracefulShutdown } = scheduler;

/*Job objects are EventEmitters, and emit the following events:

1. A {run} event after each execution.
2. A {scheduled} event each time they're scheduled to run.
3. A {canceled} event when an invocation is canceled before it's executed.
Note that canceled is the single-L American spelling.
4. An {error} event when a job invocation triggered by a schedule throws or returns a rejected Promise.
5. A {success} event when a job invocation triggered by a schedule returns successfully or returns a resolved Promise. In any case, the success event receives the value returned by the callback or in case of a promise, the resolved value.



function schedularJob(Cron-style Scheduling, callback function)
def Cron-style Scheduling: 
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

example:
*/

// Use "*/2 * * * * *" to run the job every 2 seconds
// const job = scheduleJob("*/2 * * * * *", function () {
//   console.log("The answer to life, the universe, and everything!");
// });

//Recurrence Rule Scheduling

// const recurrenceRule = new RecurrenceRule();
// ex: let suppose call trigger any message after some time so we can use:
// recurrenceRule.start = new Date(Date.now() + 5000);
// recurrenceRule.end = new Date(recurrenceRule.start.getTime() + 15000);
// recurrenceRule.rule = "*/1 * * * * *";
// scheduleJob(recurrenceRule, function () {
//   console.log("schedular with range time");
// });

//Date-based Scheduling:

/*
const customDate = new Date(2023, 11, 17, 12, 22, 0);
const job = scheduleJob(customDate, function () {
  console.log("The answer to life, the universe, and everything!");
});*/

app.get("/", (req, res) => {
  // shutdown any jobs:
  //   job.cancel();

  /*You can shutdown jobs gracefully.
    gracefulShutdown() will cancel all jobs and return Promise.
    It will wait until all jobs are terminated.
    */
  //gracefulShutdown();
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
