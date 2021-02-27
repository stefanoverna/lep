import dynamic from 'next/dynamic'

// https://github.com/vercel/next.js/discussions/11291#discussioncomment-4303
const componentList = {
  MyComponent: dynamic(() => import(`../../components/my-component`)),
  OtherComponent: dynamic(() => import(`../../components/other-component`))
}

export default function ReportContent({data}) {
  const components = data.map((d) => componentList[d]))
  return <>
    {components.map(Component => {
      return <li>
       <Component />
      </li>
    })}
  </>
}
