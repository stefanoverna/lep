import dynamic from "next/dynamic";

// https://github.com/vercel/next.js/discussions/11291#discussioncomment-4303
const componentList = {
  MyComponent: dynamic(() => import(`../../components/my-component`)),
  OtherComponent: dynamic(() => import(`../../components/other-component`)),
};

// eslint-disable-next-line react/prop-types
export default function ReportContent({ data }) {
  // eslint-disable-next-line react/prop-types
  const components = data.map((d) => componentList[d]);
  return (
    <>
      {components.map((Component, index) => {
        return (
          <li key={index}>
            <Component />
          </li>
        );
      })}
    </>
  );
}
