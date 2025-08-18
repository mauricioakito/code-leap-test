import type { ElementType, ForwardedRef, HTMLAttributes } from 'react'

interface DynamicTagProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType<any>
  condition?: boolean
  ref?: ForwardedRef<HTMLElement | HTMLDivElement>
  // disabled?: boolean
}

const DynamicTag: React.FC<DynamicTagProps> = ({ as: Tag = 'div', condition = true,  ref, ...rest}) => condition ? <Tag {...rest} ref={ref} /> : <>{rest?.children}</>

DynamicTag.displayName = 'DynamicTag'
export { DynamicTag }
