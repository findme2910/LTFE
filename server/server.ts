import express from 'express';
import cors from 'cors';
import tvScheduleRoutes from './routes/tvSchedule';
import movieScheduleRoutes from './routes/movieSchedule';
import fuelPrices from './routes/fuelPrices'
import aqi from './routes/aqi'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(tvScheduleRoutes);
app.use(movieScheduleRoutes);
app.use(fuelPrices);
app.use(aqi);
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
