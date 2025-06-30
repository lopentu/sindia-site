import { Title } from '@mantine/core'
import React from 'react'

export default function SindiaTitle({ title }: { title: string }) {
  return (
    <>
     <Title my={"xl"} c={"gray"} order={2}>{title}</Title> 
    </>
  )
}
