import { Heading, Page } from "@shopify/polaris";

export default function Index() {
  return (
    <Page>
      <Heading>
        My Shopify app with Node and React{ 4 + 4 }
        <span role="img" aria-label="tada emoji">
          🎉
        </span>
      </Heading>
    </Page>
  );
}
