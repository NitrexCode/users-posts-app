import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js'

import './PostsChart.css'
import { User } from '../../types/types'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const PostsChart: React.FC = () => {
  const users = useSelector(
    (state: { users: { users: User[] } }) => state.users.users,
  )

  const [chartData, setChartData] = useState<
    ChartData<'bar', number[], string>
  >({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const userNames = users.map((user: User) => user.name)
    const postCounts = users.map((user: User) => user.posts.length)

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
