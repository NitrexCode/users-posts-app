import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PostsChart: React.FC = () => {
  const users = useSelector((state: any) => state.users.users)
  const [chartData, setChartData] = useState({})

  useEffect(() => {}, [users])

  return <div>{/* Chart will be rendered here */}</div>
}

export default PostsChart
