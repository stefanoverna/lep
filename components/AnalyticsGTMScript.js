/* eslint-disable */
import React from "react";
import config from "@/config";

const GTMScript = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${config.gtmId}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag(
            'config',
            '${config.gtmId}',
            { 'optimize_id': '${config.googleOptimizeId}'}
          );
        `,
      }}
    />
  </>
);

export default GTMScript;
