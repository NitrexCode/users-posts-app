import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'

const PostsChart: React.FC = () => {
  const users = useSelector((state: any) => state.users.users)
  const [chartData, setChartData] = useState({})

  useEffect(() => {}, [users])

  return <Bar data={chartData} />
}

export default PostsChart
