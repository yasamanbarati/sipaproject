import { SVGAttributes } from 'react'

export function ArrowRightIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      style={{ margin: '1px 0 0 4px' }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 5L15.5 12L8.5 19"
        stroke={props.color ?? '#818181'}
      />
    </svg>
  )
}
