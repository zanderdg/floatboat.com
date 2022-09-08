import { Button, Typography } from 'antd'
import { ArrowRightOutlined} from '@ant-design/icons'
import React from 'react'
import communityImg from '../assets/community.png'

const Community = () => {
  return (
    <div className='community-main'>
     <div className='community-inner'>
     <div className='left'>
<Typography.Title level={1}>Become part of the community</Typography.Title>
<p>Explore our collection of stunning single-family homes in top second home destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own.</p>
<Button type='primary'>LEARN MORE <ArrowRightOutlined /></Button>
      </div>
      <div className='right'>
<img src={communityImg} width={"100%"} />
      </div>
     </div>
    </div>
  )
}

export default Community