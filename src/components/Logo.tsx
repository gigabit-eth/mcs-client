import { useId } from 'react'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg
      width="139"
      height="23"
      viewBox="0 0 139 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        fill="#01AFFF"
        fill-rule="evenodd"
        font-family="Anton-Regular, Anton"
        font-size="21"
        letter-spacing=".713"
      >
        <tspan x=".144" y="18">
          MicronStrategy
        </tspan>
      </text>
    </svg>
  )
}
