import { getDay } from "./dateHelper"


export const UpdateBlogChartData = (pizzas) => {

    const dataByDay = pizzas?.map(fp => {
        let day = getDay(fp?.createdAt)
        return day
    })

    let dayOccurrencesObj = dataByDay.reduce((acc, curr) => {
                acc[curr] = (acc[curr] || 0) + 1;
                return acc;
             }, {});

    let chartDataArr = Object.entries(dayOccurrencesObj).map(([key, value]) => ({day:key, data:value}))


    return chartDataArr
}