export type HarRecord = Partial<{
  log: {
    entries: {
      request: {
        url: string;
        postData: {
          mimeType: string;
          text: string;
        };
      };
      response: {
        content: {
          text: string;
        };
      };
    }[];
  };
}>;
