import { Application } from 'express';
import healthcheckRouter from './api/healthcheck';
import userRouter from './api/user';
// import authLocalRouter from './auth/local';
// import hotelRouter from './api/hotel';
// import inclusion_roomRouter from './api/inclusion_room'
// import amenity_roomRouter from './api/amenities_room'
// import roomRouter from './api/room'
// import bookedRoomRouter from './api/bookedRoom'
// import paymentRouter from './api/payment'

const routes = (app: Application) => {
  app.use('/api/healthcheck', healthcheckRouter)
  app.use('/api/user', userRouter)
//   app.use('/api/hotel', hotelRouter)
//   app.use('/api/room', roomRouter)
//   app.use('/api/inclusion_room', inclusion_roomRouter)
//   app.use('/api/amenities_room', amenity_roomRouter)
//   app.use('/api/booked-room', bookedRoomRouter)

// //   //Auth
//   app.use('/auth/local', authLocalRouter)
//   app.use('/api/payment', paymentRouter)

}

export default routes