import { Card, Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {
  return (
    <div className=' px-12 py-12 max-w-xl'>
        <Skeleton/>
        <Flex className=' space-x-3' my="2">
        <Skeleton/>
        </Flex>
        <Card className=' prose mt-5'>
        <Skeleton count={3}/>
        </Card>

    </div>
  )
}

export default loading