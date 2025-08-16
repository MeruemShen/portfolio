import React from "react";

type JsonLdProps = {
  data: Record<string, any> | Record<string, any>[];
};

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
};

export default JsonLd;
