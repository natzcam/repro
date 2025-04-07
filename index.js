/* global Pear */

const pipe = Pear.worker.run('./worker')
pipe.on('data', data=> console.log(data.toString()))
pipe.on('close', () => {
  console.log('worker closed on main side')
})
