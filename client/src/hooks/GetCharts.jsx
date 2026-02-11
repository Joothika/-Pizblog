import { UseCommentContext } from "../context/CommentDataContext"
import { UsePizzaContext } from "../context/PizzaDataContext"
import {GetComments} from "./GetComments"
import {GetFeaturedPizzas, GetPizzas} from "./GetPizzas"
import { days } from "../helpers/dateHelper"
import { commentChartHelper} from "../helpers/commentChartHelper"
import { UpdateBlogChartData } from "../helpers/blogChartHelper"



export const GetCommentChart = () => {
    const {comments} = UseCommentContext()
    GetComments()
    const chartData = commentChartHelper(comments)
    console.log(chartData)

      const pieChartData =  {
                _id:'chart-pie',
                labels:[chartData[0]?.mostFrequentBlogId, chartData[1]?.leastFrequentBlogId],
                data:[
                              {
                                data:[chartData[0]?.count, chartData[1]?.count],
                                backgroundColor: [
                                  '#2bf048',
                                  '#297134'
                                ]
                              }
                    ]
            }

    return pieChartData
}


export const GetFeaturedChart = () => {
  const {featuredPizzas} = UsePizzaContext()
  GetFeaturedPizzas()

  const barChartData =  {
          _id:'chart-bar',
          labels:days,
          data: [
                  {
                    data: UpdateBlogChartData(featuredPizzas),
                    parsing: {
                                xAxisKey: 'day',
                                yAxisKey: 'data'
                              },
                    backgroundColor: '#4ED762'
                  }
                ]
    }

    return barChartData
}


export const GetAllBlogChart = () => {
  const {pizzas} = UsePizzaContext()
  GetPizzas()

  const lineChartData =  {
        _id:'chart-line',
        labels:days,
        data: [
                {
                data: UpdateBlogChartData(pizzas),
                fill: true,
                parsing: {
                            xAxisKey: 'day',
                            yAxisKey: 'data'
                          },
                backgroundColor:'#ffffff',
                borderColor: '#4ED762',
                tension: 0.3, 
                },
             ],
    }

    return lineChartData
}