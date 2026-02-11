import {Bar, Line, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  Filler, 
  Title,
  Tooltip
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  Filler, 
  Title,
  Tooltip
);


const options = {
scales:{
  x:{
    grid: {
      display: false, // Hides the vertical grid lines
    }
  },
  y: {
    display:false,
    grid: {
      display: false, // Hides the horizontal grid lines
    }
  },
  // maintainAspectRatio: false
},

};
export const BarChart = ({labels,data}) => {
    return <Bar
            className='cursor-pointer justify-self-center mt-5 md:mt-10'
            datasetIdKey='bar'
            data={{
                labels:labels,
                datasets:data
            }}
            options={options}
            />
}


export const PieChart = ({labels, data}) => {    
    return  <Pie 
            className='cursor-pointer justify-self-center md:mt-10 max-sm:scale-70 md:scale-125'
            data={{
                labels:labels,
                datasets:data,
            }}
            />
}


export const LineChart = ({labels, data}) => {
    return <Line 
            className='cursor-pointer md:mt-10'
            data={{
                labels:labels,
                datasets:data,
            }}
            options={options}
            />
}