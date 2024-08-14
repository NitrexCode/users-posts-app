import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'

import { RootState } from '../redux/store'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface User {
  id: number
  name: string
  email: string
  posts: Post[]
}

const PostsChart: React.FC = () => {
  const [chartData, setChartData] = useState({})
  const users = useSelector((state: RootState) => state.users.users)

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
