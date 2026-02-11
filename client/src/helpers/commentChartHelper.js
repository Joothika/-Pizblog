
export const commentChartHelper = (comments) => {

    let countOccurrences = (arr, prop) => {
        return arr.reduce((acc, item) => {
            const value = item[prop];
            acc[value] = (acc[value] || 0) + 1;
            return acc;
    }, {}); 

    }

    let occurrenceCounts = countOccurrences(comments, 'blogId')

    let mostFrequentBlogId = '';
    let leastFrequentBlogId = '';
    let maxCount = -Infinity;
    let minCount = Infinity;

    for (const item in occurrenceCounts) {
        const count = occurrenceCounts[item];

        if (count > maxCount) {
            maxCount = count;
            mostFrequentBlogId = item;
        }

        if (count < minCount) {
            minCount = count;
            leastFrequentBlogId = item;
        }
    }

    let commentChartData = [
        {
            mostFrequentBlogId,
            count: maxCount
        },
        {
            leastFrequentBlogId,
            count: minCount
        }
    ]

    return commentChartData


}