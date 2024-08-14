import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'

const PostsChart: React.FC = () => {
  const [chartData, setChartData] = useState({})
  const users = useSelector((state: any) => state.users.users)
  useEffect(() => {
    const userNames = users.map((user: any) => user.name)
    const postCounts = users.map((user: any) => user.posts.length)

    setChartData({
      labels: userNames,
      datasets: [
        {
          label: 'Number of Posts',
          data: postCounts,
          backgroundColor: 'rgba(75,192,192,1)',
        },
      ],
    })
  }, [users])

  return <Bar data={chartData} />
}

export default PostsChart
