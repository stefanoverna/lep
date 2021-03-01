import { StructuredText, Image } from "react-datocms";

// eslint-disable-next-line react/prop-types
export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
        <StructuredText
          data={content}
          renderInlineRecord={({ record }) => {
            return <pre>{JSON.stringify(record)}</pre>;
          }}
          renderBlock={({ record }) => {
            if (record.__typename === "ImageBlockRecord") {
              return <Image data={record.image.responsiveImage} />;
            }

            return (
              <>
                <p>Don&apos;t know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
