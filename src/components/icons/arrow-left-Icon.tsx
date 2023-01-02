import { SVGAttributes } from 'react'

export function ArrowLeftIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      style={{ margin: '1px 1px 0 0px' }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 19L8.5 12L15.5 5"
        stroke={props.color ?? '#818181'}
      />
    </svg>
  )
}
export function ArrowLeftIcon01(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="11" 
      height="19" 
      viewBox="0 0 11 19" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path 
      d="M9.49951 18L0.999511 9.5L9.49951 1" 
      stroke="black" 
      stroke-width="1.5" 
      stroke-linecap="round" 
      stroke-linejoin="round" />
    </svg>
  )
}
