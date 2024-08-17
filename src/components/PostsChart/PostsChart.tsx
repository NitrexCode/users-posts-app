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

    const userPostStatistics = users.map((user) => {
      const postLengths = user.posts.map((post) => post.body.length)
      const averagePostLength =
        postLengths.reduce((sum, length) => sum + length, 0) /
          postLengths.length || 0
      const longestPost = user.posts.reduce(
        (longest, post) => {
          return post.body.length > longest.body.length ? post : longest
        },
        user.posts[0] || { body: '', length: 0 },
      )

      return {
        userName: user.name,
        averagePostLength,
        longestPostLength: longestPost.body.length,
      }
    })

    const averagePostLengths = userPostStatistics.map(
      (stat) => stat.averagePostLength,
    )
    const longestPostLengths = userPostStatistics.map(
      (stat) => stat.longestPostLength,
    )

    setChartData({
      labels: userNames,
      datasets: [
        {
          label: 'Number of Posts',
          data: postCounts,
          backgroundColor: 'oklch(74.27% 0.104 195.15)',
        },
        {
          label: 'Average Post Length',
          data: averagePostLengths,
          backgroundColor: 'oklch(63.96% 0.217 294.87)',
        },
        {
          label: 'Longest Post Length',
          data: longestPostLengths,
          backgroundColor: 'oklch(78.48% 0.155 61.3)',
        },
      ],
    })
  }, [users])

  return <Bar data={chartData} className="posts-chart" />
}

export default PostsChart
