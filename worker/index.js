/* global Pear */

function handleError(error){
  console.error("handle uncaught");
  console.error(error);
}
Bare.on('uncaughtException', handleError);
Bare.on('unhandledRejection', handleError);

const pipe = Pear.worker.pipe();
setInterval(() => pipe.write("ping"), 1000);

pipe.on("end", () => {
  console.log("main closed on worker side");
});

setTimeout(()=> {
    throw new Error('hey')
}, 3000)
